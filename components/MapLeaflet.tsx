"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const cities = [
  { name: "Paris", position: [48.8566, 2.3522] },
  { name: "Marseille", position: [43.2965, 5.3698] },
  { name: "Lyon", position: [45.764, 4.8357] },
  { name: "Toulouse", position: [43.6047, 1.4442] },
  { name: "Bordeaux", position: [44.8378, -0.5792] },
  { name: "Nantes", position: [47.2184, -1.5536] },
  { name: "Lille", position: [50.6292, 3.0573] },
  { name: "Nice", position: [43.7102, 7.262] },
];

export default function MapLeaflet() {
  return (
    <MapContainer
      center={[46.603354, 1.888334]}
      zoom={6}
      scrollWheelZoom={true}
      style={{ height: "600px", width: "100%" }}
    >
      <TileLayer
        attribution="© OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {cities.map((city) => (
        <Marker
          key={city.name}
          position={city.position as [number, number]}
        >
          <Popup>
            <strong>{city.name}</strong>
            <br />
            Comparateur de mutuelles santé
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}