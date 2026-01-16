import Hero from "@/components/voiceslide-movie-lp/Hero";
import DemoVideo from "@/components/voiceslide-movie-lp/DemoVideo";
import SpecialOffer from "@/components/voiceslide-movie-lp/SpecialOffer";
import Problem from "@/components/voiceslide-movie-lp/Problem";
import HowItWorks from "@/components/voiceslide-movie-lp/HowItWorks";
import Features from "@/components/voiceslide-movie-lp/Features";
import FunctionDetails from "@/components/voiceslide-movie-lp/FunctionDetails";
import UseCases from "@/components/voiceslide-movie-lp/UseCases";
import FaqSystem from "@/components/voiceslide-movie-lp/FaqSystem";
import PackageIntro from "@/components/voiceslide-movie-lp/PackageIntro";
import PackageDetails from "@/components/voiceslide-movie-lp/PackageDetails";
import Pricing from "@/components/voiceslide-movie-lp/Pricing";
import FaqPackage from "@/components/voiceslide-movie-lp/FaqPackage";
import FinalCTA from "@/components/voiceslide-movie-lp/FinalCTA";
import Footer from "@/components/voiceslide-movie-lp/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-800 font-sans selection:bg-cyan-100 selection:text-cyan-900">
      {/* Part A: System LP */}
      <Hero />
      <DemoVideo />
      <SpecialOffer />
      <Problem />
      <HowItWorks />
      <Features />
      <FunctionDetails />
      <UseCases />
      <FaqSystem />

      {/* Part B: Package LP */}
      <PackageIntro />
      <PackageDetails />
      <Pricing />
      <FaqPackage />
      <FinalCTA />

      {/* Footer */}
      <Footer />

    </main>
  );
}
