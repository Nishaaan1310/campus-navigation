import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';
require('leaflet/dist/leaflet.css');

// Fix for marker icons
const DefaultIcon = L.icon({
  iconUrl: require('leaflet/dist/images/marker-icon.png').default,
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
  shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const SimpleMap = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer 
        center={[20.5937, 78.9629]} 
        zoom={5} 
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
};

export default SimpleMap; 