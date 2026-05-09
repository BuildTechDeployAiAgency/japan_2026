"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NAV = [
  { href: "/", label: "Home", jp: "家" },
  { href: "/itinerary", label: "Itinerary", jp: "旅程" },
  { href: "/tokyo", label: "Tokyo", jp: "東京" },
  { href: "/kyoto", label: "Kyoto", jp: "京都" },
  { href: "/food", label: "Food", jp: "食" },
  { href: "/phrases", label: "Phrases", jp: "言葉" },
  { href: "/map", label: "Map", jp: "地図" },
  { href: "/crew", label: "Crew", jp: "仲間" },
  { href: "/gallery", label: "Gallery", jp: "写真" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="border-b border-sumi/10 bg-washi/70 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="hanko text-lg leading-none">旅</span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-semibold text-aizome">Japan 2026</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-sumi/60">
              May 22 – 31
            </span>
          </span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {NAV.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={clsx(
                      "group relative font-sans text-sm tracking-wide transition",
                      active ? "text-vermillion" : "text-sumi hover:text-aizome",
                    )}
                  >
                    <span className="mr-1 font-serif text-xs text-sumi/50">{item.jp}</span>
                    <span>{item.label}</span>
                    <span
                      className={clsx(
                        "absolute -bottom-1 left-0 right-0 h-[2px] origin-left scale-x-0 bg-vermillion transition-transform duration-300 group-hover:scale-x-100",
                        active && "scale-x-100",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <details className="md:hidden relative">
          <summary className="list-none cursor-pointer rounded border border-sumi/15 px-3 py-1.5 text-sm">
            Menu
          </summary>
          <ul className="absolute right-0 mt-2 w-44 rounded-md border border-sumi/10 bg-washi shadow-lg z-20">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-4 py-2 text-sm hover:bg-sumi/5"
                >
                  <span className="mr-2 font-serif text-xs text-sumi/50">{item.jp}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </div>
    </header>
  );
}
