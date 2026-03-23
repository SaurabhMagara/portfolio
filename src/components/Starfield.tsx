"use client";

import { useEffect, useRef } from "react";

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    type Star = {
      x: number;
      y: number;
      radius: number;
      color: string;
      velocity: number;
      opacity: number;
      twinkleSpeed: number;
    };

    let stars: Star[] = [];

    const getRandomStarColor = () => {
      const colors = ["#ffffff", "#eaeaea", "#cccccc", "#a0a0a0", "#888888"];
      const rand = Math.random();
      if (rand < 0.6) return colors[0];
      if (rand < 0.8) return colors[1];
      if (rand < 0.9) return colors[2];
      if (rand < 0.95) return colors[3];
      return colors[4];
    };

    const initStars = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      stars = [];

      const numStars = Math.floor((width * height) / 2000);
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.5,
          color: getRandomStarColor(),
          velocity: Math.random() * 0.05,
          opacity: Math.random(),
          twinkleSpeed: Math.random() * 0.02 + 0.005,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        star.y += star.velocity;
        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
        }

        star.opacity += star.twinkleSpeed;
        if (star.opacity > 1 || star.opacity < 0.2) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);

        if (star.radius > 1.2) {
          ctx.shadowBlur = 5;
          ctx.shadowColor = star.color;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fillStyle = star.color;
        ctx.globalAlpha = Math.max(0, Math.min(1, star.opacity));
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(animate);
    };

    initStars();
    animate();

    const handleResize = () => {
      initStars();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none"
    />
  );
}
