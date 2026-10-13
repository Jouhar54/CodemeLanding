"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Award, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Benefits", href: "/benefits" },
    { name: "Eligibility", href: "/#eligibility" },
    { name: "About", href: "/#about" },
    { name: "Why Choose Us", href: "/why-choose-me" },
    { name: "FAQ", href: "/#faq" },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("/#") && pathname === "/") {
      document.querySelector(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(href);
    }
  };

  const isLinkActive = (href: string) => {
    if (href === "/why-choose-me") {
      return pathname === "/why-choose-me" || pathname === "/why-choose-us" || pathname === "/why-apply";
    }
    return pathname === href;
  };

  const handleLogoClick = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/70 backdrop-blur-md border-b border-zinc-800/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={handleLogoClick}>
            <img src="/logo/codemeLogo.png" alt="CodeMe Hub Logo" className="w-10 h-10 object-cover rounded-full border border-zinc-800/80 shadow-md shadow-purple-500/10 shrink-0" />
            <span className="text-xl font-bold bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              CodeMe<span className="text-purple-400"> Hub</span>
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className={`text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    active ? "text-purple-400 font-semibold" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => handleLinkClick("/#apply-form")}
              className="relative group overflow-hidden px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-accent-blue to-accent-purple hover:opacity-95 transition-all shadow-md shadow-purple-500/10 cursor-pointer"
            >
              <span className="relative z-10">Apply Now</span>
              <span className="absolute inset-0 bg-gradient-to-r from-accent-purple to-accent-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-400 hover:text-white p-2 rounded-lg"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 glass-panel border-x-0 border-b border-zinc-800 bg-zinc-950/95 py-6 px-4 flex flex-col gap-4 shadow-xl"
          >
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className={`text-left py-2 px-3 rounded-lg transition-colors ${
                    active
                      ? "text-purple-400 bg-zinc-900 font-semibold"
                      : "text-zinc-300 hover:text-white hover:bg-zinc-900"
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
            <button
              onClick={() => handleLinkClick("/#apply-form")}
              className="mt-2 w-full text-center py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-accent-blue to-accent-purple"
            >
              Apply Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}