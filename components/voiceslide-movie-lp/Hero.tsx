"use client";

import { useEffect, useState } from "react";

export default function Hero() {
    // Simple ripple effect state or just CSS
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white pt-20 pb-20 px-6 md:px-12">

            {/* Background Ripple/Aurora Effects (Colorful Waveforms) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Abstract Waveform Shapes */}
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full blur-[100px] animate-pulse mix-blend-multiply" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-gradient-to-tl from-amber-300/30 to-red-400/30 rounded-full blur-[100px] animate-pulse delay-1000 mix-blend-multiply" />
                <div className="absolute top-[20%] right-[-20%] w-[60%] h-[60%] bg-gradient-to-bl from-green-400/30 to-emerald-500/30 rounded-full blur-[120px] animate-pulse delay-2000 mix-blend-multiply" />

                {/* Waveform SVG Overlay */}
                <svg className="absolute top-[85%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,50 C20,40 30,60 50,50 C70,40 80,60 100,50 V100 H0 Z" fill="url(#grad1)" className="animate-wave" />
                    <path d="M0,50 C20,60 30,40 50,50 C70,60 80,40 100,50 V100 H0 Z" fill="url(#grad2)" className="animate-wave delay-75" />
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#06b6d4" />
                            <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#f59e0b" />
                            <stop offset="100%" stopColor="#ef4444" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="max-w-6xl w-full mx-auto flex flex-col items-center text-center z-10">

                {/* Catch Copy */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.2] mb-8 animate-fade-in-up">
                    <span className="block text-2xl md:text-3xl lg:text-4xl font-medium text-slate-600 mb-6 tracking-wide">
                        音声を録るだけで、<br className="md:hidden" />YouTube動画が自動で完成する。
                    </span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 drop-shadow-sm">
                        音声ファーストの新常識
                    </span>
                    <br />
                    <span className="text-5xl md:text-7xl lg:text-8xl mt-3 block tracking-tighter text-slate-900">
                        VoiSlide Movie
                    </span>
                </h1>

                {/* Sub Copy */}
                <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-200">
                    もう、編集に時間を取られない。もう、"作り込む"必要はない。<br />
                    <span className="font-bold text-slate-800">音声を録る → 動画が生まれる</span><br />
                    たったこれだけで、YouTube発信が完結します。
                </p>

                {/* CTA Button */}
                <button
                    onClick={() => {
                        const el = document.getElementById("demo-section");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full text-lg md:text-xl font-bold shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 animate-fade-in-up delay-300 overflow-hidden"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        🎤 実演動画を観る
                        <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                    </span>
                    <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out -skew-x-12 origin-left" />
                </button>

            </div>

        </section>
    );
}
