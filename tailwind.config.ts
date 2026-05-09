import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aizome: {
          DEFAULT: "#1e3a5f",
          deep: "#16294a",
          mist: "#3b5a82",
        },
        washi: {
          DEFAULT: "#f5efe0",
          warm: "#ede4cf",
          cool: "#fbf7ec",
        },
        vermillion: {
          DEFAULT: "#c8453d",
          deep: "#a8332b",
        },
        sumi: {
          DEFAULT: "#1a1a1a",
          soft: "#2c2c2c",
        },
        gold: {
          DEFAULT: "#c4a35a",
          soft: "#d9c08a",
        },
      },
      fontFamily: {
        serif: ["var(--font-shippori)", "serif"],
        sans: ["var(--font-noto)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        washi: "radial-gradient(circle at 20% 10%, rgba(196,163,90,0.06), transparent 50%), radial-gradient(circle at 85% 80%, rgba(30,58,95,0.05), transparent 55%)",
      },
      keyframes: {
        fall: {
          "0%": { transform: "translate3d(0,-10vh,0) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "100%": { transform: "translate3d(20vw,110vh,0) rotate(540deg)", opacity: "0" },
        },
        sway: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-12px)" },
        },
        inkIn: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        fall: "fall 12s linear infinite",
        sway: "sway 6s ease-in-out infinite",
        inkIn: "inkIn 2s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
