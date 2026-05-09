"use client";

import { useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { Place } from "@/data/places";

const CATEGORY_COLOR: Record<Place["category"], string> = {
  Sight: "#1e3a5f",
  Food: "#c8453d",
  Shrine: "#c4a35a",
  Stay: "#3b5a82",
  Park: "#3f7a4a",
  Shopping: "#7a3f6b",
};

function makeIcon(color: string) {
  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 40' width='32' height='40'>
      <path d='M16 39 C 6 26 2 19 2 13 a14 14 0 0 1 28 0 c 0 6 -4 13 -14 26 z' fill='${color}' stroke='#f5efe0' stroke-width='1.4'/>
      <path d='M9 11 h14 M11 11 v6 M21 11 v6 M9 13 h14' stroke='#f5efe0' stroke-width='1.6' stroke-linecap='round' fill='none'/>
    </svg>`;
  return L.divIcon({
    className: "torii-pin",
    html: svg,
    iconSize: [32, 40],
    iconAnchor: [16, 38],
    popupAnchor: [0, -34],
  });
}

type Props = {
  places: Place[];
  center: [number, number];
  zoom: number;
};

export default function MapView({ places, center, zoom }: Props) {
  const icons = useMemo(() => {
    const m: Record<string, L.DivIcon> = {};
    for (const cat of Object.keys(CATEGORY_COLOR) as Place["category"][]) {
      m[cat] = makeIcon(CATEGORY_COLOR[cat]);
    }
    return m;
  }, []);

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom
      className="h-[560px] w-full overflow-hidden rounded-xl border border-sumi/10"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places.map((p) => (
        <Marker key={p.id} position={[p.lat, p.lng]} icon={icons[p.category]}>
          <Tooltip direction="top" offset={[0, -32]} opacity={1}>
            <span className="font-serif">{p.name}</span>
          </Tooltip>
          <Popup>
            <div className="space-y-1">
              <p className="font-serif text-base font-semibold text-aizome">
                {p.name}
              </p>
              {p.jp && <p className="font-serif text-sm text-vermillion">{p.jp}</p>}
              <p className="text-xs uppercase tracking-[0.2em] text-sumi/60">
                {p.city} · {p.category}
              </p>
              {p.blurb && <p className="text-sm">{p.blurb}</p>}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
