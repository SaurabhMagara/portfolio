"use client";

import { motion, Variants } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skills = [
  "HTML", "JavaScript", "CSS", "React", "Next.js", "TypeScript", 
  "Express", "MongoDB", "RTK Query", "Redux", "VS Code", 
  "Antigravity", "Postman", "Redis", "BullMQ", "Nginx"
];

export default function SkillsSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="skills" className="min-h-screen pt-24 px-6 max-w-5xl mx-auto flex flex-col justify-center relative z-10">
      <SectionHeading title="Tech Stack" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-wrap gap-4 justify-center md:justify-start"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative overflow-hidden bg-white/5 border border-white/10 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:border-accent-cyan hover:text-star-white hover:scale-105 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] cursor-default"
          >
            <span className="relative z-10">{skill}</span>
            <div className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-accent-cyan/20 to-transparent group-hover:left-full transition-all duration-500 ease-in-out"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
