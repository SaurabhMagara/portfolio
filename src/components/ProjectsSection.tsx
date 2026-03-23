"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { FaSpotify, FaBlog, FaGamepad } from "react-icons/fa";

const projects = [
  {
    title: "Spotify Web",
    desc: "Next.js application integrated with official Spotify developer API.",
    icon: <FaSpotify className="text-4xl text-accent-cyan" />,
    features: [
      "Shows latest uploaded music and albums",
      "Search music, albums, podcasts and redirect to official Spotify",
    ],
    tech: ["Next.js", "Tailwind CSS"],
    link: "https://spotify-web-theta.vercel.app/"
  },
  {
    title: "Blog App",
    desc: "Full-stack blogging platform with user authentication and interactions.",
    icon: <FaBlog className="text-4xl text-accent-cyan" />,
    features: [
      "Register, view, like, and comment on blogs",
      "Upload profile images and change password functionality",
      "Create, edit, and delete personal blogs",
    ],
    tech: ["Next.js", "Full Stack"],
    link: "https://techblog-beige.vercel.app/"
  },
  {
    title: "Valorant Info Site",
    desc: "Information platform for Riot's popular game Valorant.",
    icon: <FaGamepad className="text-4xl text-accent-cyan" />,
    features: [
      "Information on Agents, Weapons, Maps, and In-game Currencies",
      "Responsive design with filter and search features",
    ],
    tech: ["React"],
    link: "https://valorant-info-site.vercel.app/"
  },
];

export default function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="min-h-screen pt-24 px-6 max-w-7xl mx-auto flex flex-col justify-center relative z-10">
      <SectionHeading title="Stellar Projects" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="glass-card flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 group p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full cursor-pointer">
              <div className="mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-3">
                {project.icon}
              </div>
              <h3 className="text-2xl font-bold text-star-white mb-3 group-hover:text-accent-cyan transition-colors flex items-center gap-2">
                {project.title}
                <svg className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </h3>
              <p className="text-text-secondary mb-6 flex-grow">{project.desc}</p>
            <ul className="space-y-2 mb-8">
              {project.features.map((feature, i) => (
                <li key={i} className="text-sm text-text-secondary flex items-start">
                  <span className="text-accent-cyan mr-2 mt-1">▹</span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs bg-accent-cyan/10 text-accent-cyan px-3 py-1 rounded-full border border-accent-cyan/20"
                >
                  {t}
                </span>
              ))}
            </div>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
