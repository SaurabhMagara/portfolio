"use client";

import { motion } from "framer-motion";
import Typewriter from "./Typewriter";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen pt-20 flex flex-col-reverse md:flex-row items-center justify-between relative z-10 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-3/5 space-y-6 text-center md:text-left mt-10 md:mt-0"
      >
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Hi, I&apos;m <span className="gradient-text text-glow">Saurabh Magara</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-text-secondary h-12">
          <Typewriter words={["Full Stack Developer", "Code Explorer", "Problem Solver"]} />
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center md:justify-start">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full font-semibold text-lg bg-gradient-to-r from-nebula-blue to-nebula-purple text-white shadow-[0_0_15px_rgba(77,28,154,0.5)] hover:shadow-[0_0_25px_rgba(77,28,154,0.8),0_0_15px_rgba(0,240,255,0.5)] transition-all transform hover:-translate-y-1"
          >
            View My Universe
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full font-semibold text-lg bg-transparent text-accent-cyan border-2 border-accent-cyan shadow-[inset_0_0_10px_rgba(0,240,255,0.2),0_0_10px_rgba(0,240,255,0.2)] hover:bg-accent-cyan/10 hover:shadow-[inset_0_0_20px_rgba(0,240,255,0.4),0_0_20px_rgba(0,240,255,0.4)] transition-all transform hover:-translate-y-1"
          >
            Initialize Contact
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="md:w-2/5 flex justify-center"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,var(--star-blue),var(--nebula-purple)_60%,var(--void-black)_100%)] shadow-[inset_-20px_-20px_40px_rgba(0,0,0,0.8),0_0_40px_rgba(0,240,255,0.3)] animate-[float_6s_ease-in-out_infinite,rotate_30s_linear_infinite] overflow-hidden">
            {/* Crater-like textures */}
            <div className="absolute w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.05)_10px,rgba(255,255,255,0.05)_20px)] opacity-30"></div>
          </div>
        </div>
      </motion.div>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
