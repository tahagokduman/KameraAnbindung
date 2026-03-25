const cds = require('@sap/cds')

module.exports = cds.service.impl(async function () {
  const { CameraEvents, Vehicles, Session, Reservations, Tariffs } = this.entities

  this.on('processEvent', async (req) => {
    const { eventId } = req.data

    const event = await SELECT.one.from(CameraEvents).where({ ID: eventId })
    if (!event) return 'Event not found'

    const vehicle = await SELECT.one.from(Vehicles).where({
      licencePlate: event.plateNormalized
    })
    if (!vehicle) return 'Unknown vehicle'

    if (event.eventType === 'ENTRY') {
      const existing = await SELECT.one.from(Session).where({
        vehicle_ID: vehicle.ID,
        status: 'OPEN'
      })

      if (existing) return 'Already inside'

      await INSERT.into(Session).entries({
        vehicle_ID: vehicle.ID,
        entryTime: event.timestamp,
        status: 'OPEN'
      })

      return 'ENTRY processed'
    }

    if (event.eventType === 'EXIT') {
      const session = await SELECT.one.from(Session).where({
        vehicle_ID: vehicle.ID,
        status: 'OPEN'
      })

      if (!session) return 'No open session'

      await UPDATE(Session)
        .set({
          exitTime: event.timestamp,
          status: 'CLOSED'
        })
        .where({ ID: session.ID })

      return 'EXIT processed'
    }

    return 'Unknown event type'
  })

  async function determineCheapestTariff(startTime, endTime) {
    const tariffs = await SELECT.from(Tariffs)
    if (!tariffs.length) return null

    const start = new Date(startTime)
    const end = new Date(endTime)

    const diffMs = end - start
    const minutes = Math.ceil(diffMs / (1000 * 60))
    const hours = Math.ceil(minutes / 60)
    const days = Math.ceil(hours / 24)

    let cheapest = null

    for (const tariff of tariffs) {
      const unit = (tariff.unit || '').toLowerCase()
      const price = Number(tariff.price || 0)
      let total = null

      switch (unit) {
        case 'per_hour':
        case 'stündlich':
          total = hours * price
          break
        case 'per_day':
        case 'täglich':
          total = days * price
          break
        case 'per_week':
        case 'weekly':
        case 'wöchentlich':
          total = Math.ceil(days / 7) * price
          break
        default:
          continue
      }

      if (!cheapest || total < cheapest.total) {
        cheapest = { tariffId: tariff.ID, total }
      }
    }

    return cheapest
  }

  this.before('CREATE', Reservations, async (req) => {
    const data = req.data

    if (!data.startTime || !data.endTime) {
      req.error(400, 'Von- und Bis-Datum müssen angegeben werden.')
      return
    }

    const von = new Date(data.startTime)
    const bis = new Date(data.endTime)

    if (von >= bis) {
      req.error(400, '"Bis"-Datum muss nach dem "Von"-Datum liegen.')
      return
    }

    data.status = 'ausstehend'

    delete data.tariff_ID
    delete data.tariff

    const cheapest = await determineCheapestTariff(data.startTime, data.endTime)
    if (!cheapest) {
      req.error(400, 'Es konnte kein passender Tarif ermittelt werden.')
      return
    }

    data.tariff_ID = cheapest.tariffId
  })

  this.before('UPDATE', Reservations, async (req) => {
    const data = req.data
    const id = req.params[0]?.ID ?? req.params[0]

    const current = await SELECT.one.from(Reservations).where({ ID: id })
    if (!current) return

    const startTime = data.startTime ?? current.startTime
    const endTime = data.endTime ?? current.endTime

    const von = new Date(startTime)
    const bis = new Date(endTime)

    if (von >= bis) {
      req.error(400, '"Bis"-Datum muss nach dem "Von"-Datum liegen.')
      return
    }

    if (data.status !== undefined) {
      data.status = current.status
    }

    if (data.tariff_ID !== undefined || data.tariff !== undefined) {
      delete data.tariff_ID
      delete data.tariff
    }

    if (data.startTime !== undefined || data.endTime !== undefined) {
      const cheapest = await determineCheapestTariff(startTime, endTime)
      if (!cheapest) {
        req.error(400, 'Es konnte kein passender Tarif ermittelt werden.')
        return
      }

      data.tariff_ID = cheapest.tariffId
    }
  })
})