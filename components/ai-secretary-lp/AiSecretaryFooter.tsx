'use client';

import React from 'react';

const AiSecretaryFooter = () => {
    return (
        <footer className="py-16 bg-white border-t border-slate-100 text-center">
            <div className="container mx-auto px-6">

                <div className="mb-8">
                    <p className="text-xl font-serif text-slate-800 mb-2 tracking-wide">
                        Vision to Reality.
                    </p>
                    <p className="text-slate-500 text-sm font-light tracking-wider uppercase">
                        Create your own AI Team.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <p className="text-xs text-slate-400 font-serif">
                        © 2026 Seiya Eto. All rights reserved.
                    </p>

                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-full border border-slate-100">
                        <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                        <span className="text-[10px] text-slate-500 font-medium tracking-widest uppercase">
                            POWERED BY VIBE CODING
                        </span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default AiSecretaryFooter;
