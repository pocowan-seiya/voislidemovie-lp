'use client';

import React from 'react';
import { motion } from 'framer-motion';

const WisdomFooter = () => {
    return (
        <footer className="py-24 md:py-32 bg-slate-950 text-white text-center relative overflow-hidden">
            {/* Background Aurora */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[200%] h-[100%] opacity-30"
                    style={{ background: 'conic-gradient(from 180deg at 50% 70%, #06b6d4 0deg, #8b5cf6 90deg, #ec4899 180deg, #f59e0b 270deg, #06b6d4 360deg)' }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                />
                <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-4xl">

                <motion.h2
                    className="text-4xl md:text-5xl lg:text-7xl font-bold mb-10 leading-tight tracking-tight"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                >
                    あなたの中の無限の叡智を、<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-amber-400">今、解き放つ。</span>
                </motion.h2>

                <motion.p
                    className="text-lg md:text-xl text-slate-300 mb-16 leading-loose max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                >
                    本当の自分で、1番のワクワクのビジョンを生きる。<br />
                    人生の操縦席に座り、じぶんで現実を映しかえていける。<br /><br />
                    制限は手放して、想像を超えたじぶんの叡智に出会っていく。<br />
                    新時代、圧倒的な自分軸で、僕たちは無限の可能性に生きる。<br /><br />
                    <span className="text-white font-bold text-2xl md:text-3xl block mt-8">その扉を、今、開きませんか？</span>
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    className="flex flex-col items-center gap-6 mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                >
                    <motion.a
                        href="https://line.me/R/ti/p/%40YOUR_LINE_ID"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex flex-col items-center justify-center px-10 py-6 md:px-20 md:py-8 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full shadow-2xl shadow-purple-500/30 hover:shadow-cyan-400/50 hover:scale-105 overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {/* Shimmer */}
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />

                        <span className="text-sm font-medium mb-1 opacity-80 tracking-widest">【完全無料】</span>
                        <span className="text-2xl md:text-3xl lg:text-4xl tracking-wide">無限の叡智を解き放つ</span>
                        <span className="text-sm font-medium mt-1 opacity-80 tracking-widest">3つのAIシステムを今すぐ受け取る</span>
                    </motion.a>
                    <motion.p
                        className="text-cyan-400 font-medium tracking-[0.3em] text-sm"
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        ↓ LINE公式アカウントに登録
                    </motion.p>
                </motion.div>

                <motion.p
                    className="text-slate-400 text-base md:text-lg"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                >
                    あなたとの出会いを、楽しみにしています。<br className="md:hidden" />
                    <span className="font-serif text-amber-300 ml-2">江藤せいや</span>
                </motion.p>

                <div className="mt-24 border-t border-white/10 pt-8 text-xs text-slate-600">
                    &copy; {new Date().getFullYear()} Seiya Eto. All Rights Reserved.
                </div>

            </div>
        </footer>
    );
};

export default WisdomFooter;
