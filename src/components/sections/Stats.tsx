"use client";

import React, { useState, useEffect, useRef } from "react";
import { Users, Code, Award, School } from "lucide-react";
import { motion, useInView } from "framer-motion";

// Animated counter sub-component
function AnimatedCounter({ value, duration = 2, suffix = "" }: { value: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return (
    <span ref={nodeRef} className="font-extrabold text-4xl sm:text-5xl text-white">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const stats = [
    {
      icon: Users,
      label: "Students Trained",
      value: 5000,
      suffix: "+",
      color: "text-purple-400",
      bgGlow: "bg-purple-500/10",
    },
    {
      icon: Code,
      label: "Projects Delivered",
      value: 220,
      suffix: "+",
      color: "text-blue-400",
      bgGlow: "bg-blue-500/10",
    },
    {
      icon: Award,
      label: "Placement Success",
      value: 92,
      suffix: "%",
      color: "text-emerald-400",
      bgGlow: "bg-emerald-500/10",
    },
    {
      icon: School,
      label: "Partner Colleges",
      value: 45,
      suffix: "+",
      color: "text-amber-400",
      bgGlow: "bg-amber-500/10",
    },
  ];

  return (
    <section className="relative py-20 bg-zinc-950/60 border-t border-zinc-900 overflow-hidden">
      {/* Background soft mesh */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-zinc-900/20 border border-zinc-800/40 relative overflow-hidden"
              >
                {/* Background soft glow inside stat item */}
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full blur-2xl ${stat.bgGlow} opacity-50`} />

                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 relative z-10">
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                
                <div className="relative z-10 mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                
                <p className="text-xs sm:text-sm font-semibold tracking-wide text-zinc-400 uppercase">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
