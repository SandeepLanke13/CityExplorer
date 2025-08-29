import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Explore from './pages/Explore.jsx'
import Theatres from './pages/Theatres.jsx'
import Restaurants from './pages/Restaurants.jsx'
import Attractions from './pages/Attractions.jsx'
import Nightlife from './pages/Nightlife.jsx'
import Religious from './pages/Religious.jsx'
import Season from './pages/Season.jsx'
import Profile from './pages/Profile.jsx'
import Help from './pages/Help.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/theatres" element={<Theatres />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/nightlife" element={<Nightlife />} />
        <Route path="/religious" element={<Religious />} />
        <Route path="/season" element={<Season />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/help" element={<Help />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Login />} />
    </Routes>
  )
}
