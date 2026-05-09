# Japan 2026 — 旅

Family + friends Japan holiday site. Tokyo & Kyoto, May 22 – 31, 2026.
A guide before the trip; a memory archive after it.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

All copy lives in `data/`:

- `data/itinerary.ts` — day-by-day plan
- `data/crew.ts` — traveler profiles
- `data/food.ts` — bucket list
- `data/phrases.ts` — Japanese phrase cheat sheet
- `data/places.ts` — map pins
- `data/tokyo.ts`, `data/kyoto.ts` — guide pages

Edit, save, push. Vercel rebuilds.

## Adding photos (post-trip)

Drop images into folders matching the itinerary slugs:

```
public/photos/day-01-arrival-tokyo/IMG_0001.jpg
public/photos/day-04-disneyland/IMG_0123.jpg
```

They'll appear automatically on `/gallery` and on the matching `/itinerary/<day>` page.

## Stack

Next.js 14 · TypeScript · Tailwind CSS · react-leaflet (OpenStreetMap).
Deployed to Vercel.
