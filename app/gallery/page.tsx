import Link from "next/link";
import Image from "next/image";
import BrushDivider from "@/components/BrushDivider";
import { listAllPhotoFolders } from "@/components/PhotoGrid";
import { itinerary } from "@/data/itinerary";

export const metadata = { title: "Gallery · Japan 2026" };

export const dynamic = "force-dynamic";

export default function GalleryPage() {
  const folders = listAllPhotoFolders();
  const total = folders.reduce((acc, f) => acc + f.photos.length, 0);

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <header className="text-center">
        <p className="font-serif text-xs uppercase tracking-[0.4em] text-vermillion">写真</p>
        <h1 className="mt-2 font-serif text-5xl font-semibold text-aizome md:text-6xl">
          Gallery
        </h1>
        <p className="mx-auto mt-3 max-w-xl font-serif text-base text-sumi/75">
          {total === 0
            ? "Empty for now. After the trip we'll drop photos into the public/photos folders and they'll appear here grouped by day."
            : `${total} photos across ${folders.length} day${folders.length === 1 ? "" : "s"}.`}
        </p>
      </header>

      <BrushDivider className="my-12" />

      {total === 0 ? <EmptyState /> : <Filled folders={folders} />}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="rounded-xl border border-dashed border-sumi/20 bg-washi/50 p-10 text-center">
      <p className="font-serif text-2xl text-aizome">No photos yet</p>
      <p className="mt-2 text-sm text-sumi/70">
        After the trip, drop images into folders like:
      </p>
      <pre className="mx-auto mt-4 inline-block rounded-md bg-sumi/90 px-4 py-3 text-left font-mono text-xs leading-relaxed text-washi">
        public/photos/day-01-arrival-tokyo/IMG_0001.jpg{"\n"}
        public/photos/day-04-disneyland/IMG_0123.jpg{"\n"}
        public/photos/day-07-fushimi-inari-southern-higashiyama/...
      </pre>
      <p className="mt-4 text-xs uppercase tracking-[0.3em] text-sumi/50">
        Commit, push, the gallery rebuilds.
      </p>
    </div>
  );
}

function Filled({
  folders,
}: {
  folders: { slug: string; photos: string[] }[];
}) {
  return (
    <div className="space-y-14">
      {folders.map(({ slug, photos }) => {
        const day = itinerary.find((d) => d.slug === slug);
        return (
          <section key={slug}>
            <header className="mb-4 flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <p className="font-serif text-xs uppercase tracking-[0.3em] text-sumi/55">
                  {day?.dayLabel ?? slug}
                </p>
                <h2 className="font-serif text-2xl font-semibold text-aizome">
                  {day?.title ?? slug}{" "}
                  {day && (
                    <span className="ml-2 font-normal text-vermillion/80">
                      {day.jp}
                    </span>
                  )}
                </h2>
              </div>
              {day && (
                <Link
                  href={`/itinerary/${slug}`}
                  className="text-xs uppercase tracking-[0.3em] text-vermillion hover:underline"
                >
                  Day plan →
                </Link>
              )}
            </header>
            <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {photos.map((src) => (
                <div
                  key={src}
                  className="relative aspect-[4/3] overflow-hidden rounded-lg border border-sumi/10 bg-washi-warm"
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
