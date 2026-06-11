"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Is there an application fee for the scholarship?",
      answer: "No, there is absolutely no application fee. The CodeMe Hub Scholarship application process is completely free of cost for all qualifying candidates.",
    },
    {
      question: "Who is eligible to apply for this scholarship program?",
      answer: "Students graduating in the class of 2026 who are pursuing tech-related fields (including B.Tech, BCA, MCA, B.Sc Computer Science, and similar branches) are eligible to apply. A strong enthusiasm for software development and career growth is highly valued.",
    },
    {
      question: "How will candidates be selected for the benefits?",
      answer: "Selection follows a 3-step criteria: 1) Initial form screening, 2) An online fundamental coding and analytical reasoning test (link sent via email), and 3) A brief interaction with our tech mentors to evaluate learning dedication. Final lists are published within 2 weeks of tests.",
    },
    {
      question: "What specific benefits are covered under this scholarship?",
      answer: "Selected candidates receive: Up to ₹50,000 tuition fee waiver for development bootcamps, direct internships at our client engineering division, one-on-one developer mentorship reviews, access to partner placement networks, and live project work certificates.",
    },
    {
      question: "Can I participate if I have zero prior programming experience?",
      answer: "Yes! Our curriculum starts from base coding paradigms. The main prerequisites are standard logic capability, passion, and the willingness to dedicate 12-15 hours per week to our schedules.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 border-t border-zinc-900 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-accent-blue/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-purple-400 font-bold mb-3">
            Got Questions?
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">
            Frequently Asked Questions
          </p>
          <div className="w-16 h-1.5 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto mt-4 rounded-full" />
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`glass-panel rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? "border-purple-500/30 bg-zinc-900/30" : "hover:border-zinc-800"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-white hover:text-purple-400 transition-colors duration-200 cursor-pointer"
                >
                  <span className="flex items-center gap-3 pr-4 text-sm sm:text-base">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? "text-purple-400" : "text-zinc-500"}`} />
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-purple-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-zinc-500 shrink-0" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-zinc-900 text-xs sm:text-sm text-zinc-400 leading-relaxed pl-14">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
