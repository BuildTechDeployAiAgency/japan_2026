"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import clsx from "clsx";
import { places, type Place } from "@/data/places";

const MapView = dynamic(() => import("@/components/MapView"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[560px] items-center justify-center rounded-xl border border-sumi/10 bg-washi/60">
      <p className="font-serif text-sm text-sumi/60">Loading map…</p>
    </div>
  ),
});

const CITY_VIEWS: Record<string, { center: [number, number]; zoom: number }> = {
  All: { center: [35.4, 137.0], zoom: 6 },
  Tokyo: { center: [35.68, 139.76], zoom: 12 },
  Kyoto: { center: [35.0, 135.76], zoom: 12 },
  Nara: { center: [34.687, 135.842], zoom: 13 },
};

const CITIES = ["All", "Tokyo", "Kyoto", "Nara"] as const;
type City = typeof CITIES[number];

export default function MapClient() {
  const [city, setCity] = useState<City>("All");

  const filtered = useMemo(() => {
    if (city === "All") return places;
    return places.filter((p) => p.city === city);
  }, [city]);

  const view = CITY_VIEWS[city];

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        {CITIES.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCity(c)}
            className={clsx(
              "rounded-full border px-4 py-1.5 text-sm transition",
              city === c
                ? "border-vermillion bg-vermillion text-washi"
                : "border-sumi/15 bg-washi text-sumi/80 hover:border-aizome/40",
            )}
          >
            {c}
          </button>
        ))}
        <span className="ml-auto text-xs uppercase tracking-[0.25em] text-sumi/55">
          {filtered.length} places
        </span>
      </div>

      <MapView places={filtered} center={view.center} zoom={view.zoom} />

      <Legend />
    </div>
  );
}

const COLORS: Record<Place["category"], string> = {
  Sight: "#1e3a5f",
  Food: "#c8453d",
  Shrine: "#c4a35a",
  Stay: "#3b5a82",
  Park: "#3f7a4a",
  Shopping: "#7a3f6b",
};

function Legend() {
  return (
    <ul className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-sumi/70">
      {(Object.keys(COLORS) as Place["category"][]).map((c) => (
        <li key={c} className="flex items-center gap-2">
          <span
            className="inline-block h-3 w-3 rounded-full"
            style={{ background: COLORS[c] }}
          />
          {c}
        </li>
      ))}
    </ul>
  );
}
