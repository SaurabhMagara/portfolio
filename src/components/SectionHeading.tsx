"use client";

import { motion } from "framer-motion";

export default function SectionHeading({ title }: { title: string }) {
  return (
    <motion.h2
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-bold mb-12 text-star-white text-glow relative inline-block"
    >
      {title}
      <span className="absolute -bottom-3 left-0 w-1/2 h-[3px] bg-gradient-to-r from-accent-cyan to-transparent"></span>
    </motion.h2>
  );
}
