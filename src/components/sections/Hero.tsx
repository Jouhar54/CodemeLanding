"use client";

import React from "react";
import { ArrowRight, Code2, Sparkles, BookOpen, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-accent-blue/20 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-accent-purple/20 blur-[100px] pointer-events-none" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-purple-400 mb-6"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Admissions Open for 2026 Batch</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6"
          >
            CodeMe Hub <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-accent-blue via-indigo-400 to-accent-purple bg-clip-text text-transparent">
              Scholarship 2026
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-zinc-400 max-w-xl leading-relaxed mb-8"
          >
            Empowering talented students with industry-focused training opportunities, internship programs, and career placement support.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => handleScroll("#apply-form")}
              className="relative flex items-center justify-center gap-2 group overflow-hidden px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-accent-blue to-accent-purple shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                Apply Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-accent-purple to-accent-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button
              onClick={() => handleScroll("#benefits")}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-zinc-300 bg-zinc-900/80 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all cursor-pointer"
            >
              Learn More
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side: Visual Element (Mock UI/Interactive graphic) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.3 }}
          className="lg:col-span-5 relative"
        >
          {/* Outer glowing halo */}
          <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/20 to-accent-purple/20 rounded-3xl blur-2xl -z-10" />

          {/* Graphic Container (Visual card deck / Mock UI) */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-2xl">
            {/* Topbar of code editor */}
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs text-zinc-500 font-mono">codeme_scholarship.tsx</span>
            </div>

            {/* Inner Content */}
            <div className="space-y-4 font-mono text-sm">
              <div className="text-purple-400">
                const <span className="text-blue-400">Scholarship</span> = {"{"}
              </div>
              <div className="pl-4 text-zinc-400">
                worth: <span className="text-emerald-400">"Up to ₹50,000"</span>,
              </div>
              <div className="pl-4 text-zinc-400">
                eligibility: <span className="text-emerald-400">"Graduating 2026"</span>,
              </div>
              <div className="pl-4 text-zinc-400">
                training: <span className="text-emerald-400">"MERN, Python, Flutter, AI"</span>,
              </div>
              <div className="pl-4 text-zinc-400">
                internships: <span className="text-amber-400">true</span>,
              </div>
              <div className="pl-4 text-zinc-400">
                careerSupport: <span className="text-amber-400">true</span>
              </div>
              <div className="text-purple-400">{"};"}</div>
            </div>

            {/* Float Cards inside the Hero */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-xl flex items-center gap-3 max-w-[180px]"
            >
              <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 shrink-0">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Placements</p>
                <p className="text-xs font-bold text-white">Direct Referrals</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-xl flex items-center gap-3 max-w-[200px]"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Curriculum</p>
                <p className="text-xs font-bold text-white">Live Project Exposure</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
