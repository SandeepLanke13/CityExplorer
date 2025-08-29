const API = import.meta.env.VITE_API_BASE ?? 'http://localhost:8080'

async function j(res) {
  if (!res.ok) throw new Error(await res.text() || res.statusText)
  return res.json()
}

export const api = {
  login: (email, password) =>
    fetch(`${API}/api/auth/login`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ email, password }) }).then(j),
  categories: () => fetch(`${API}/api/categories`).then(j),
  places: (params={}) => {
    const q = new URLSearchParams(params).toString()
    return fetch(`${API}/api/places${q ? `?${q}` : ''}`).then(j)
  },
  place: (id) => fetch(`${API}/api/places/${id}`).then(j),
  reviews: (placeId) => fetch(`${API}/api/reviews?placeId=${placeId}`).then(j),
  addReview: (payload) =>
    fetch(`${API}/api/reviews`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload)}).then(j),
  events: () => fetch(`${API}/api/events`).then(j),
  season: (city) => fetch(`${API}/api/season${city?`?city=${encodeURIComponent(city)}`:''}`).then(j),
  recommend: (params={}) => {
    const q = new URLSearchParams(params).toString()
    return fetch(`${API}/api/recommendations${q?`?${q}`:''}`).then(j)
  }
}
