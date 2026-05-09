import type { Metadata } from "next";
import { Shippori_Mincho, Noto_Sans_JP } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SakuraPetals from "@/components/SakuraPetals";
import "./globals.css";

const shippori = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-shippori",
  display: "swap",
});

const noto = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Japan 2026 — 旅",
  description:
    "Our family + friends Japan holiday: Tokyo & Kyoto, May 22–31, 2026. Guide before, memories after.",
  openGraph: {
    title: "Japan 2026 — 旅",
    description: "Tokyo & Kyoto, May 22–31, 2026.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${shippori.variable} ${noto.variable}`}>
      <body className="washi-paper min-h-screen font-sans text-sumi antialiased">
        <SakuraPetals />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
