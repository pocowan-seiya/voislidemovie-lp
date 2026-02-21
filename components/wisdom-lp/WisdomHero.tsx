'use client';

import React from 'react';
import { motion } from 'framer-motion';

const WisdomHero = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white">

            {/* === BACKGROUND: THE SOURCE FIELD === */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* 1. Golden Nebula (Bottom center rising) */}
                <motion.div
                    className="absolute bottom-[-20%] left-[20%] w-[1000px] h-[1000px] rounded-full blur-[120px] opacity-40 mix-blend-multiply"
                    style={{ background: 'radial-gradient(circle, #fbbf24, #f59e0b, transparent)' }}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* 2. Cyan Aether (Top right) */}
                <motion.div
                    className="absolute top-[-20%] right-[-10%] w-[1200px] h-[1200px] rounded-full blur-[100px] opacity-30 mix-blend-multiply"
                    style={{ background: 'radial-gradient(circle, #22d3ee, #06b6d4, transparent)' }}
                    animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Noise */}
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-dense" />
            </div>

            {/* === CONTENT GRID === */}
            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 min-h-screen items-center py-20">

                {/* LEFT: Typography & Energy Text */}
                <motion.div
                    className="lg:col-span-7 flex flex-col justify-center relative z-20"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    {/* Tag */}
                    <div className="inline-flex items-center gap-2 mb-10">
                        <span className="h-[2px] w-8 bg-gradient-to-r from-amber-500 to-fuchsia-500"></span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-fuchsia-600 font-bold tracking-[0.2em] text-sm uppercase">Wisdom Starter Kit</span>
                    </div>

                    {/* MAIN CATCHPHRASE */}
                    <div className="relative mb-14">
                        <h1 className="font-bold leading-none tracking-tight text-slate-900">
                            {/* Line 1: YOUR */}
                            <span className="block text-[3rem] sm:text-[4rem] lg:text-[5rem] font-bold text-slate-400 mb-2">
                                あなたの
                            </span>

                            {/* Line 2: INFINITE WISDOM (Gradient) */}
                            <span className="block text-[4.5rem] sm:text-[6rem] lg:text-[7.5rem] font-serif leading-[1] -ml-2 filter py-2">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-fuchsia-600 drop-shadow-sm">
                                    無限の叡智
                                </span>
                            </span>

                            {/* Line 3: UNLEASH (Single Line) - FORCED NO WRAP & REDUCED SIZE FOR SAFETY */}
                            <span className="block text-[3.2rem] sm:text-[4.5rem] lg:text-[5.5rem] font-black text-slate-800 mt-4 leading-tight whitespace-nowrap">
                                を、<span className="relative inline-block">
                                    解き放つ。
                                    <motion.span
                                        className="absolute bottom-2 left-0 w-full h-[0.15em] bg-gradient-to-r from-amber-400 to-fuchsia-400"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ duration: 1, delay: 1 }}
                                    />
                                </span>
                            </span>
                        </h1>
                    </div>

                    {/* SUB TEXT & LEAD - "Designable & Energetic" */}
                    <div className="relative pl-6 lg:pl-10">
                        {/* Vertical Accent Line */}
                        <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-amber-300 via-fuchsia-300 to-transparent rounded-full" />

                        {/* Sub Catch: Dynamic Typography */}
                        <div className="mb-10 space-y-2">
                            <p className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-slate-800 to-slate-600 tracking-wide">
                                才能を開花させ、
                            </p>
                            <p className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-slate-800 to-slate-600 tracking-wide">
                                本当の自分のビジョンを形にし、
                            </p>
                            <p className="text-2xl md:text-3xl font-bold text-slate-900 tracking-wide relative inline-block">
                                <span className="relative z-10 w-fit">無限の叡智でこの地球で存在する。</span>
                                <span className="absolute bottom-1 left-0 w-full h-3 bg-amber-100/80 -z-0 -skew-x-12 transform origin-left animate-pulse-slow"></span>
                            </p>
                        </div>

                        {/* Lead Text: Energetic Layout */}
                        <div className="bg-white/40 backdrop-blur-md border border-white/60 p-8 rounded-2xl shadow-lg shadow-amber-500/5 mb-10 max-w-xl group hover:bg-white/60 transition-colors duration-500">
                            <p className="text-lg text-slate-700 font-medium leading-loose">
                                あなたは、自分の叡智をフル活用して、<br />
                                <span className="font-bold text-slate-900">この地球でやるべきことを、やりきりたいと思っている。</span>
                            </p>
                            <div className="my-6 h-[1px] w-full bg-gradient-to-r from-slate-200 to-transparent" />
                            <p className="text-lg text-slate-700 font-medium leading-loose">
                                制限を手放せば、<br />
                                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-fuchsia-600">
                                    想像を超えた叡智が、解き放たれる。
                                </span>
                            </p>
                        </div>

                        {/* CTA */}
                        <motion.a
                            href="https://line.me/R/ti/p/%40YOUR_LINE_ID"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center justify-center px-10 py-5 bg-slate-900 text-white text-lg font-bold rounded-full overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300"
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-amber-500 via-fuchsia-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[shimmer_2s_linear_infinite]" />
                            <span className="relative z-10 flex items-center gap-3">
                                <span>🚀</span>
                                <span>今すぐ3つのAIシステムを受け取る</span>
                            </span>
                        </motion.a>
                    </div>
                </motion.div>

                {/* RIGHT: EXPANDED ABSTRACT VISUAL (The "Big Bang") */}
                <motion.div
                    className="hidden lg:block lg:col-span-5 relative h-full w-full pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    {/* Centered offset container */}
                    <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">

                        {/* 1. Core Rotating Rings (Geometric) - INCREASED VISIBILITY */}
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={`ring-${i}`}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border rounded-full"
                                style={{
                                    width: `${30 + i * 15}%`,
                                    height: `${30 + i * 15}%`,
                                    borderColor: i % 2 === 0 ? 'rgba(245, 158, 11, 0.3)' : 'rgba(34, 211, 238, 0.3)',
                                    borderWidth: i % 3 === 0 ? '2px' : '1px'
                                }}
                                animate={{ rotate: i % 2 === 0 ? 360 : -360, scale: [1, 1.05, 1] }}
                                transition={{ duration: 25 + i * 5, repeat: Infinity, ease: "linear" }}
                            />
                        ))}

                        {/* 2. Exploding Light Rays (The Unleashing) - MORE INTENSE */}
                        {[...Array(18)].map((_, i) => (
                            <motion.div
                                key={`ray-${i}`}
                                className="absolute top-1/2 left-1/2 w-[55%] h-[3px] bg-gradient-to-r from-transparent via-amber-500/60 to-transparent origin-left"
                                style={{ rotate: i * 20 }}
                                animate={{
                                    opacity: [0.3, 0.8, 0.3],
                                    scaleX: [0.8, 1.5, 0.8],
                                    width: ['50%', '65%', '50%']
                                }}
                                transition={{ duration: 2.5, delay: i * 0.1, repeat: Infinity, ease: "easeInOut" }}
                            />
                        ))}

                        {/* 3. Floating "Idea" Particles - FASTER & LARGER */}
                        {[...Array(12)].map((_, i) => (
                            <motion.div
                                key={`particle-${i}`}
                                className="absolute w-14 h-14 bg-white/60 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 flex items-center justify-center transform hover:scale-110 transition-transform"
                                style={{
                                    top: '50%',
                                    left: '50%',
                                }}
                                animate={{
                                    x: Math.cos(i * 30) * 350,
                                    y: Math.sin(i * 30) * 350,
                                    rotate: [0, 90, 180, 270, 360],
                                    scale: [0, 1.2, 1],
                                    opacity: [0, 1, 0]
                                }}
                                transition={{
                                    duration: 5 + i % 3,
                                    repeat: Infinity,
                                    delay: i * 0.3,
                                    ease: "easeOut"
                                }}
                            >
                                <span className="text-2xl opacity-80">
                                    {['✨', '💎', '💡', '🚀', '🔮', '🧬', '⚛️', '🌟', '🔑', '👁️'][i % 10]}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
            {/* Smooth Transition to Next Section (Dark) */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent z-10 pointer-events-none" />
        </section>
    );
};

export default WisdomHero;
