"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 bg-void-black/90 backdrop-blur-md border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "py-6 bg-void-black/50 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center justify-center">
          <div className="blackhole-ring px-6 py-2.5 md:px-8 md:py-3 transition-all duration-300">
            <a
              href="#home"
              className="text-xl md:text-2xl font-bold text-star-white tracking-widest text-glow select-none"
            >
              Saurabh
            </a>
          </div>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative text-text-primary text-lg font-medium transition-all duration-300 hover:text-star-white hover:text-glow group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent-cyan transition-all duration-300 group-hover:w-full shadow-[0_0_10px_var(--accent-cyan)]"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden text-star-white text-2xl cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-void-black/95 backdrop-blur-lg border-b border-white/10 shadow-xl"
          >
            <ul className="flex flex-col items-center py-6 gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-text-primary text-xl font-medium hover:text-accent-cyan transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
