import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../state/auth.jsx'
export default function ProtectedRoute() {
  const { isAuthed } = useAuth()
  return isAuthed ? <Outlet /> : <Navigate to="/login" replace />
}
