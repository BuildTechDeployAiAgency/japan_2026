"use client";

import { useEffect, useRef } from "react";

type Petal = {
  x: number;
  y: number;
  size: number;
  speed: number;
  drift: number;
  rot: number;
  spin: number;
  hue: number;
};

export default function SakuraPetals() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let raf = 0;
    let petals: Petal[] = [];
    let running = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const seed = () => {
      const count = Math.min(28, Math.floor(window.innerWidth / 60));
      petals = Array.from({ length: count }, () => makePetal(true));
    };

    const makePetal = (initial = false): Petal => ({
      x: Math.random() * window.innerWidth,
      y: initial ? Math.random() * window.innerHeight : -20 - Math.random() * 200,
      size: 7 + Math.random() * 10,
      speed: 0.6 + Math.random() * 1.1,
      drift: -0.5 + Math.random() * 1.0,
      rot: Math.random() * Math.PI * 2,
      spin: -0.02 + Math.random() * 0.04,
      hue: 340 + Math.random() * 20,
    });

    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      const grad = ctx.createLinearGradient(-p.size, 0, p.size, 0);
      grad.addColorStop(0, `hsla(${p.hue}, 70%, 88%, 0.85)`);
      grad.addColorStop(1, `hsla(${p.hue + 8}, 65%, 76%, 0.85)`);
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.moveTo(0, -p.size * 0.6);
      ctx.bezierCurveTo(p.size * 0.6, -p.size * 0.4, p.size * 0.6, p.size * 0.4, 0, p.size * 0.6);
      ctx.bezierCurveTo(-p.size * 0.6, p.size * 0.4, -p.size * 0.6, -p.size * 0.4, 0, -p.size * 0.6);
      ctx.fill();
      ctx.restore();
    };

    const tick = () => {
      if (!running) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of petals) {
        p.y += p.speed;
        p.x += p.drift + Math.sin(p.y * 0.01) * 0.6;
        p.rot += p.spin;
        if (p.y > window.innerHeight + 30 || p.x < -30 || p.x > window.innerWidth + 30) {
          Object.assign(p, makePetal(false));
        }
        drawPetal(p);
      }
      raf = requestAnimationFrame(tick);
    };

    resize();
    seed();
    tick();
    window.addEventListener("resize", () => {
      resize();
      seed();
    });

    const onVisibility = () => {
      running = !document.hidden;
      if (running) tick();
      else cancelAnimationFrame(raf);
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVisibility);
      running = false;
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 opacity-70"
    />
  );
}
