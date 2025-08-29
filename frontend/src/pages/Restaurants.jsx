import { useEffect, useState } from 'react'
import NavBar from '../components/NavBar.jsx'
import Map from '../components/Map.jsx'
import { api } from '../api.js'

export default function Restaurants() {
  const [rows, setRows] = useState([])
  useEffect(() => {
    api.places().then(all => setRows(all.filter(r => r.type.toLowerCase().includes('restaurant'))))
  }, [])
  const markers = rows.map(r => ({ lat:r.lat, lng:r.lng, title:r.name, subtitle:r.price_range ? `${r.price_range}` : '' }))
  return (
    <div className="container">
      <NavBar />
      <h2>Restaurants</h2>
      <div className="grid">
        {rows.map(r => (
          <div key={r.id} className="tile">
            <h3>{r.name}</h3>
            <p className="muted">⭐ {r.rating} {r.price_range ? `• ${r.price_range}`:''}</p>
            <p>{r.description}</p>
          </div>
        ))}
      </div>
      <section className="panel mt"><div style={{height:'320px'}}><Map markers={markers} /></div></section>
    </div>
  )
}
