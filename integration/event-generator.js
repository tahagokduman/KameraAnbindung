const mqtt = require('mqtt')

const brokerUrl = process.env.MQTT_BROKER_URL || 'mqtt://test.mosquitto.org:1883'
const topic = process.env.MQTT_TOPIC || 'kameraanbindung/test/events'
const intervalMs = Number(process.env.EVENT_INTERVAL_MS || 3000)

// Eindeutige ID für den Generator
const client = mqtt.connect(brokerUrl, { clientId: 'gen_' + Math.random().toString(16).slice(2, 8) })

const cameras = ['cam-01', 'cam-02', 'cam-03']
const plates = ['FAB1234', 'MAB9876', 'BXY4455', 'MHH2026', 'SUL1001', 'KAAP7788']
const eventTypes = ['ENTRY', 'EXIT']

function randomItem(arr) { return arr[Math.floor(Math.random() * arr.length)] }
function randomConfidence() { return Number((80 + Math.random() * 19.9).toFixed(2)) }

client.on('connect', () => {
    console.log('✅ Event Generator verbunden:', brokerUrl)
    
    setInterval(() => {
        const payload = {
            eventType: randomItem(eventTypes),
            sourceDeviceId: randomItem(cameras),
            containerCode: null,
            timestamp: new Date().toISOString(),
            plateNormalized: randomItem(plates),
            confidence: randomConfidence(),
            payloadVersion: '1.0'
        }

        client.publish(topic, JSON.stringify(payload), (err) => {
            if (err) console.error('❌ Fehler beim Senden:', err)
            else console.log('🚀 Event gesendet:', payload.plateNormalized)
        })
    }, intervalMs)
})

client.on('error', (err) => console.error('MQTT Fehler:', err))