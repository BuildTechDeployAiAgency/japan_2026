"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import type { FoodItem } from "@/data/food";

const KEY = "japan-2026-food-v1";

function readState(): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? "{}");
  } catch {
    return {};
  }
}

function writeState(s: Record<string, boolean>) {
  try {
    localStorage.setItem(KEY, JSON.stringify(s));
  } catch {
    /* ignore */
  }
}

export default function FoodChecklistItem({ item }: { item: FoodItem }) {
  const [checked, setChecked] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setChecked(Boolean(readState()[item.id]));
    const onStorage = (e: StorageEvent) => {
      if (e.key === KEY) setChecked(Boolean(readState()[item.id]));
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [item.id]);

  const toggle = () => {
    const next = !checked;
    setChecked(next);
    const s = readState();
    if (next) s[item.id] = true;
    else delete s[item.id];
    writeState(s);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={checked}
      className={clsx(
        "group relative w-full rounded-lg border p-4 text-left transition",
        checked
          ? "border-vermillion/50 bg-vermillion/5"
          : "border-sumi/10 bg-washi/80 hover:border-aizome/40",
      )}
    >
      <div className="flex items-start gap-3">
        <span
          className={clsx(
            "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition",
            checked
              ? "border-vermillion bg-vermillion text-washi"
              : "border-sumi/25 bg-washi",
          )}
          aria-hidden
        >
          {mounted && checked ? "✓" : ""}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-3">
            <h3
              className={clsx(
                "font-serif text-lg font-semibold transition",
                checked ? "text-vermillion line-through decoration-vermillion/60" : "text-aizome",
              )}
            >
              {item.name}
            </h3>
            <span className="font-serif text-sm text-vermillion/70">{item.jp}</span>
          </div>
          <p className="mt-1 text-sm text-sumi/70">{item.blurb}</p>
        </div>
      </div>
    </button>
  );
}
