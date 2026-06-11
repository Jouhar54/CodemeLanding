"use client";

import React, { useState } from "react";
import { Laptop, BookOpen, Handshake, Users, ChevronRight, MessageSquareQuote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type TabType = "services" | "training" | "partnerships" | "success";

export default function About() {
  const [activeTab, setActiveTab] = useState<TabType>("services");

  const tabContent = {
    services: {
      title: "Software Development Services",
      description: "We are an active software engineering agency building products for global clients. Our production teams design, code, and deploy custom software, providing our students with exposure to real coding practices.",
      items: [
        "Full-Stack Web Apps (Next.js, Node.js, React)",
        "Mobile App Development (Flutter, React Native)",
        "Cloud Solutions & DevOps integrations",
        "Enterprise API development & UI/UX Designs",
      ],
    },
    training: {
      title: "Immersive Training Programs",
      description: "Our training vertical focuses on bridging the gap between college curricula and market demands. We deliver intensive developer bootcamps with practical lab exercises and review cycles.",
      items: [
        "MERN Stack Developer Bootcamp",
        "Python & Django Data Science Roadmap",
        "Flutter Cross-Platform Mobile Engineering",
        "AI, Machine Learning, and Big Data Basics",
      ],
    },
    partnerships: {
      title: "Industry Partnerships",
      description: "We collaborate with software hubs, tech startups, and colleges to offer direct recruitment pipelines, expert masterclasses, and modern curriculum revisions.",
      items: [
        "45+ Partner Colleges for placement drives",
        "Strategic ties with 25+ tech companies",
        "Industry-certified course syllabi",
        "Guest lectures by senior engineering leads",
      ],
    },
    success: {
      title: "Student Success Stories",
      description: "Hundreds of graduates from our training programs have successfully transitioned into high-growth software roles. Hear what they have to say about our practical pedagogy.",
      quotes: [
        {
          quote: "The live project experience was a game-changer. I went from coding basic scripts to deploying production-ready code. Highly recommend!",
          author: "Anjali Nair",
          role: "SDE, TechCorp (2025 Alumni)",
        },
        {
          quote: "The mentors are active developers. They review your pull requests, correct your code structure, and guide your interview preparation.",
          author: "Rahul Sharma",
          role: "Frontend Engineer, WebSolutions (2025 Alumni)",
        },
      ],
    },
  };

  const tabs: { id: TabType; label: string; icon: React.ComponentType<any> }[] = [
    { id: "services", label: "Software Services", icon: Laptop },
    { id: "training", label: "Training", icon: BookOpen },
    { id: "partnerships", label: "Partnerships", icon: Handshake },
    { id: "success", label: "Success Stories", icon: Users },
  ];

  return (
    <section id="about" className="relative py-24 border-t border-zinc-900 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] rounded-full bg-accent-blue/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Core Description */}
          <div className="lg:col-span-5">
            <h2 className="text-xs uppercase tracking-widest text-purple-400 font-bold mb-3">
              About Our Company
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
              Empowering Tech Aspirants Since 2018
            </h3>
            <div className="w-16 h-1.5 bg-gradient-to-r from-accent-blue to-accent-purple mb-8 rounded-full" />
            <p className="text-zinc-400 leading-relaxed mb-6">
              We operate at the intersection of professional software services and technical education. By running active software production teams alongside our training classrooms, we ensure our students learn on live project codebases.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Our 2026 Scholarship is designed to discover talented students and place them directly in front of real development workflows, preparing them for top-tier careers.
            </p>
          </div>

          {/* Right Column: Interactive Tab Section */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Tab Selectors */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex flex-col sm:flex-row items-center gap-2 px-3 py-3 sm:py-2.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-gradient-to-r from-accent-blue/15 to-accent-purple/15 border-purple-500 text-white"
                        : "bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900"
                    }`}
                  >
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-purple-400" : "text-zinc-400"}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Content Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl min-h-[300px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  <h4 className="text-xl font-bold text-white">
                    {tabContent[activeTab].title}
                  </h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {tabContent[activeTab].description}
                  </p>

                  {/* List items if exists */}
                  {"items" in tabContent[activeTab] && (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {(tabContent[activeTab] as any).items.map((item: string, i: number) => (
                        <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                          <ChevronRight className="w-4 h-4 text-purple-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Quotes if exists */}
                  {"quotes" in tabContent[activeTab] && (
                    <div className="space-y-4 pt-2">
                      {(tabContent[activeTab] as any).quotes.map((q: any, i: number) => (
                        <div key={i} className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
                          <p className="text-xs sm:text-sm text-zinc-300 italic flex gap-2">
                            <MessageSquareQuote className="w-5 h-5 text-purple-400 shrink-0" />
                            <span>"{q.quote}"</span>
                          </p>
                          <div className="mt-3 text-right">
                            <span className="text-xs font-bold text-white">{q.author}</span>
                            <span className="text-[10px] text-zinc-500 block">{q.role}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
