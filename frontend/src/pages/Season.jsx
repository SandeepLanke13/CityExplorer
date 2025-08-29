import { useEffect, useState } from 'react'
import NavBar from '../components/NavBar.jsx'
import { api } from '../api.js'

export default function Season() {
  const [rows, setRows] = useState([])
  const city = import.meta.env.VITE_DEFAULT_CITY ?? ''
  useEffect(() => { api.season(city).then(setRows) }, [city])
  return (
    <div className="container">
      <NavBar />
      <h2>Best Season to Visit</h2>
      <div className="grid">
        {rows.map(r => (
          <div className="tile" key={r.id}>
            <h3>{r.season}</h3>
            <p><strong>Climate:</strong> {r.climate}</p>
            <p><strong>Best time:</strong> {r.best_time_to_visit}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
