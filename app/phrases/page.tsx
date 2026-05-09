import BrushDivider from "@/components/BrushDivider";
import { phrases, type Phrase } from "@/data/phrases";

export const metadata = { title: "Phrases · Japan 2026" };

const ORDER: Phrase["category"][] = [
  "Greetings",
  "Polite",
  "Restaurant",
  "Shopping",
  "Transit",
  "Help",
];

export default function PhrasesPage() {
  const grouped = ORDER.map((cat) => ({
    cat,
    items: phrases.filter((p) => p.category === cat),
  }));

  return (
    <div className="mx-auto max-w-4xl px-5 py-14">
      <header className="text-center">
        <p className="font-serif text-xs uppercase tracking-[0.4em] text-vermillion">言葉</p>
        <h1 className="mt-2 font-serif text-5xl font-semibold text-aizome md:text-6xl">
          Phrases
        </h1>
        <p className="mx-auto mt-3 max-w-xl font-serif text-base text-sumi/75">
          A pocket cheat-sheet. <em>Sumimasen</em> + a friendly bow goes a long way.
        </p>
      </header>

      <BrushDivider className="my-12" />

      <div className="space-y-10">
        {grouped.map(({ cat, items }) => (
          <section key={cat}>
            <h2 className="mb-4 font-serif text-2xl font-semibold text-aizome">
              {cat}
            </h2>
            <ul className="divide-y divide-sumi/10 overflow-hidden rounded-lg border border-sumi/10 bg-washi/80">
              {items.map((p) => (
                <li
                  key={p.kana + p.english}
                  className="grid grid-cols-1 gap-2 px-5 py-4 md:grid-cols-[1fr_1fr_1.2fr]"
                >
                  <p className="font-serif text-xl text-aizome">{p.kana}</p>
                  <p className="font-serif text-base italic text-vermillion/85">
                    {p.romaji}
                  </p>
                  <p className="text-sm text-sumi/80">
                    {p.english}
                    {p.note && (
                      <span className="ml-2 text-xs uppercase tracking-[0.2em] text-sumi/50">
                        — {p.note}
                      </span>
                    )}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
