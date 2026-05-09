export default function Footer() {
  return (
    <footer className="mt-16 border-t border-sumi/10 bg-washi/60 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <span className="hanko">旅</span>
          <p className="font-serif text-sm text-sumi/70">
            Japan 2026 · 東京 & 京都 · May 22 – 31
          </p>
        </div>
        <p className="text-xs uppercase tracking-[0.3em] text-sumi/50">
          made with care for the crew
        </p>
      </div>
    </footer>
  );
}
