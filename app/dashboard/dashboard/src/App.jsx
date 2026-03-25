import React, { useEffect, useMemo, useState } from 'react'

function formatDate(value) {
  if (!value) return '-'
  return new Date(value).toLocaleString('de-DE')
}

function badgeStyle(status) {
  if (status === 'PROCESSED') return { background: '#dcfce7', color: '#166534' }
  if (status === 'FAILED') return { background: '#fee2e2', color: '#991b1b' }
  if (status === 'NEW') return { background: '#e0e7ff', color: '#3730a3' }
  if (status === 'OPEN') return { background: '#dcfce7', color: '#166534' }
  if (status === 'CLOSED') return { background: '#f3f4f6', color: '#374151' }
  return { background: '#f3f4f6', color: '#111827' }
}

function StatusBadge({ status }) {
  return (
    <span
      style={{
        ...badgeStyle(status),
        padding: '4px 10px',
        borderRadius: '999px',
        fontSize: '12px',
        fontWeight: 600,
      }}
    >
      {status}
    </span>
  )
}

export default function App() {
  const [cameraEvents, setCameraEvents] = useState([])
  const [sessions, setSessions] = useState([])
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('ALL')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  async function loadData() {
    try {
      setError('')

      const [eventsRes, sessionsRes] = await Promise.all([
        fetch('http://localhost:4004/service/KameraAnbindungService/CameraEvents?$format=json', {
          headers: { Accept: 'application/json' },
        }),
        fetch('http://localhost:4004/service/KameraAnbindungService/Session?$format=json', {
          headers: { Accept: 'application/json' },
        }),
      ])

      if (!eventsRes.ok) throw new Error('CameraEvents konnten nicht geladen werden')
      if (!sessionsRes.ok) throw new Error('Session konnten nicht geladen werden')

      const eventsData = await eventsRes.json()
      const sessionsData = await sessionsRes.json()

      const events = Array.isArray(eventsData.value) ? eventsData.value : []
      const sess = Array.isArray(sessionsData.value) ? sessionsData.value : []

      events.sort((a, b) => new Date(b.timestamp || 0) - new Date(a.timestamp || 0))

      setCameraEvents(events)
      setSessions(sess)
    } catch (err) {
      console.error(err)
      setError(err.message || 'Fehler beim Laden der Daten')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()

    const timer = setInterval(() => {
      loadData()
    }, 2000)

    return () => clearInterval(timer)
  }, [])

  const filteredEvents = useMemo(() => {
    return cameraEvents.filter((event) => {
      const text = [
        event.plateNormalized,
        event.sourceDeviceId,
        event.eventType,
        event.status,
      ]
        .join(' ')
        .toLowerCase()

      const matchesSearch = text.includes(search.toLowerCase())
      const matchesFilter = filter === 'ALL' ? true : event.status === filter

      return matchesSearch && matchesFilter
    })
  }, [cameraEvents, search, filter])

  const stats = {
    totalEvents: cameraEvents.length,
    processed: cameraEvents.filter((e) => e.status === 'PROCESSED').length,
    failed: cameraEvents.filter((e) => e.status === 'FAILED').length,
    openSessions: sessions.filter((s) => s.status === 'OPEN').length,
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', padding: '24px', color: '#0f172a' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div>
            <h1 style={{ fontSize: '32px', marginBottom: '8px' }}>Kameraanbindung Dashboard</h1>
            <p style={{ marginBottom: '24px', color: '#475569' }}>
              Übersicht über Kamera-Events und Sessions
            </p>
          </div>

          <button
            onClick={loadData}
            style={{
              padding: '10px 14px',
              borderRadius: '10px',
              border: '1px solid #cbd5e1',
              background: '#fff',
              cursor: 'pointer',
            }}
          >
            Aktualisieren
          </button>
        </div>

        {loading && <p>Daten werden geladen ...</p>}
        {error && <p style={{ color: 'crimson' }}>{error}</p>}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>
          <div style={cardStyle}>
            <div style={cardLabel}>Gesamt Events</div>
            <div style={cardValue}>{stats.totalEvents}</div>
          </div>
          <div style={cardStyle}>
            <div style={cardLabel}>Verarbeitet</div>
            <div style={cardValue}>{stats.processed}</div>
          </div>
          <div style={cardStyle}>
            <div style={cardLabel}>Fehlgeschlagen</div>
            <div style={cardValue}>{stats.failed}</div>
          </div>
          <div style={cardStyle}>
            <div style={cardLabel}>Offene Sessions</div>
            <div style={cardValue}>{stats.openSessions}</div>
          </div>
        </div>

        <div style={{ ...cardStyle, marginBottom: '24px' }}>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Nach Kennzeichen, Kamera oder Status suchen"
              style={{
                padding: '10px 12px',
                borderRadius: '10px',
                border: '1px solid #cbd5e1',
                minWidth: '320px',
              }}
            />

            {['ALL', 'NEW', 'PROCESSED', 'FAILED'].map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                style={{
                  padding: '10px 14px',
                  borderRadius: '10px',
                  border: '1px solid #cbd5e1',
                  background: filter === item ? '#0f172a' : '#fff',
                  color: filter === item ? '#fff' : '#0f172a',
                  cursor: 'pointer',
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div style={{ ...cardStyle, marginBottom: '24px' }}>
          <h2 style={{ marginTop: 0 }}>CameraEvents</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thtd}>Typ</th>
                <th style={thtd}>Kamera</th>
                <th style={thtd}>Kennzeichen</th>
                <th style={thtd}>Zeit</th>
                <th style={thtd}>Status</th>
                <th style={thtd}>Confidence</th>
                <th style={thtd}>Payload</th>
              </tr>
            </thead>
            <tbody>
              {filteredEvents.map((event) => (
                <tr key={event.ID}>
                  <td style={thtd}>{event.eventType}</td>
                  <td style={thtd}>{event.sourceDeviceId}</td>
                  <td style={thtd}>{event.plateNormalized}</td>
                  <td style={thtd}>{formatDate(event.timestamp)}</td>
                  <td style={thtd}><StatusBadge status={event.status} /></td>
                  <td style={thtd}>
                    {event.confidence !== null && event.confidence !== undefined
                      ? Number(event.confidence).toFixed(2)
                      : '-'}
                  </td>
                  <td style={thtd}>{event.payloadVersion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={cardStyle}>
          <h2 style={{ marginTop: 0 }}>Sessions</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thtd}>Fahrzeug</th>
                <th style={thtd}>Entry</th>
                <th style={thtd}>Exit</th>
                <th style={thtd}>Status</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((session) => (
                <tr key={session.ID}>
                  <td style={thtd}>{session.vehicle_ID || '-'}</td>
                  <td style={thtd}>{formatDate(session.entryTime)}</td>
                  <td style={thtd}>{formatDate(session.exitTime)}</td>
                  <td style={thtd}><StatusBadge status={session.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

const cardStyle = {
  background: '#ffffff',
  borderRadius: '16px',
  padding: '20px',
  boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
}

const cardLabel = {
  fontSize: '14px',
  color: '#64748b',
  marginBottom: '8px',
}

const cardValue = {
  fontSize: '30px',
  fontWeight: 700,
}

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
}

const thtd = {
  textAlign: 'left',
  padding: '12px',
  borderBottom: '1px solid #e2e8f0',
}