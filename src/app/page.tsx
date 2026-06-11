import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import Eligibility from "@/components/sections/Eligibility";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import WhyApply from "@/components/sections/WhyApply";
import ApplicationForm from "@/components/sections/ApplicationForm";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-white selection:bg-purple-500/30">
      {/* Universal Mesh Background */}
      <div className="mesh-bg" />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Scholarship Benefits */}
      <Benefits />

      {/* Eligibility Details */}
      <Eligibility />

      {/* About Company & Services */}
      <About />

      {/* Animated Counter Stats */}
      <Stats />

      {/* Why Apply Grid */}
      <WhyApply />

      {/* Scholarship Application Form */}
      <ApplicationForm />

      {/* FAQ Accordions */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </div>
  );
}
