import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapView({ climateData, selectedYear }) {
  const center = [0, 0];

  return (
    <MapContainer center={center} zoom={2} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {climateData.map((point, i) => (
        <Marker key={i} position={[point.latitude, point.longitude]}>
          <Popup>{point.metricType}: {point.value}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapView;
