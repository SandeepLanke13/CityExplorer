import { useEffect, useState } from 'react'
import NavBar from '../components/NavBar.jsx'
import Map from '../components/Map.jsx'
import { api } from '../api.js'

export default function Nightlife() {
  const [rows, setRows] = useState([])
  useEffect(() => { api.places().then(all => setRows(all.filter(r => r.type.toLowerCase().includes('nightlife') || r.type.toLowerCase().includes('club') || r.type.toLowerCase().includes('cafe')))) }, [])
  const markers = rows.map(r => ({ lat:r.lat, lng:r.lng, title:r.name }))
  return (
    <div className="container">
      <NavBar />
      <h2>Nightlife & Daylife</h2>
      <div className="grid">
        {rows.map(r => (
          <div key={r.id} className="tile">
            <h3>{r.name}</h3>
            <p className="muted">⭐ {r.rating}</p>
            <p>{r.description}</p>
          </div>
        ))}
      </div>
      <section className="panel mt"><div style={{height:'320px'}}><Map markers={markers} /></div></section>
    </div>
  )
}
