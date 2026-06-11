"use client";

import React from "react";
import { CheckCircle2, GraduationCap, Laptop, Sparkles, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function Eligibility() {
  const criteria = [
    {
      icon: GraduationCap,
      title: "Graduating in 2026",
      description: "Students currently in pre-final years of their undergraduate or postgraduate courses targeting graduation in 2026.",
    },
    {
      icon: Laptop,
      title: "CS / IT Related Streams",
      description: "B.Tech (CSE, ECE, EEE, IT), BCA, MCA, B.Sc Computer Science, or similar tech-related disciplines.",
    },
    {
      icon: Heart,
      title: "Passionate About Coding",
      description: "A strong drive to write software, build projects, and solve real-world engineering problems.",
    },
    {
      icon: Sparkles,
      title: "Openness to Learn & Grow",
      description: "Ready to dedicate time for immersive training, coding sprints, and mentorship reviews.",
    },
  ];

  return (
    <section id="eligibility" className="relative py-24 border-t border-zinc-900 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-accent-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: List of Criteria */}
          <div className="lg:col-span-7">
            <h2 className="text-xs uppercase tracking-widest text-purple-400 font-bold mb-3">
              Who Can Apply?
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
              Simple Eligibility Criteria
            </h3>
            <div className="w-16 h-1.5 bg-gradient-to-r from-accent-blue to-accent-purple mb-8 rounded-full" />
            <p className="text-zinc-400 mb-8 leading-relaxed">
              We look for passion, dedication, and the right academic alignment. Check if you fit our requirements below. The selection is merit-based.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {criteria.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-xs text-zinc-400 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Infographic Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              className="glass-panel p-8 rounded-3xl relative overflow-hidden flex flex-col items-center text-center shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/10 rounded-full blur-2xl" />

              {/* Central badge */}
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-accent-blue to-accent-purple flex items-center justify-center shadow-lg shadow-purple-500/10 mb-6">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>

              <h4 className="text-xl font-bold text-white mb-2">Graduating Batch</h4>
              <p className="text-3xl font-extrabold bg-gradient-to-r from-white via-purple-300 to-indigo-400 bg-clip-text text-transparent mb-4">
                Class of 2026
              </p>
              
              <div className="w-full h-px bg-zinc-800 my-4" />

              <div className="w-full text-left space-y-4 text-xs">
                <div className="flex justify-between text-zinc-400">
                  <span>Stream Preference</span>
                  <span className="font-semibold text-white">CS / IT / BCA / MCA</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Minimum CGPA</span>
                  <span className="font-semibold text-white">No Bar (Skills Matter!)</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Program Structure</span>
                  <span className="font-semibold text-white">Online/Hybrid</span>
                </div>
              </div>

              <div className="mt-8 text-xs text-purple-400 font-semibold px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-xl">
                Applications Close Soon
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
