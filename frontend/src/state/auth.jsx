import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const AuthCtx = createContext(null)
export const useAuth = () => useContext(AuthCtx)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const raw = localStorage.getItem('user')
    if (raw) setUser(JSON.parse(raw))
  }, [])

  const value = useMemo(() => ({
    user,
    isAuthed: !!user,
    setUser(u) {
      setUser(u)
      if (u) localStorage.setItem('user', JSON.stringify(u))
      else localStorage.removeItem('user')
    },
    logout() {
      setUser(null)
      localStorage.removeItem('user')
    }
  }), [user])

  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>
}
