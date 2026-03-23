"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen pt-24 px-6 max-w-4xl mx-auto flex flex-col justify-center relative z-10 text-center">
      <SectionHeading title="Transmit Signal" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-10 md:p-16 flex flex-col items-center rounded-3xl bg-white/5 backdrop-blur-md border border-white/10"
      >
        <p className="text-xl text-text-secondary mb-10 max-w-2xl">
          Looking to launch your next project or just want to explore the cosmos of code together? My comm channels are always open.
        </p>

        <div className="flex flex-col sm:flex-row w-full gap-6 justify-center">
          <a
            href="mailto:saurabhmagara@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-text-primary text-lg hover:bg-accent-cyan/10 hover:border-accent-cyan hover:text-accent-cyan hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300 hover:-translate-y-1"
          >
            <FaEnvelope className="text-2xl" />
            <span>Email Me</span>
          </a>

          <a
            href="https://www.linkedin.com/in/saurabh-magara-06651b228"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-text-primary text-lg hover:bg-[#0077b5]/20 hover:border-[#0077b5] hover:text-[#0077b5] hover:shadow-[0_0_20px_rgba(0,119,181,0.3)] transition-all duration-300 hover:-translate-y-1"
          >
            <FaLinkedin className="text-2xl" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/SaurabhMagara"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-text-primary text-lg hover:bg-white/10 hover:border-white hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 hover:-translate-y-1"
          >
            <FaGithub className="text-2xl" />
            <span>GitHub</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
