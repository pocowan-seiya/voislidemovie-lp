'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AiSecretaryCountdown from './AiSecretaryCountdown';

const AiSecretaryHero = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white text-slate-900">

            {/* === BACKGROUND: ELEGANT TEXTURE === */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-slate-100 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-50/50 rounded-full blur-3xl" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')] opacity-30" />
            </div>

            {/* === CONTENT === */}
            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 min-h-screen items-center py-20 gap-12">

                {/* LEFT: Copy & CTA */}
                <motion.div
                    className="lg:col-span-7 flex flex-col justify-center gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-3">
                        <span className="h-[1px] w-12 bg-slate-900"></span>
                        <span className="text-slate-500 text-sm font-serif tracking-widest uppercase">
                            Private Concierge Class
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="font-serif font-medium leading-tight text-slate-900">
                        <span className="block text-2xl sm:text-3xl text-slate-500 mb-4 tracking-wide">
                            あなた専用の
                        </span>
                        <span className="block text-5xl sm:text-6xl lg:text-7xl mb-4 tracking-tight">
                            AI秘書を、
                        </span>
                        <span className="block text-4xl sm:text-5xl lg:text-6xl text-slate-800">
                            この場で一緒に<br />
                            <span className="border-b-2 border-amber-400 pb-1">作りませんか？</span>
                        </span>
                    </h1>

                    {/* Subhead */}
                    <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl font-light">
                        コードもスキルも不要。<br />
                        必要なのは、あなたの「ビジョン」だけ。<br />
                        <strong className="text-slate-900 font-medium">90分のライブ実演</strong>で、<br />
                        あなた専属のAI秘書が、静かに動き出します。
                    </p>

                    {/* CTA Button */}
                    <div className="pt-6">
                        <motion.a
                            href="#offer"
                            className="group relative inline-flex items-center justify-center px-10 py-5 bg-slate-900 text-white text-lg font-serif tracking-wider shadow-xl hover:bg-slate-800 transition-all duration-300"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="absolute inset-0 w-full h-full border border-white/20 transform scale-95 group-hover:scale-100 transition-transform duration-300"></span>
                            <span className="relative z-10 flex items-center gap-4">
                                <span>今すぐ席を確保する</span>
                                <span className="text-amber-400">→</span>
                            </span>
                        </motion.a>
                        <p className="mt-4 text-sm text-slate-500 font-serif italic">
                            ※ 2月限定 / 特別招待
                        </p>
                    </div>

                </motion.div>

                {/* RIGHT: Visual (Abstract Elegant) */}
                <motion.div
                    className="lg:col-span-5 h-[500px] relative pointer-events-none flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                >
                    {/* Circle Container */}
                    <div className="w-[400px] h-[400px] rounded-full border border-slate-200 relative flex items-center justify-center bg-white shadow-2xl shadow-slate-200/50">
                        {/* Inner Gold Circle */}
                        <div className="absolute inset-4 rounded-full border border-amber-200/50" />

                        {/* Center Abstract Shape */}
                        <div className="w-48 h-48 bg-slate-50 rounded-full flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white" />
                            <span className="relative text-6xl text-slate-300 font-serif italic">AI</span>
                        </div>

                        {/* Orbiting Elements (Minimal) */}
                        <motion.div
                            className="absolute inset-0"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-8 h-8 bg-white border border-slate-200 rounded-full shadow-md flex items-center justify-center text-xs text-slate-400">
                                ✉️
                            </div>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 w-8 h-8 bg-white border border-slate-200 rounded-full shadow-md flex items-center justify-center text-xs text-slate-400">
                                📅
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* === HERO BOTTOM COUNTDOWN === */}
            <div className="absolute bottom-0 left-0 w-full z-20 pb-12 bg-gradient-to-t from-white via-white/90 to-transparent pt-20">
                <AiSecretaryCountdown mode="hero" />
            </div>
        </section>
    );
};

export default AiSecretaryHero;
