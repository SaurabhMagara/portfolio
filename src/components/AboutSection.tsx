"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen pt-24 px-6 max-w-7xl mx-auto flex flex-col justify-center relative z-10">
      <SectionHeading title="About Me" />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="glass-card text-lg md:text-xl leading-relaxed max-w-4xl p-8 md:p-12 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg"
      >
        <p className="mb-6">
          Hello! I&apos;m <span className="text-accent-cyan font-medium text-glow">Saurabh Magara</span>. 
          I like to read and explore new technologies. I am passionate about life, 
          enjoy diving deep into psychology, and find myself constantly fascinated by astronomy and the cosmos. 
          When I&apos;m not coding, I also love to travel and discover new places.
        </p>
        <p>
          I built this portfolio to reflect my fascination with space alongside my technical skills as a Full Stack Developer.
          Whether it&apos;s crafting seamless user interfaces or architecting robust backend APIs, I approach every project 
          with curiosity and a drive for excellence.
        </p>
      </motion.div>
    </section>
  );
}
