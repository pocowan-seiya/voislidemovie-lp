import React from 'react';
import HeroSection from '@/components/consciousness-ai-lp/HeroSection';
import UpcomingWorkshopsSection from '@/components/consciousness-ai-lp/UpcomingWorkshopsSection';
import VideoSection from '@/components/consciousness-ai-lp/VideoSection';
import StorySection from '@/components/consciousness-ai-lp/StorySection';
import UniquenessSection from '@/components/consciousness-ai-lp/UniquenessSection';
import TwoAxesSection from '@/components/consciousness-ai-lp/TwoAxesSection';
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
      <UpcomingWorkshopsSection />
      <VideoSection />
      <StorySection />
      <UniquenessSection />
      <TwoAxesSection />
      <StepsSection />
      <PlanDetailSection />
      <PlansSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
