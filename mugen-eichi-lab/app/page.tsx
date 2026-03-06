import React from 'react';
import HeroSection from '@/components/consciousness-ai-lp/HeroSection';
import StorySection from '@/components/consciousness-ai-lp/StorySection';
import UniquenessSection from '@/components/consciousness-ai-lp/UniquenessSection';
import StepsSection from '@/components/consciousness-ai-lp/StepsSection';
import PlanDetailSection from '@/components/consciousness-ai-lp/PlanDetailSection';
import PlansSection from '@/components/consciousness-ai-lp/PlansSection';
import FinalCTA from '@/components/consciousness-ai-lp/FinalCTA';
import Footer from '@/components/consciousness-ai-lp/Footer';

export default function Home() {
  return (
    <main
      className="min-h-screen bg-white text-gray-800 selection:bg-violet-200 selection:text-violet-900 overflow-x-hidden"
      style={{ fontFamily: '"Noto Sans JP", "Hiragino Sans", sans-serif' }}
    >
      <HeroSection />
      <StorySection />
      <UniquenessSection />
      <StepsSection />
      <PlanDetailSection />
      <PlansSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
