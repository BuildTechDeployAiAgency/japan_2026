import Link from "next/link";
import Countdown from "@/components/Countdown";
import BrushDivider from "@/components/BrushDivider";
import { itinerary } from "@/data/itinerary";

const TILES = [
  { href: "/itinerary", jp: "旅程", title: "Itinerary", blurb: "10 days, mapped out morning to night." },
  { href: "/tokyo", jp: "東京", title: "Tokyo Guide", blurb: "Neighbourhoods, must-sees, food shortlist." },
  { href: "/kyoto", jp: "京都", title: "Kyoto Guide", blurb: "Temples, gardens, lantern-lit lanes." },
  { href: "/food", jp: "食", title: "Food Bucket List", blurb: "Tick them off as we eat them." },
  { href: "/phrases", jp: "言葉", title: "Phrases", blurb: "Cheat-sheet Japanese for travellers." },
  { href: "/map", jp: "地図", title: "Map", blurb: "Pinned spots in Tokyo, Kyoto, Nara." },
  { href: "/crew", jp: "仲間", title: "Crew", blurb: "Who's on this trip and what they want." },
  { href: "/gallery", jp: "写真", title: "Gallery", blurb: "Photos appear here after the trip." },
];

export default function Home() {
  const days = itinerary.length;

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <FujiBackdrop />
        <div className="relative mx-auto max-w-6xl px-5 pt-16 pb-24 md:pt-24 md:pb-32">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="font-serif text-sm uppercase tracking-[0.45em] text-vermillion">
                家族 と 友人 の 旅
              </p>
              <h1 className="mt-3 font-serif text-5xl font-semibold leading-[1.05] text-aizome md:text-7xl">
                Japan <span className="text-vermillion">2026</span>
              </h1>
              <p className="mt-4 max-w-xl font-serif text-xl text-sumi/80 md:text-2xl">
                旅 — <span className="italic">tabi</span>. The journey begins.
                Tokyo &amp; Kyoto, May 22 – 31. Family + friends, ten days, one
                shared logbook.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
                <Link
                  href="/itinerary"
                  className="rounded-md bg-aizome px-5 py-2.5 font-sans text-washi shadow-sm transition hover:bg-aizome-deep"
                >
                  See the itinerary →
                </Link>
                <Link
                  href="/food"
                  className="rounded-md border border-vermillion/40 bg-washi/70 px-5 py-2.5 font-sans text-vermillion transition hover:bg-vermillion hover:text-washi"
                >
                  Food bucket list
                </Link>
                <span className="ml-2 text-xs uppercase tracking-[0.3em] text-sumi/55">
                  {days} days planned · draft v1
                </span>
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="rounded-xl border border-sumi/10 bg-washi/85 p-5 shadow-sm backdrop-blur-sm">
                <p className="mb-3 text-center font-serif text-xs uppercase tracking-[0.4em] text-sumi/55">
                  Until 成田 / 羽田
                </p>
                <Countdown />
                <p className="mt-3 text-center text-[11px] text-sumi/55">
                  Counting to 09:00 JST · 22 May 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BrushDivider className="mx-auto max-w-6xl px-5" label="案内 · Guide" />

      {/* Tile grid */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TILES.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="group relative overflow-hidden rounded-xl border border-sumi/10 bg-washi/80 p-5 transition hover:-translate-y-0.5 hover:border-vermillion/40 hover:shadow-lg"
            >
              <span className="absolute right-3 top-2 font-serif text-4xl text-vermillion/15 transition group-hover:text-vermillion/30">
                {t.jp}
              </span>
              <p className="font-serif text-xs uppercase tracking-[0.3em] text-sumi/55">
                {t.jp}
              </p>
              <h3 className="mt-1 font-serif text-xl font-semibold text-aizome">
                {t.title}
              </h3>
              <p className="mt-2 text-sm text-sumi/70">{t.blurb}</p>
              <span className="mt-4 inline-block text-xs font-medium uppercase tracking-[0.25em] text-vermillion opacity-0 transition group-hover:opacity-100">
                Open →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick itinerary peek */}
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <BrushDivider className="mb-10" label="十日間 · Ten Days" />
        <div className="grid gap-3 md:grid-cols-2">
          {itinerary.map((day) => (
            <Link
              key={day.slug}
              href={`/itinerary/${day.slug}`}
              className="group flex items-start gap-4 rounded-lg border border-sumi/10 bg-washi/70 p-4 transition hover:border-aizome/40 hover:bg-washi"
            >
              <span className="hanko shrink-0 text-base">{day.jp.charAt(0)}</span>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="font-serif text-xs uppercase tracking-[0.3em] text-sumi/55">
                    {day.dayLabel}
                  </p>
                  <p className="text-[11px] text-sumi/50">{day.city}</p>
                </div>
                <h4 className="mt-1 font-serif text-lg font-semibold text-aizome">
                  {day.title}
                </h4>
                <p className="mt-0.5 truncate text-sm text-sumi/70">{day.highlight}</p>
              </div>
              <span className="self-center text-vermillion/0 transition group-hover:text-vermillion">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function FujiBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-0 flex items-end justify-center opacity-60">
      <svg
        viewBox="0 0 1200 360"
        className="h-[280px] w-full md:h-[420px]"
        preserveAspectRatio="xMidYEnd slice"
        aria-hidden
      >
        <defs>
          <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#f5efe0" stopOpacity="0" />
            <stop offset="100%" stopColor="#fbe7e3" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="fuji" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#1e3a5f" />
            <stop offset="100%" stopColor="#3b5a82" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="1200" height="360" fill="url(#sky)" />
        <circle cx="930" cy="80" r="42" fill="#c8453d" opacity="0.85" />
        <path
          d="M0 320 L 360 320 L 540 150 L 600 100 L 660 150 L 840 320 L 1200 320 L 1200 360 L 0 360 Z"
          fill="url(#fuji)"
          opacity="0.85"
        />
        <path
          d="M510 175 L 540 150 L 555 162 L 575 145 L 600 122 L 625 145 L 645 162 L 660 150 L 690 175 L 660 175 L 645 168 L 625 178 L 600 165 L 575 178 L 555 168 L 540 175 Z"
          fill="#f5efe0"
          opacity="0.92"
        />
      </svg>
    </div>
  );
}
