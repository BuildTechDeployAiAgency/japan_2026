import BrushDivider from "@/components/BrushDivider";
import { kyotoIntro, kyotoSights } from "@/data/kyoto";

export const metadata = { title: "Kyoto · Japan 2026" };

export default function KyotoPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-14">
      <header className="text-center">
        <p className="font-serif text-xs uppercase tracking-[0.4em] text-vermillion">
          {kyotoIntro.jp}
        </p>
        <h1 className="mt-2 font-serif text-5xl font-semibold text-aizome md:text-6xl">
          {kyotoIntro.english}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl font-serif text-lg text-sumi/75">
          {kyotoIntro.blurb}
        </p>
      </header>

      <BrushDivider className="my-12" label="名所 · Sights" />

      <div className="grid gap-5 md:grid-cols-2">
        {kyotoSights.map((s) => (
          <article
            key={s.id}
            className="relative rounded-xl border border-sumi/10 bg-washi/80 p-6 shadow-sm"
          >
            <span className="absolute right-4 top-4 font-serif text-3xl text-vermillion/15">
              {s.jp.charAt(0)}
            </span>
            <p className="font-serif text-xs uppercase tracking-[0.3em] text-sumi/55">
              {s.area}
            </p>
            <h2 className="mt-1 font-serif text-2xl font-semibold text-aizome">
              {s.name}
            </h2>
            <p className="mt-1 font-serif text-base text-vermillion/80">{s.jp}</p>
            <p className="mt-3 text-sm text-sumi/80">{s.blurb}</p>
            {s.tip && (
              <p className="mt-3 rounded-md border border-gold/30 bg-gold/10 px-3 py-2 text-xs text-sumi/80">
                <span className="mr-2 font-serif uppercase tracking-[0.25em] text-gold">
                  Tip
                </span>
                {s.tip}
              </p>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
