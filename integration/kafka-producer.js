const fs = require('fs');
const path = require('path');

// Wir simulieren Kafka, indem wir die Events in eine lokale Log-Datei schreiben
const logFile = path.join(__dirname, 'kafka_mock_stream.log');

async function sendToKafka(event) {
  try {
    const timestamp = new Date().toISOString();
    const logEntry = `[KAFKA-TOPIC: camera-events] | ${timestamp} | Payload: ${JSON.stringify(event)}\n`;
    
    // Wir hängen das Event einfach an die Datei an
    fs.appendFileSync(logFile, logEntry);
    
    console.log('📝 (Mock) Event in Kafka-Log geschrieben:', event.plateNormalized);
  } catch (err) {
    console.error('❌ Mock-Kafka Fehler:', err.message);
  }
}

module.exports = { sendToKafka };