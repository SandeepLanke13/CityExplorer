import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../api.js'
import { useAuth } from '../state/auth.jsx'

export default function Login() {
  const nav = useNavigate()
  const { setUser } = useAuth()
  const [email, setEmail] = useState('test@example.com')
  const [password, setPassword] = useState('password123')
  const [err, setErr] = useState('')
  const [loading, setLoading] = useState(false)

  async function onSubmit(e) {
    e.preventDefault()
    setErr(''); setLoading(true)
    try {
      const u = await api.login(email.trim(), password)
      setUser(u)
      nav('/', { replace: true })
    } catch (e) {
      setErr(e.message || 'Login failed')
    } finally { setLoading(false) }
  }

  return (
    <div className="screen">
      <form className="card" onSubmit={onSubmit}>
        <h1>Sign in</h1>
        <label>Email</label>
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <label>Password</label>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
        {err && <p className="error">{err}</p>}
        <button disabled={loading}>{loading?'Signing in…':'Sign in'}</button>
      </form>
    </div>
  )
}
