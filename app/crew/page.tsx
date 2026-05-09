import BrushDivider from "@/components/BrushDivider";
import { crew } from "@/data/crew";

export const metadata = { title: "Crew · Japan 2026" };

export default function CrewPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-14">
      <header className="text-center">
        <p className="font-serif text-xs uppercase tracking-[0.4em] text-vermillion">仲間</p>
        <h1 className="mt-2 font-serif text-5xl font-semibold text-aizome md:text-6xl">
          The Crew
        </h1>
        <p className="mx-auto mt-3 max-w-xl font-serif text-base text-sumi/75">
          The travellers. Update the names, bios, and must-dos in{" "}
          <code className="font-mono text-sm">data/crew.ts</code>.
        </p>
      </header>

      <BrushDivider className="my-12" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {crew.map((c) => (
          <article
            key={c.id}
            className="group relative overflow-hidden rounded-xl border border-sumi/10 bg-washi/85 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <span className="absolute right-4 top-4 font-serif text-3xl text-vermillion/20 transition group-hover:text-vermillion/40">
              {c.jp}
            </span>
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-aizome/10 text-3xl">
              {c.emoji}
            </div>
            <h2 className="mt-4 font-serif text-2xl font-semibold text-aizome">
              {c.name}
            </h2>
            <p className="text-sm uppercase tracking-[0.25em] text-vermillion/80">
              {c.role}
            </p>
            <p className="mt-3 text-sm italic text-sumi/75">"{c.mustDo}"</p>
          </article>
        ))}
      </div>
    </div>
  );
}
