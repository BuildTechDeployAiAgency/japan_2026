import BrushDivider from "@/components/BrushDivider";
import MapClient from "./MapClient";

export const metadata = { title: "Map · Japan 2026" };

export default function MapPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <header className="text-center">
        <p className="font-serif text-xs uppercase tracking-[0.4em] text-vermillion">地図</p>
        <h1 className="mt-2 font-serif text-5xl font-semibold text-aizome md:text-6xl">
          Map
        </h1>
        <p className="mx-auto mt-3 max-w-xl font-serif text-base text-sumi/75">
          Pinned spots across Tokyo, Kyoto, and Nara. Filter by city. Add your own to{" "}
          <code className="font-mono text-sm">data/places.ts</code>.
        </p>
      </header>

      <BrushDivider className="my-12" />

      <MapClient />
    </div>
  );
}
