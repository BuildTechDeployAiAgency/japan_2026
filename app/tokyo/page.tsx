import BrushDivider from "@/components/BrushDivider";
import { tokyoIntro, tokyoNeighborhoods } from "@/data/tokyo";

export const metadata = { title: "Tokyo · Japan 2026" };

export default function TokyoPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-14">
      <header className="text-center">
        <p className="font-serif text-xs uppercase tracking-[0.4em] text-vermillion">
          {tokyoIntro.jp}
        </p>
        <h1 className="mt-2 font-serif text-5xl font-semibold text-aizome md:text-6xl">
          {tokyoIntro.english}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl font-serif text-lg text-sumi/75">
          {tokyoIntro.blurb}
        </p>
      </header>

      <BrushDivider className="my-12" label="街 · Neighbourhoods" />

      <div className="grid gap-5 md:grid-cols-2">
        {tokyoNeighborhoods.map((n) => (
          <section
            key={n.id}
            className="rounded-xl border border-sumi/10 bg-washi/80 p-6 shadow-sm"
          >
            <div className="flex items-baseline justify-between">
              <h2 className="font-serif text-2xl font-semibold text-aizome">
                {n.name}
              </h2>
              <span className="font-serif text-2xl text-vermillion/80">{n.jp}</span>
            </div>
            <p className="mt-2 text-sm italic text-sumi/70">{n.vibe}</p>

            <h3 className="mt-5 font-serif text-xs uppercase tracking-[0.3em] text-vermillion">
              What to do
            </h3>
            <ul className="mt-2 space-y-1 text-sm text-sumi/80">
              {n.whatToDo.map((d) => (
                <li key={d} className="flex gap-2">
                  <span className="text-vermillion/70">·</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>

            {n.whereToEat && (
              <>
                <h3 className="mt-4 font-serif text-xs uppercase tracking-[0.3em] text-vermillion">
                  Where to eat
                </h3>
                <ul className="mt-2 space-y-1 text-sm text-sumi/80">
                  {n.whereToEat.map((e) => (
                    <li key={e} className="flex gap-2">
                      <span className="text-vermillion/70">·</span>
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
