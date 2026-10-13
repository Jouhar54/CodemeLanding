"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  TrendingUp,
  Compass,
  Network,
  Globe,
  Briefcase,
  UserCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Award,
  Terminal,
  Users,
  ShieldCheck,
  ChevronRight,
  Code2,
  Building2,
  GraduationCap
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

export default function WhyChooseMeContent() {
  const router = useRouter();

  const highlights = [
    {
      icon: Award,
      title: "Up to ₹50,000",
      subtitle: "Merit Scholarship",
      desc: "Substantial fee coverage ensuring financial freedom while learning.",
      color: "from-purple-500/20 to-indigo-500/20",
      iconColor: "text-purple-400",
    },
    {
      icon: Terminal,
      title: "Production Stack",
      subtitle: "Hands-on Engineering",
      desc: "Work on Next.js, MERN, Flutter, Python, and modern AI toolings.",
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400",
    },
    {
      icon: Users,
      title: "Active Tech Leads",
      subtitle: "1-on-1 Mentorship",
      desc: "Direct code reviews and PR feedback from working software leads.",
      color: "from-emerald-500/20 to-teal-500/20",
      iconColor: "text-emerald-400",
    },
    {
      icon: ShieldCheck,
      title: "100% Support",
      subtitle: "Placement Pipeline",
      desc: "Dedicated mock interviews, resume polishing, and client referrals.",
      color: "from-amber-500/20 to-orange-500/20",
      iconColor: "text-amber-400",
    },
  ];

  const pillars = [
    {
      icon: TrendingUp,
      title: "Practical Skill Mastery",
      tag: "Technical Excellence",
      description:
        "Move beyond memorization. Write production-ready, typed, tested code while mastering design patterns, component architecture, and cloud workflows.",
      perks: ["Clean code best practices", "Modern CI/CD pipelines", "Real state management"],
    },
    {
      icon: Compass,
      title: "Dedicated Career Mentorship",
      tag: "Personalized Guidance",
      description:
        "Every scholar receives individual attention. Senior engineers assess your strengths, identify growth opportunities, and build tailored career roadmaps.",
      perks: ["1-on-1 sprint reviews", "Personal portfolio audit", "Career pathway strategy"],
    },
    {
      icon: Globe,
      title: "Real Industry Exposure",
      tag: "Professional Workflow",
      description:
        "Experience what working at a modern tech firm feels like. Participate in standups, code reviews, pull request workflows, and sprint retrospectives.",
      perks: ["Agile/Scrum ceremonies", "Git collaboration rules", "Enterprise architecture"],
    },
    {
      icon: Network,
      title: "Elite Tech Networking",
      tag: "Community & Alumni",
      description:
        "Join an exclusive network of driven tech scholars across colleges, alumni working in top IT companies, and hiring managers looking for proven talent.",
      perks: ["Alumni meetups & hackathons", "Direct access to CTOs", "Cross-college collaboration"],
    },
    {
      icon: Briefcase,
      title: "Paid Internship Opportunities",
      tag: "Work Experience",
      description:
        "High-performing scholarship scholars get fast-tracked into paid internships in our active software development division handling real global client deliverables.",
      perks: ["Paid industry stipends", "Production commit history", "Client project experience"],
    },
    {
      icon: UserCheck,
      title: "Guaranteed Placement Assistance",
      tag: "Career Launch",
      description:
        "Our placement cell connects you directly with 25+ partner tech employers, prepares you for rigorous technical rounds, and advocates for your hire.",
      perks: ["Direct campus referrals", "Algorithmic interview prep", "Negotiation & offer guidance"],
    },
  ];

  const comparison = [
    {
      aspect: "Training Pedagogy",
      traditional: "Passive recorded lectures and generic tutorials",
      codeme: "Live coding sprints, architecture sessions & PR reviews",
    },
    {
      aspect: "Mentorship",
      traditional: "Academic faculty with limited production experience",
      codeme: "Active senior developers currently shipping commercial apps",
    },
    {
      aspect: "Project Portfolio",
      traditional: "Cloned tutorial apps (Todo lists, basic calculators)",
      codeme: "Full-stack client applications deployed to production cloud",
    },
    {
      aspect: "Career & Placement",
      traditional: "Unfiltered mass job links without personalized help",
      codeme: "1-on-1 mock interviews, portfolio reviews & direct partner referrals",
    },
    {
      aspect: "Financial Support",
      traditional: "Full upfront tuition fees with rigid payment schedules",
      codeme: "Merit-based scholarships up to ₹50,000 for 2026 graduates",
    },
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400 mb-8">
        <Link href="/" className="hover:text-purple-400 transition-colors flex items-center gap-1">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
        <span className="text-zinc-200 font-medium">Why Choose Us</span>
      </div>

      {/* Hero Header */}
      <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400 mb-6"
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span>The CodeMe Hub Advantage</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight"
        >
          Why Choose{" "}
          <span className="bg-gradient-to-r from-accent-blue via-indigo-400 to-accent-purple bg-clip-text text-transparent">
            CodeMe Hub
          </span>
          ?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-3xl mx-auto"
        >
          We bridge the gap between academic textbooks and high-demand software engineering careers.
          Built inside an active software development agency in Calicut, our 2026 Scholarship program
          gives you the real-world competence that hiring managers look for.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-8"
        >
          <button
            onClick={() => router.push("/#apply-form")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-accent-blue to-accent-purple hover:opacity-95 shadow-lg shadow-purple-500/20 transition-all cursor-pointer"
          >
            <span>Apply for Scholarship</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => router.push("/benefits")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-zinc-300 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-all cursor-pointer"
          >
            <span>View All Benefits</span>
          </button>
        </motion.div>
      </div>

      {/* Quick Value Highlights */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
      >
        {highlights.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-panel glass-panel-hover p-6 rounded-2xl relative overflow-hidden"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} border border-white/5 flex items-center justify-center ${item.iconColor} mb-4`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <p className="text-xs uppercase tracking-wider font-semibold text-zinc-500 mb-1">
                {item.subtitle}
              </p>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Six Core Pillars Section */}
      <div className="mb-24">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs uppercase tracking-widest text-purple-400 font-bold mb-3">
            Core Pillars of Excellence
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
            How We Transform Students into Production-Ready Engineers
          </h3>
          <div className="w-16 h-1.5 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto mt-4 rounded-full" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-panel glass-panel-hover p-7 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-purple-300">
                      {pillar.tag}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2.5">{pillar.title}</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">{pillar.description}</p>
                </div>

                <div className="border-t border-zinc-800/80 pt-4 space-y-2">
                  {pillar.perks.map((perk, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Comparison: CodeMe vs Traditional Training */}
      <div className="mb-24">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs uppercase tracking-widest text-purple-400 font-bold mb-3">
            The Deciding Factor
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
            CodeMe Hub vs. Traditional Institutes
          </h3>
          <div className="w-16 h-1.5 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-zinc-400 mt-4 leading-relaxed">
            See why ambitious computer science scholars consistently choose CodeMe Hub over conventional tutorial centers.
          </p>
        </div>

        <div className="glass-panel rounded-2xl overflow-hidden border border-zinc-800">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-900/60">
                  <th className="p-4 sm:p-5 text-sm font-semibold text-zinc-300 w-1/4">Feature</th>
                  <th className="p-4 sm:p-5 text-sm font-semibold text-zinc-400 w-3/8">Traditional Institutes</th>
                  <th className="p-4 sm:p-5 text-sm font-semibold text-purple-400 bg-purple-500/10 w-3/8">
                    CodeMe Hub Model
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-xs sm:text-sm">
                {comparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-zinc-900/30 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-white">{row.aspect}</td>
                    <td className="p-4 sm:p-5 text-zinc-400">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-400/80 shrink-0 mt-0.5" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-zinc-200 bg-purple-500/5">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="font-medium">{row.codeme}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Placement & Partner Highlights */}
      <div className="glass-panel rounded-3xl p-8 sm:p-12 mb-20 border border-zinc-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-widest text-purple-400 font-bold mb-2 block">
              Proven Placement Record
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Direct Access to Top Tech Companies
            </h3>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-6">
              Located in the heart of Calicut at HiLITE Business Park, CodeMe Hub operates closely with Kerala's thriving IT community. Our graduates secure software engineering roles with leading tech agencies, high-growth startups, and corporate tech enterprises.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-center">
                <p className="text-2xl font-extrabold text-purple-400">500+</p>
                <p className="text-[11px] text-zinc-400 mt-1">Developers Placed</p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-center">
                <p className="text-2xl font-extrabold text-blue-400">45+</p>
                <p className="text-[11px] text-zinc-400 mt-1">Partner Colleges</p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-center">
                <p className="text-2xl font-extrabold text-emerald-400">25+</p>
                <p className="text-[11px] text-zinc-400 mt-1">Hiring Partners</p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-center">
                <p className="text-2xl font-extrabold text-amber-400">100%</p>
                <p className="text-[11px] text-zinc-400 mt-1">Placement Support</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-start gap-4">
              <Building2 className="w-8 h-8 text-purple-400 shrink-0" />
              <div>
                <h5 className="text-sm font-bold text-white mb-1">HiLITE Business Park Campus</h5>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Learn inside a professional corporate tech park environment that mirrors real engineering offices.
                </p>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-start gap-4">
              <Code2 className="w-8 h-8 text-blue-400 shrink-0" />
              <div>
                <h5 className="text-sm font-bold text-white mb-1">Live Agency Workflows</h5>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Our software services division works on real clients worldwide, giving students authentic engineering exposure.
                </p>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-start gap-4">
              <GraduationCap className="w-8 h-8 text-emerald-400 shrink-0" />
              <div>
                <h5 className="text-sm font-bold text-white mb-1">2026 Batch Exclusive</h5>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Special scholarship packages tailored specifically for final-year and graduating students of 2026.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Banner */}
      <div className="text-center max-w-3xl mx-auto rounded-3xl p-8 sm:p-12 border border-purple-500/20 bg-gradient-to-b from-purple-950/20 to-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/10 via-purple-500/10 to-accent-purple/10 pointer-events-none" />
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 relative z-10">
          Ready to Accelerate Your Engineering Career?
        </h3>
        <p className="text-sm sm:text-base text-zinc-400 mb-8 max-w-xl mx-auto relative z-10 leading-relaxed">
          Applications for the CodeMe Hub 2026 Scholarship are open now. Secure your financial assistance, live project mentorship, and job placement support.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
          <button
            onClick={() => router.push("/#apply-form")}
            className="px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-accent-blue to-accent-purple hover:opacity-95 shadow-lg shadow-purple-500/25 transition-all cursor-pointer"
          >
            Apply Now for Scholarship
          </button>
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-xl font-bold text-sm text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-all"
          >
            Contact Admissions
          </Link>
          <Link
            href="/"
            className="px-8 py-3.5 rounded-xl font-bold text-sm text-zinc-400 hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
