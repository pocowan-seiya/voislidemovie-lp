import React from 'react';
import type { Metadata } from 'next';
import HeroSection from '@/components/consciousness-ai-lp/HeroSection';
import StorySection from '@/components/consciousness-ai-lp/StorySection';
import UniquenessSection from '@/components/consciousness-ai-lp/UniquenessSection';
import StepsSection from '@/components/consciousness-ai-lp/StepsSection';
import PlansSection from '@/components/consciousness-ai-lp/PlansSection';
import PlanDetailSection from '@/components/consciousness-ai-lp/PlanDetailSection';
import FinalCTA from '@/components/consciousness-ai-lp/FinalCTA';
import Footer from '@/components/consciousness-ai-lp/Footer';

export const metadata: Metadata = {
    title: '無限叡智ラボ | 意識×AI 実践コミュニティ',
    description:
        '見えない制限を手放し、じぶんの無限の叡智を復活し、最高のビジョンを、AIとの共創で形にしていく。1番のワクワクを生きる実践の場。',
};

export default function ConsciousnessAiLP() {
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
