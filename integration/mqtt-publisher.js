const mqtt = require('mqtt')

const brokerUrl = process.env.MQTT_BROKER_URL || 'mqtt://test.mosquitto.org:1883'
const topic = process.env.MQTT_TOPIC || 'kameraanbindung/test/events'

// Wir nutzen eine zufällige Client-ID, damit es keine Konflikte gibt
const client = mqtt.connect(brokerUrl, { clientId: 'publisher_' + Math.random().toString(16).slice(2, 8) })

const plates = ['F-AB1234', 'M-XY567', 'B-TK100', 'S-RS99', 'HH-LL12']
const cameras = ['cam-01', 'cam-02', 'cam-03']

client.on('connect', () => {
  console.log('✅ Publisher verbunden:', brokerUrl)

  // Alle 5 Sekunden eine neue Nachricht senden
  setInterval(() => {
    const payload = {
      eventType: Math.random() > 0.5 ? 'ENTRY' : 'EXIT',
      sourceDeviceId: cameras[Math.floor(Math.random() * cameras.length)],
      containerCode: null,
      timestamp: new Date().toISOString(),
      plateNormalized: plates[Math.floor(Math.random() * plates.length)],
      confidence: Number((80 + Math.random() * 19).toFixed(2)),
      payloadVersion: '1.0'
    }

    console.log('🚀 Sende Event:', payload.plateNormalized, 'via', payload.sourceDeviceId)

    client.publish(topic, JSON.stringify(payload), (err) => {
      if (err) {
        console.error('❌ Fehler beim Senden:', err)
      }
    })
  }, 5000) // Intervall in Millisekunden (5000ms = 5 Sek)
})

client.on('error', (err) => {
  console.error('⚠️ MQTT Fehler:', err)
})