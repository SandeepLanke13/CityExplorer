import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

const icon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

export default function Map({ center=[37.7749,-122.4194], zoom=12, markers=[] }) {
  return (
    <div className="map">
      <MapContainer center={center} zoom={zoom} style={{height:'100%', width:'100%'}}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((m, i) => (
          <Marker key={i} position={[m.lat, m.lng]} icon={icon}>
            <Popup><strong>{m.name || m.title}</strong><br/>{m.subtitle || ''}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
