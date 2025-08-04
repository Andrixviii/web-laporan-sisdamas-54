import React from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polygon,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { LatLngExpression } from 'leaflet';

// Perbaikan agar marker icon muncul
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Tipe data marker
interface RWMarker {
  position: LatLngExpression;
  label: string;
}

const markers: RWMarker[] = [
  { position: [-7.064880, 107.930755], label: 'RW 07' },
  { position: [-7.062695, 107.927118], label: 'RW 08' },
  { position: [-7.061681, 107.932290], label: 'RW 09' },
  { position: [-7.056187, 107.932106], label: 'RW 10' },
];

const polygonArea: LatLngExpression[] = [
  [-7.0655, 107.9295],       // RW 07 barat laut
  [-7.0640, 107.9325],       // RW 07 timur laut
  [-7.061681, 107.932290],   // RW 09
  [-7.0600, 107.9329],       // RW 09 selatan
  [-7.0585, 107.9330],       // RW 10 timur laut
  [-7.056187, 107.932106],   // RW 10 pusat
  [-7.0568, 107.9303],       // RW 10 barat daya
  [-7.0575, 107.9288],       // RW 10 barat
  [-7.0605, 107.9280],       // RW 09 barat
  [-7.062695, 107.927118],   // RW 08
  [-7.0650, 107.9285]        // RW 07 barat daya
];



const center: LatLngExpression = [-7.061719, 107.930396];

const Maps: React.FC = () => {
  return (
    <MapContainer
      center={center}
      zoom={15}
      scrollWheelZoom={false}
      style={{ height: '330px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />

      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position}>
          <Popup>{marker.label}</Popup>
        </Marker>
      ))}

      <Polygon positions={polygonArea} pathOptions={{ color: 'red', fillOpacity: 0.3 }} />
    </MapContainer>
  );
};

export default Maps;
