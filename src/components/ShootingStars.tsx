"use client";

import { useEffect, useState } from "react";

export default function ShootingStars() {
  const [stars, setStars] = useState<{ id: number; left: number; top: number; duration: number }[]>([]);

  useEffect(() => {
    let idCounter = 0;
    
    const createShootingStar = () => {
      const id = idCounter++;
      const star = {
        id,
        left: Math.random() * 100,
        top: Math.random() * 50,
        duration: Math.random() * 2 + 2,
      };

      setStars((current) => [...current, star]);

      // Remove star after animation
      setTimeout(() => {
        setStars((current) => current.filter((s) => s.id !== id));
      }, star.duration * 1000);
    };

    const interval = setInterval(createShootingStar, Math.random() * 5000 + 4000);
    
    // Initial star
    createShootingStar();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute w-[2px] h-[80px] rounded-full opacity-0"
          style={{
            left: `${star.left}vw`,
            top: `${star.top}vh`,
            background: "linear-gradient(to bottom, rgba(255,255,255,0), var(--star-white))",
            transform: "rotate(45deg)",
            animation: `shooting ${star.duration}s linear`,
          }}
        />
      ))}
      <style>{`
        @keyframes shooting {
          0% {
            transform: translate(0, 0) rotate(45deg);
            opacity: 1;
          }
          100% {
            transform: translate(-1000px, 1000px) rotate(45deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
