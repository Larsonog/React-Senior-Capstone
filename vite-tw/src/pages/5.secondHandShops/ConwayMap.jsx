import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css'

function ConwayMap() {
  // Specify the coordinates for Conway, Arkansas
  const conwayPosition = [35.0887, -92.4421];

  return (
    <MapContainer center={conwayPosition} zoom={13} style={{ height: '500px', width: '100%' }}>
      {/* Add a tile layer for the map */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Add a marker for Conway */}
      <Marker position={conwayPosition}>
        <Popup>Conway, Arkansas</Popup>
      </Marker>
    </MapContainer>
  );
}

export default ConwayMap;