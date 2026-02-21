import React from 'react';
import WisdomHero from '@/components/wisdom-lp/WisdomHero';
import WisdomEmpathy from '@/components/wisdom-lp/WisdomEmpathy';
import WisdomStarterKit from '@/components/wisdom-lp/WisdomStarterKit';
import WisdomSystemDetails from '@/components/wisdom-lp/WisdomSystemDetails';
import WisdomTransformation from '@/components/wisdom-lp/WisdomTransformation';
import WisdomStory from '@/components/wisdom-lp/WisdomStory';
import WisdomOffer, { WisdomFAQ } from '@/components/wisdom-lp/WisdomOffer';
import WisdomFooter from '@/components/wisdom-lp/WisdomFooter';

export default function WisdomLPPage() {
    return (
        <main className="min-h-screen bg-slate-50 font-sans selection:bg-cyan-200 selection:text-cyan-900">
            <WisdomHero />
            <WisdomEmpathy />
            <WisdomStarterKit />
            <WisdomSystemDetails />
            <WisdomTransformation />
            <WisdomStory />
            <WisdomOffer />
            <WisdomFAQ />
            <WisdomFooter />
        </main>
    );
}
