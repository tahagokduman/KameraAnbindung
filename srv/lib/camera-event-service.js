const cds = require('@sap/cds')

function normalizePlate(value) {
  return (value || '').replace(/\s+/g, '').toUpperCase()
}

function normalizeEventType(value) {
  const v = (value || '').toUpperCase()
  if (v === 'ENTRY' || v === 'EXIT') return v
  return v
}

async function saveCameraEvent(data) {
  const db = await cds.connect.to('db')
  
  // KORREKTUR: String statt Funktionsaufruf
  const CameraEvents = 'KameraAnbindung.CameraEvents'

  const entry = {
    ID: cds.utils.uuid(), // Erzeuge eine ID, damit wir sie zurückgeben können
    eventType: normalizeEventType(data.eventType),
    sourceDeviceId: data.sourceDeviceId,
    containerCode: data.containerCode || null,
    timestamp: data.timestamp || new Date().toISOString(),
    plateNormalized: normalizePlate(data.plateNormalized),
    status: data.status || 'NEW',
    confidence: data.confidence != null ? Number(data.confidence) : null,
    payloadVersion: data.payloadVersion || '1.0'
  }

  await db.run(INSERT.into(CameraEvents).entries(entry))
  return entry.ID
}

async function processCameraEventById(eventId) {
  const db = await cds.connect.to('db')
  
  // KORREKTUR: Strings für die Entitäten
  const CameraEvents = 'KameraAnbindung.CameraEvents'
  const Vehicles = 'KameraAnbindung.Vehicles'
  const Session = 'KameraAnbindung.Session'

  const event = await db.run(
    SELECT.one.from(CameraEvents).where({ ID: eventId })
  )

  if (!event) return 'Event not found'

  const vehicle = await db.run(
    SELECT.one.from(Vehicles).where({
      licencePlate: event.plateNormalized
    })
  )

  if (!vehicle) {
    await db.run(
      UPDATE(CameraEvents).set({ status: 'FAILED' }).where({ ID: eventId })
    )
    return 'Unknown vehicle'
  }

  if (event.eventType === 'ENTRY') {
    const existing = await db.run(
      SELECT.one.from(Session).where({
        vehicle_ID: vehicle.ID,
        status: 'OPEN'
      })
    )

    if (existing) {
      await db.run(
        UPDATE(CameraEvents).set({ status: 'FAILED' }).where({ ID: eventId })
      )
      return 'Already inside'
    }

    await db.run(
      INSERT.into(Session).entries({
        vehicle_ID: vehicle.ID,
        entryTime: event.timestamp,
        status: 'OPEN'
      })
    )

    await db.run(
      UPDATE(CameraEvents).set({ status: 'PROCESSED' }).where({ ID: eventId })
    )

    return 'ENTRY processed'
  }

  if (event.eventType === 'EXIT') {
    const session = await db.run(
      SELECT.one.from(Session).where({
        vehicle_ID: vehicle.ID,
        status: 'OPEN'
      })
    )

    if (!session) {
      await db.run(
        UPDATE(CameraEvents).set({ status: 'FAILED' }).where({ ID: eventId })
      )
      return 'No open session'
    }

    await db.run(
      UPDATE(Session)
        .set({
          exitTime: event.timestamp,
          status: 'CLOSED'
        })
        .where({ ID: session.ID })
    )

    await db.run(
      UPDATE(CameraEvents).set({ status: 'PROCESSED' }).where({ ID: eventId })
    )

    return 'EXIT processed'
  }

  return 'Unknown event type'
}

module.exports = {
  saveCameraEvent,
  processCameraEventById
}