const mqtt = require('mqtt');
const cds = require('@sap/cds');
// Importiere die DB-Logik aus deinem Service
const {
  saveCameraEvent,
  processCameraEventById
} = require('../srv/lib/camera-event-service');

// NEU: Importiere den Kafka-Mock-Producer
// Stelle sicher, dass die Datei kafka-producer.js im selben Ordner existiert!
const { sendToKafka } = require('./kafka-producer');

async function start() {
  // 1. Verbindung zur CAP-Datenbank herstellen
  try {
    await cds.connect.to('db');
    console.log('✅ Verbindung zur Datenbank steht.');
  } catch (err) {
    console.error('❌ Datenbank-Verbindungsfehler:', err.message);
  }

  const brokerUrl = process.env.MQTT_BROKER_URL || 'mqtt://test.mosquitto.org:1883';
  const topic = process.env.MQTT_TOPIC || 'kameraanbindung/test/events';

  // 2. MQTT Client mit eindeutiger ID starten
  const client = mqtt.connect(brokerUrl, { 
    clientId: 'lis_' + Math.random().toString(16).slice(2, 8) 
  });

  client.on('connect', () => {
    console.log('✅ MQTT Listener aktiv auf:', brokerUrl);
    client.subscribe(topic, (err) => {
      if (err) console.error('❌ Fehler beim Abonnieren:', err);
      else console.log(`📡 Höre auf Topic: ${topic}`);
    });
  });

  // 3. Zentraler Nachrichten-Handler
  client.on('message', async (receivedTopic, message) => {
    try {
      const payload = JSON.parse(message.toString());
      console.log('-------------------------------------------');
      console.log('📩 MQTT Nachricht erhalten:', payload.plateNormalized);

      // A) Event an Kafka-Mock senden (Streaming-Schicht)
      // Hinweis: Wenn kein Kafka-Server läuft, wird dies im Producer geloggt
      await sendToKafka(payload);

      // B) Event in der lokalen SAP-Datenbank speichern (Persistence)
      const eventId = await saveCameraEvent(payload);
      
      if (eventId) {
        console.log('💾 In DB gespeichert. ID:', eventId);
        
        // C) Geschäftslogik ausführen (Fahrzeugprüfung, Sessions)
        const result = await processCameraEventById(eventId);
        console.log('⚙️ Verarbeitung:', result);
      }

    } catch (err) {
      console.error('❌ Fehler im Verarbeitungs-Ablauf:', err.message);
    }
  });

  client.on('error', (err) => {
    console.error('❌ MQTT Verbindungsfehler:', err);
  });
}

// Skript starten
start().catch(err => {
  console.error('💥 Kritischer Fehler beim Start des Listeners:', err);
});