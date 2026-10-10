import Navbar from "@/components/layout/Navbar";
import Benefits from "@/components/sections/Benefits";
import Footer from "@/components/layout/Footer";

export default function BenefitsPage() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-white selection:bg-purple-500/30">
      <div className="mesh-bg" />
      <Navbar />
      <Benefits />
      <Footer />
    </div>
  );
}