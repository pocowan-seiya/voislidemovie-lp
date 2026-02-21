'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AiSecretarySolution = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Visual: Clean Abstract Diagram */}
                    <div className="relative">
                        <motion.div
                            className="relative h-[500px] bg-slate-50 rounded-2xl overflow-hidden flex flex-col items-center justify-center p-8 border border-slate-100 shadow-xl shadow-slate-200/50"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Abstract Network Lines */}
                            <div className="absolute inset-0 opacity-20">
                                <svg width="100%" height="100%">
                                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="0.5" />
                                    </pattern>
                                    <rect width="100%" height="100%" fill="url(#grid)" />
                                </svg>
                            </div>

                            {/* CENTER: AGENTIC AI Symbol */}
                            <div className="relative z-10 text-center">
                                <motion.div
                                    className="w-32 h-32 mx-auto bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-lg mb-6 relative"
                                    animate={{
                                        boxShadow: ["0 0 20px rgba(0,0,0,0.05)", "0 0 40px rgba(251,191,36,0.2)", "0 0 20px rgba(0,0,0,0.05)"]
                                    }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                >
                                    <span className="text-5xl">🧠</span>
                                </motion.div>
                                <h3 className="text-2xl font-serif text-slate-900 mb-2 tracking-wide">Agentic AI</h3>
                                <div className="h-[1px] w-12 bg-amber-400 mx-auto my-4"></div>
                                <p className="text-slate-500 text-sm tracking-widest uppercase">Autonomous Execution</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Text Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block px-4 py-1 mb-6 border border-slate-200 rounded-full bg-slate-50">
                                <span className="text-slate-500 text-xs font-bold tracking-widest uppercase">New Era: 2026</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight mb-8">
                                「AIに聞く」から、<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500">
                                    「AIに任せる」時代へ。
                                </span>
                            </h2>

                            <p className="text-slate-600 text-lg leading-relaxed mb-6 font-light">
                                ChatGPTに指示を出すだけの時代は、終わりつつあります。<br />
                                これからは、AIが自律的に考え、あなたの代わりに動く時代。
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8 font-light">
                                Gartnerが「2026年はエージェントの年」と定義したこの変革。<br />
                                それは決して大企業だけのものではありません。<br />
                                <strong>個人こそが、最強の「AI秘書」を持てる時代なのです。</strong>
                            </p>

                            <div className="pl-6 border-l-4 border-slate-900 py-2 bg-slate-50">
                                <p className="text-slate-800 font-serif italic text-lg opacity-80">
                                    「雑務はAI秘書へ。あなたはビジョンへ。<br />
                                    それが、私たちが提案する Vibe Working です。」
                                </p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AiSecretarySolution;
