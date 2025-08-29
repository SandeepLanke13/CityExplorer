import NavBar from '../components/NavBar.jsx'
import { useAuth } from '../state/auth.jsx'

export default function Profile() {
  const { user } = useAuth()
  return (
    <div className="container narrow">
      <NavBar />
      <h2>Profile</h2>
      <div className="panel">
        <div><strong>Name:</strong> {user?.name}</div>
        <div><strong>Email:</strong> {user?.email}</div>
        <div><strong>ID:</strong> {user?.id}</div>
      </div>
      <div className="panel mt">
        <h3>Wishlist</h3>
        <p className="muted">No saved places yet.</p>
      </div>
    </div>
  )
}
