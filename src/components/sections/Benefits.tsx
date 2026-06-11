"use client";

import React from "react";
import { IndianRupee, Terminal, Briefcase, GraduationCap, Compass, Layers } from "lucide-react";
import { motion } from "framer-motion";

export default function Benefits() {
  const benefits = [
    {
      icon: IndianRupee,
      title: "Scholarship Up to ₹50,000",
      description: "Financial assistance covering major portions of training fees to help you learn without hurdles.",
      color: "from-purple-500/20 to-indigo-500/20",
      iconColor: "text-purple-400",
    },
    {
      icon: Terminal,
      title: "Industry-Oriented Training",
      description: "Learn state-of-the-art technologies (MERN, Flutter, AI, Python) designed around current job demands.",
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400",
    },
    {
      icon: Briefcase,
      title: "Internship Opportunities",
      description: "Work with our development teams on real products and acquire verifiable professional work experience.",
      color: "from-emerald-500/20 to-teal-500/20",
      iconColor: "text-emerald-400",
    },
    {
      icon: GraduationCap,
      title: "Career Mentorship",
      description: "Get weekly one-on-one sessions with senior software developers who guide your learning roadmap.",
      color: "from-pink-500/20 to-rose-500/20",
      iconColor: "text-pink-400",
    },
    {
      icon: Compass,
      title: "Placement Assistance",
      description: "Resume building, mock interviews, and direct referral opportunities in partner colleges & companies.",
      color: "from-amber-500/20 to-orange-500/20",
      iconColor: "text-amber-400",
    },
    {
      icon: Layers,
      title: "Live Project Exposure",
      description: "Move past mock projects. Write production-level code and deploy applications used by real audiences.",
      color: "from-indigo-500/20 to-blue-500/20",
      iconColor: "text-indigo-400",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 },
    },
  };

  return (
    <section id="benefits" className="relative py-24 border-t border-zinc-900 overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-purple-400 font-bold mb-3">
            Program Advantages
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">
            What You Get With CodeMe Hub
          </p>
          <div className="w-16 h-1.5 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-zinc-400 mt-4 leading-relaxed">
            We provide a comprehensive framework to build your career. Beyond financial assistance, our scholarship ensures professional preparedness.
          </p>
        </div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="glass-panel glass-panel-hover p-8 rounded-2xl flex flex-col items-start"
              >
                <div className={`p-4 rounded-xl bg-gradient-to-br ${benefit.color} border border-white/5 mb-6 shadow-inner`}>
                  <Icon className={`w-6 h-6 ${benefit.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
