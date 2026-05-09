import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

const EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"]);

export function listPhotos(slug: string): string[] {
  try {
    const dir = path.join(process.cwd(), "public", "photos", slug);
    if (!fs.existsSync(dir)) return [];
    return fs
      .readdirSync(dir)
      .filter((f) => EXTS.has(path.extname(f).toLowerCase()))
      .sort()
      .map((f) => `/photos/${slug}/${f}`);
  } catch {
    return [];
  }
}

export function listAllPhotoFolders(): { slug: string; photos: string[] }[] {
  try {
    const root = path.join(process.cwd(), "public", "photos");
    if (!fs.existsSync(root)) return [];
    const entries = fs
      .readdirSync(root, { withFileTypes: true })
      .filter((e) => e.isDirectory())
      .map((e) => e.name)
      .sort();
    return entries
      .map((slug) => ({ slug, photos: listPhotos(slug) }))
      .filter((g) => g.photos.length > 0);
  } catch {
    return [];
  }
}

type Props = {
  slug: string;
  emptyMessage?: string;
};

export default function PhotoGrid({ slug, emptyMessage }: Props) {
  const photos = listPhotos(slug);

  if (photos.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-sumi/20 bg-washi/50 p-8 text-center">
        <p className="font-serif text-base text-sumi/65">
          {emptyMessage ?? "Photos will appear here after the trip."}
        </p>
        <p className="mt-2 text-xs uppercase tracking-[0.3em] text-sumi/45">
          drop into <code className="font-mono">public/photos/{slug}/</code>
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
      {photos.map((src) => (
        <div
          key={src}
          className="relative aspect-[4/3] overflow-hidden rounded-lg border border-sumi/10 bg-washi-warm"
        >
          <Image
            src={src}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
