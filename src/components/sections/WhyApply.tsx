"use client";

import React from "react";
import { TrendingUp, Compass, Network, Globe, Briefcase, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyApply() {
  const points = [
    {
      icon: TrendingUp,
      title: "Skill Development",
      description: "Accelerate your programming knowledge by learning advanced paradigms and writing clean code with peer developers.",
      tag: "Technical",
    },
    {
      icon: Compass,
      title: "Career Guidance",
      description: "Receive personalized coaching and learning pathways from mentors currently leading software teams.",
      tag: "Mentorship",
    },
    {
      icon: Globe,
      title: "Industry Exposure",
      description: "Understand agile methodologies, code review standards, version control pipelines, and collaborative production.",
      tag: "Experience",
    },
    {
      icon: Network,
      title: "Networking Opportunities",
      description: "Connect with tech leaders, alumni, and fellow computer science scholars across colleges and universities.",
      tag: "Connections",
    },
    {
      icon: Briefcase,
      title: "Internship Chances",
      description: "High-performing scholarship students are selected for paid internships within our active services division.",
      tag: "Employment",
    },
    {
      icon: UserCheck,
      title: "Placement Support",
      description: "Direct references to client companies, dedicated resume formatting, and mock interview preparations.",
      tag: "Careers",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 },
    },
  };

  return (
    <section id="why-apply" className="relative py-24 border-t border-zinc-900 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-accent-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-purple-400 font-bold mb-3">
            Why Choose Us?
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">
            Unlocking Exceptional Career Milestones
          </p>
          <div className="w-16 h-1.5 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-zinc-400 mt-4 leading-relaxed">
            The CodeMe Hub Scholarship is not just a certification; it's a gateway to practical capabilities that set you apart in a competitive hiring environment.
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
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-panel glass-panel-hover p-6 rounded-2xl relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded bg-zinc-800 text-zinc-400">
                      {point.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {point.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
