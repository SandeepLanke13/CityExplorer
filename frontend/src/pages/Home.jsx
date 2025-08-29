import { useEffect, useState } from 'react'
import NavBar from '../components/NavBar.jsx'
import Map from '../components/Map.jsx'
import { api } from '../api.js'
import { Link } from 'react-router-dom'

const lat = Number(import.meta.env.VITE_DEFAULT_LAT ?? 37.7749)
const lng = Number(import.meta.env.VITE_DEFAULT_LNG ?? -122.4194)
const city = import.meta.env.VITE_DEFAULT_CITY ?? 'Your City'

export default function Home() {
  const [events, setEvents] = useState([])
  const [recs, setRecs] = useState([])

  useEffect(() => {
    api.events().then(setEvents).catch(()=>{})
    api.recommend().then(setRecs).catch(()=>{})
  }, [])

  return (
    <div className="container">
      <NavBar />
      <section className="hero">
        <h2>Explore {city} 🌆</h2>
        <p>Highlights, seasonal tips, and nearby gems.</p>
      </section>

      <section className="grid">
        <Link className="tile" to="/restaurants"><h3>Restaurants</h3><p>Cuisine, ratings, price.</p></Link>
        <Link className="tile" to="/theatres"><h3>Movie Theatres</h3><p>Showtimes & booking.</p></Link>
        <Link className="tile" to="/attractions"><h3>Attractions</h3><p>Landmarks & hours.</p></Link>
        <Link className="tile" to="/nightlife"><h3>Nightlife & Daylife</h3><p>Clubs, cafes, markets.</p></Link>
        <Link className="tile" to="/religious"><h3>Religious Sites</h3><p>History and timings.</p></Link>
        <Link className="tile" to="/season"><h3>Best Season</h3><p>When to visit.</p></Link>
        <Link className="tile" to="/explore"><h3>Explore</h3><p>Search & filters.</p></Link>
        <Link className="tile" to="/help"><h3>Help</h3><p>How to use the app.</p></Link>
      </section>

      <section className="panel mt">
        <h3>Top Picks</h3>
        <div className="grid">
          {recs.map((p) => (
            <div className="tile" key={p.id}>
              <h3>{p.name}</h3>
              <p className="muted">{p.type} • ⭐ {p.rating}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="panel mt">
        <h3>Upcoming Events</h3>
        {events.length === 0 && <p className="muted">No events.</p>}
        <ul>
          {events.map(e => <li key={e.id}><strong>{e.name}</strong> — {e.date} @ {e.venue}</li>)}
        </ul>
      </section>

      <section className="panel mt">
        <h3>Map</h3>
        <div style={{height:'360px'}}><Map center={[lat,lng]} markers={[{lat,lng,title:city}]} /></div>
      </section>
    </div>
  )
}
