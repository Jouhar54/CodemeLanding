import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhyChooseMeContent from "@/components/sections/WhyChooseMeContent";

export const metadata: Metadata = {
  title: "Why Choose CodeMe Hub | Scholarship 2026 & Tech Training Calicut",
  description:
    "Discover why CodeMe Hub is the top choice for graduating developers in 2026. Live production software projects, 1-on-1 engineering mentorship, up to ₹50,000 scholarship, and 100% placement support in Calicut.",
};

export default function WhyChooseMePage() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-white selection:bg-purple-500/30">
      {/* Universal Mesh Background */}
      <div className="mesh-bg" />

      {/* Ambient background glows */}
      <div className="absolute top-24 left-1/4 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[130px] pointer-events-none" />

      {/* Global Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative pt-20">
        <WhyChooseMeContent />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
