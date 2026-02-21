'use client';

import React from 'react';
import { motion } from 'framer-motion';

const WisdomStarterKit = () => {
    return (
        <section className="py-24 md:py-32 bg-slate-950 text-white relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-cyan-600/20 via-purple-600/20 to-amber-600/20 rounded-full blur-[150px] pointer-events-none" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.span
                    className="inline-block py-2 px-6 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 text-sm md:text-base font-bold mb-8 border border-cyan-500/30 tracking-widest"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                >
                    【無限の叡智 スターターキット】
                </motion.span>

                <motion.h2
                    className="text-4xl md:text-5xl lg:text-7xl font-bold mb-10 leading-tight tracking-tight"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                >
                    無限の叡智を解き放つ<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-amber-400">
                        3つのAIシステムを、無料提供
                    </span>
                </motion.h2>

                <motion.p
                    className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl leading-loose"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                >
                    このスターターキットは、<br />
                    あなたの無限の叡智を、解き放つための道標。<br /><br />
                    3つのAIシステムを使うことで、<br />
                    あなたは、こんな世界へ抜けていきます。
                </motion.p>
            </div>
        </section>
    );
};

export default WisdomStarterKit;
