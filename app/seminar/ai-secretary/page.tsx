import React from 'react';
import AiSecretaryHero from '@/components/ai-secretary-lp/AiSecretaryHero';
import AiSecretaryProblem from '@/components/ai-secretary-lp/AiSecretaryProblem';
import AiSecretarySolution from '@/components/ai-secretary-lp/AiSecretarySolution';
import AiSecretaryContent from '@/components/ai-secretary-lp/AiSecretaryContent';
import AiSecretaryProfile from '@/components/ai-secretary-lp/AiSecretaryProfile';
import AiSecretaryOffer from '@/components/ai-secretary-lp/AiSecretaryOffer';
import AiSecretaryFAQ from '@/components/ai-secretary-lp/AiSecretaryFAQ';
import AiSecretaryFooter from '@/components/ai-secretary-lp/AiSecretaryFooter';

export default function AiSecretaryPage() {
    return (
        <main className="bg-white min-h-screen text-slate-900 font-sans">
            <AiSecretaryHero />
            <AiSecretaryProblem />
            <AiSecretarySolution />
            <AiSecretaryContent />
            <AiSecretaryProfile />
            <AiSecretaryOffer />
            <AiSecretaryFAQ />
            <AiSecretaryFooter />
        </main>
    );
}
