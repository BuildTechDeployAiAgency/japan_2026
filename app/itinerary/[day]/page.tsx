import Link from "next/link";
import { notFound } from "next/navigation";
import BrushDivider from "@/components/BrushDivider";
import PhotoGrid from "@/components/PhotoGrid";
import { itinerary } from "@/data/itinerary";

export function generateStaticParams() {
  return itinerary.map((d) => ({ day: d.slug }));
}

export function generateMetadata({ params }: { params: { day: string } }) {
  const day = itinerary.find((d) => d.slug === params.day);
  return { title: day ? `${day.title} · Japan 2026` : "Day · Japan 2026" };
}

export default function DayPage({ params }: { params: { day: string } }) {
  const idx = itinerary.findIndex((d) => d.slug === params.day);
  if (idx === -1) notFound();
  const day = itinerary[idx];
  const prev = itinerary[idx - 1];
  const next = itinerary[idx + 1];

  return (
    <article className="mx-auto max-w-3xl px-5 py-14">
      <Link href="/itinerary" className="text-xs uppercase tracking-[0.3em] text-sumi/55 hover:text-vermillion">
        ← all days
      </Link>

      <header className="mt-6">
        <p className="font-serif text-xs uppercase tracking-[0.4em] text-vermillion">
          {day.dayLabel} · {day.city}
        </p>
        <h1 className="mt-2 font-serif text-4xl font-semibold text-aizome md:text-5xl">
          {day.title}
        </h1>
        <p className="mt-2 font-serif text-2xl text-vermillion/80">{day.jp}</p>
        {day.highlight && (
          <p className="mt-3 font-serif text-lg text-sumi/75">{day.highlight}</p>
        )}
        {day.draft && (
          <p className="mt-4 inline-block rounded-md border border-gold/40 bg-gold/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-gold">
            Draft — refine before trip
          </p>
        )}
      </header>

      <BrushDivider className="my-10" label="Plan" />

      <ol className="space-y-5">
        {day.blocks.map((b, i) => (
          <li key={i} className="grid grid-cols-[6rem_1fr] items-start gap-4 rounded-lg border border-sumi/10 bg-washi/80 p-4">
            <span className="font-serif text-xs uppercase tracking-[0.25em] text-vermillion">
              {b.time}
            </span>
            <div>
              <p className="font-serif text-lg text-aizome">{b.activity}</p>
              {b.location && (
                <p className="mt-0.5 text-sm text-sumi/65">📍 {b.location}</p>
              )}
              {b.notes && <p className="mt-1.5 text-sm text-sumi/75">{b.notes}</p>}
            </div>
          </li>
        ))}
      </ol>

      <BrushDivider className="my-12" label="写真 · Photos" />
      <PhotoGrid
        slug={day.slug}
        emptyMessage="No photos yet — they'll appear here once we add them."
      />

      <nav className="mt-16 flex items-center justify-between gap-3 text-sm">
        {prev ? (
          <Link
            href={`/itinerary/${prev.slug}`}
            className="rounded-md border border-sumi/15 px-4 py-2 hover:bg-sumi/5"
          >
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/itinerary/${next.slug}`}
            className="rounded-md border border-sumi/15 px-4 py-2 hover:bg-sumi/5"
          >
            {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
