"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2026-05-22T09:00:00+09:00").getTime();

function diff(now: number) {
  const ms = Math.max(0, TARGET - now);
  const days = Math.floor(ms / 86_400_000);
  const hours = Math.floor((ms % 86_400_000) / 3_600_000);
  const minutes = Math.floor((ms % 3_600_000) / 60_000);
  const seconds = Math.floor((ms % 60_000) / 1000);
  return { days, hours, minutes, seconds, done: ms === 0 };
}

const UNITS: Array<{ key: "days" | "hours" | "minutes" | "seconds"; jp: string; en: string }> = [
  { key: "days", jp: "日", en: "Days" },
  { key: "hours", jp: "時", en: "Hours" },
  { key: "minutes", jp: "分", en: "Minutes" },
  { key: "seconds", jp: "秒", en: "Seconds" },
];

export default function Countdown() {
  const [state, setState] = useState(() => diff(Date.now()));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setState(diff(Date.now())), 1000);
    return () => clearInterval(id);
  }, []);

  if (state.done) {
    return (
      <div className="rounded-lg border border-vermillion/30 bg-vermillion/5 px-6 py-5 text-center">
        <p className="font-serif text-2xl text-vermillion">いってらっしゃい</p>
        <p className="mt-1 text-sm text-sumi/70">The journey has begun.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-3 sm:gap-5">
      {UNITS.map(({ key, jp, en }) => (
        <div
          key={key}
          className="relative overflow-hidden rounded-lg border border-sumi/10 bg-washi/80 px-2 py-4 text-center shadow-sm"
        >
          <span className="absolute right-2 top-1 font-serif text-base text-vermillion/70">
            {jp}
          </span>
          <span
            className="block font-serif text-3xl font-semibold tabular-nums text-aizome sm:text-5xl"
            suppressHydrationWarning
          >
            {mounted ? String(state[key]).padStart(2, "0") : "--"}
          </span>
          <span className="mt-1 block text-[10px] uppercase tracking-[0.25em] text-sumi/55">
            {en}
          </span>
        </div>
      ))}
    </div>
  );
}
