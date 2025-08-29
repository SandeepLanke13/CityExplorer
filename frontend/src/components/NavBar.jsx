import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../state/auth.jsx'
export default function NavBar() {
  const { logout } = useAuth()
  const loc = useLocation()
  const isActive = (p) => loc.pathname === p
  return (
    <header className="header">
      <div className="brand">City Explorer</div>
      <nav className="nav">
        <Link className={isActive('/')?'active':''} to="/">Home</Link>
        <Link className={isActive('/explore')?'active':''} to="/explore">Explore</Link>
        <Link className={isActive('/restaurants')?'active':''} to="/restaurants">Restaurants</Link>
        <Link className={isActive('/theatres')?'active':''} to="/theatres">Theatres</Link>
        <Link className={isActive('/attractions')?'active':''} to="/attractions">Attractions</Link>
        <Link className={isActive('/nightlife')?'active':''} to="/nightlife">Nightlife</Link>
        <Link className={isActive('/religious')?'active':''} to="/religious">Spiritual</Link>
        <Link className={isActive('/season')?'active':''} to="/season">Best Season</Link>
        <Link className={isActive('/profile')?'active':''} to="/profile">Profile</Link>
        <button className="ghost" onClick={logout}>Logout</button>
      </nav>
    </header>
  )
}
