"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const isManualScroll = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const sectionIds = ["home", "about", "skills", "experience", "projects", "contact"];

    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.replace("#", "");
      if (sectionIds.includes(hash)) {
        setActiveSection(hash);
      }
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      if (isManualScroll.current) return;

      // If scrolled near bottom of the page, activate the contact section
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      if (scrollPosition >= documentHeight - 60) {
        setActiveSection("contact");
        return;
      }

      // If near the very top of page, activate home
      if (window.scrollY < 80) {
        setActiveSection("home");
        return;
      }

      // Check sections from bottom to top to find the active section in view
      const threshold = Math.min(260, window.innerHeight * 0.35);
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= threshold) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    isManualScroll.current = true;
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      isManualScroll.current = false;
    }, 800);
  };

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
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
              onClick={() => handleNavClick("home")}
              className="text-xl md:text-2xl font-bold text-star-white tracking-widest text-glow select-none"
            >
              Saurabh
            </a>
          </div>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 text-lg font-medium transition-all duration-300 ${
                    isActive
                      ? "text-star-white text-glow font-semibold"
                      : "text-text-primary/75 hover:text-star-white hover:text-glow group"
                  }`}
                >
                  {link.name}
                  {isActive ? (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent-cyan shadow-[0_0_12px_var(--accent-cyan)] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  ) : (
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent-cyan/60 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_var(--accent-cyan)]"></span>
                  )}
                </a>
              </li>
            );
          })}
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
            <ul className="flex flex-col items-center py-6 gap-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.name} className="w-full text-center px-8">
                    <a
                      href={link.href}
                      onClick={() => handleNavClick(link.id)}
                      className={`block py-2.5 px-6 rounded-full text-lg font-medium transition-all duration-300 ${
                        isActive
                          ? "text-star-white text-glow bg-white/10 border border-accent-cyan/40 shadow-[0_0_15px_rgba(0,240,255,0.2)] font-semibold"
                          : "text-text-primary/80 hover:text-star-white hover:bg-white/5"
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
