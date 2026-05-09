import Link from "next/link";
import BrushDivider from "@/components/BrushDivider";
import { itinerary } from "@/data/itinerary";

export const metadata = { title: "Itinerary · Japan 2026" };

export default function ItineraryPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-14">
      <header className="mb-10 text-center">
        <p className="font-serif text-xs uppercase tracking-[0.4em] text-vermillion">旅程</p>
        <h1 className="mt-2 font-serif text-4xl font-semibold text-aizome md:text-5xl">
          Itinerary
        </h1>
        <p className="mt-3 font-serif text-sm text-sumi/65">
          May 22 → May 31 · 10 days · Tokyo first, then Kyoto.
        </p>
      </header>

      <BrushDivider className="mb-8" />

      <ol className="relative space-y-6 border-l border-sumi/15 pl-6">
        {itinerary.map((day) => (
          <li key={day.slug} className="relative">
            <span className="absolute -left-[33px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-vermillion bg-washi font-serif text-[10px] font-bold text-vermillion">
              {day.jp.charAt(0)}
            </span>
            <Link
              href={`/itinerary/${day.slug}`}
              className="group block rounded-lg border border-sumi/10 bg-washi/80 p-5 transition hover:border-aizome/40 hover:bg-washi"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <p className="font-serif text-xs uppercase tracking-[0.3em] text-sumi/55">
                  {day.dayLabel}
                </p>
                <p className="text-[11px] uppercase tracking-[0.25em] text-sumi/45">
                  {day.city}
                </p>
              </div>
              <h2 className="mt-2 font-serif text-2xl font-semibold text-aizome">
                {day.title}{" "}
                <span className="ml-2 font-normal text-vermillion/80">{day.jp}</span>
              </h2>
              {day.highlight && (
                <p className="mt-1 text-sm text-sumi/70">{day.highlight}</p>
              )}
              <ul className="mt-4 grid grid-cols-1 gap-y-1.5 text-sm text-sumi/75 md:grid-cols-2">
                {day.blocks.map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="w-20 shrink-0 font-serif text-xs uppercase tracking-[0.2em] text-vermillion/80">
                      {b.time}
                    </span>
                    <span>{b.activity}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-vermillion opacity-0 transition group-hover:opacity-100">
                Open day →
              </p>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
