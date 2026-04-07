"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    role: "Software Developer",
    company: "Rayo Innovations",
    date: "Nov 2025 - Present",
    details: [
      "Worked on CMS and CRM systems",
      "Built client-side modules and implemented them",
      "Developed fetch APIs with Mongo aggregation pipelines to extract exact data",
      "Made responsive designs",
      "Projects worked on: Village App Platform, Location CRM",
    ],
  },
  {
    role: "Software Developer (Intern)",
    company: "Rayo Innovation",
    date: "May 2025 - Nov 2025",
    details: [
      "Worked in role-based platforms",
      "Implemented forgot and reset password functionalities and some migration commands",
      "Applied UI related changes, built complete pages, and integrated APIs",
    ],
  },
  {
    role: "Full Stack Developer (Intern)",
    company: "Ananta Solutions",
    date: "Jan 2025 - Apr 2025",
    details: [
      "Worked on role-based systems, CRM, and CMS systems",
      "Managed to build CRUD APIs and integrated these APIs",
      "Major role involved building APIs and integration",
    ],
  },
];

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="min-h-screen pt-24 px-6 max-w-4xl mx-auto flex flex-col justify-center relative z-10">
      <SectionHeading title="Experience Timeline" />

      <div ref={containerRef} className="relative border-l-2 border-accent-cyan/20 ml-4 md:ml-0 md:pl-8 space-y-12">
        {/* Background line track */}
        <div className="absolute top-0 -left-[2px] w-[2px] h-full bg-white/5 md:-left-px"></div>
        {/* Animated glowing fill line */}
        <motion.div 
          style={{ height: lineHeight }}
          className="absolute top-0 -left-[2px] w-[2px] bg-gradient-to-b from-accent-cyan via-nebula-purple to-transparent shadow-[0_0_15px_var(--accent-cyan)] md:-left-px origin-top"
        ></motion.div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
              damping: 12
            }}
            className="relative glass-card ml-6 md:ml-0 p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-accent-cyan/50 hover:-translate-y-1 transition-all duration-300"
          >
            {/* Timeline Dot */}
            <div className="absolute top-8 -left-[45px] md:-left-[49px] w-4 h-4 rounded-full bg-accent-cyan shadow-[0_0_10px_var(--accent-cyan)] z-10">
              <div className="absolute -inset-1 rounded-full border border-accent-cyan animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
            </div>

            <h3 className="text-2xl font-bold text-star-white mb-1">{exp.role}</h3>
            <h4 className="text-xl text-accent-cyan font-medium mb-3">{exp.company}</h4>
            <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm text-text-secondary mb-4">
              {exp.date}
            </span>
            <ul className="space-y-2 text-text-secondary">
              {exp.details.map((detail, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-accent-cyan mr-2 mt-1">▹</span>
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
