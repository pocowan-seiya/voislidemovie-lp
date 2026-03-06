'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background: subtle sacred geometry */}
            <div className="absolute inset-0 sacred-geometry-bg" />

            {/* Floating geometric shapes */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Large circle - top left */}
                <div
                    className="absolute -top-20 -left-20 w-80 h-80 rounded-full animate-breath-pulse"
                    style={{
                        background:
                            'radial-gradient(circle, rgba(124,92,191,0.06) 0%, transparent 70%)',
                    }}
                />
                {/* Small diamond - top right */}
                <div
                    className="absolute top-32 right-20 w-16 h-16 animate-geometric-float"
                    style={{
                        background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(124,92,191,0.1))',
                        transform: 'rotate(45deg)',
                        borderRadius: '4px',
                        animationDelay: '1s',
                    }}
                />
                {/* Medium circle - center right */}
                <div
                    className="absolute top-1/2 -right-16 w-64 h-64 rounded-full animate-subtle-glow"
                    style={{
                        background:
                            'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
                    }}
                />
                {/* Small circle - bottom left */}
                <div
                    className="absolute bottom-40 left-16 w-12 h-12 rounded-full animate-geometric-float"
                    style={{
                        background: 'rgba(124,92,191,0.08)',
                        animationDelay: '3s',
                    }}
                />
                {/* Thin line - decorative */}
                <div
                    className="absolute top-1/3 left-1/4 w-px h-40 opacity-10"
                    style={{
                        background: 'linear-gradient(180deg, transparent, #7c5cbf, transparent)',
                    }}
                />
                {/* Another thin line */}
                <div
                    className="absolute bottom-1/3 right-1/3 w-32 h-px opacity-10"
                    style={{
                        background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)',
                    }}
                />
                {/* Dot grid pattern */}
                <div className="absolute top-20 right-1/4 grid grid-cols-5 gap-4 opacity-[0.06]">
                    {Array.from({ length: 25 }).map((_, i) => (
                        <div key={i} className="w-1 h-1 rounded-full bg-[#1a1a3e]" />
                    ))}
                </div>
            </div>

            {/* Main content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                {/* Small label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-4"
                >
                    <span
                        className="inline-block px-5 py-2 text-xs tracking-[0.3em] rounded-full border"
                        style={{
                            borderColor: 'rgba(124,92,191,0.2)',
                            color: '#7c5cbf',
                            background: 'rgba(124,92,191,0.04)',
                        }}
                    >
                        AI × 意識 実践コミュニティ
                    </span>
                </motion.div>

                {/* Community Name: 無限叡智ラボ — large logo treatment */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-6"
                >
                    <h1
                        className="leading-none"
                        style={{
                            fontFamily: '"Noto Serif JP", serif',
                            fontWeight: 900,
                            fontSize: 'clamp(2.8rem, 8vw, 5.5rem)',
                            letterSpacing: '0.08em',
                            background: 'linear-gradient(135deg, #1a1a3e 0%, #7c5cbf 45%, #c9a84c 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        無限叡智ラボ
                    </h1>
                    {/* Subtle decorative line under logo */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="mx-auto mt-4"
                        style={{
                            width: '120px',
                            height: '2px',
                            background: 'linear-gradient(90deg, transparent, #c9a84c, #7c5cbf, transparent)',
                        }}
                    />
                </motion.div>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mb-8 leading-relaxed"
                    style={{
                        fontFamily: '"Noto Serif JP", serif',
                        fontWeight: 500,
                        fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
                        color: '#1a1a3e',
                        letterSpacing: '0.06em',
                    }}
                >
                    制限を手放し、無限の可能性の自分に復活する
                    <br />
                    <span className="text-gradient-consciousness">
                        最高のビジョンを、AIで軽やかに形にしていく
                    </span>
                </motion.p>

                {/* Sub copy */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="mb-10"
                >
                    <p
                        className="text-sm sm:text-base leading-loose mx-auto max-w-xl"
                        style={{ color: '#5a5a7a', letterSpacing: '0.03em' }}
                    >
                        見えない制限を手放し、じぶんの無限の叡智を復活し、
                        <br className="hidden sm:block" />
                        最高のビジョンを、AIとの共創で形にしていく
                        <br />
                        <span style={{ fontWeight: 500, color: '#1a1a3e' }}>
                            1番のワクワクを生きる実践の場
                        </span>
                    </p>
                    <p
                        className="mt-5 text-sm"
                        style={{ color: '#c9a84c', fontWeight: 500, letterSpacing: '0.05em' }}
                    >
                        今なら初月無料で参加できます
                    </p>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.3 }}
                >
                    <a
                        href="#plans"
                        className="inline-block px-10 py-4 text-white text-base font-medium rounded-full
                                   transition-all duration-500 hover:scale-[1.03] hover:shadow-xl"
                        style={{
                            background: 'linear-gradient(135deg, #1a1a3e 0%, #7c5cbf 100%)',
                            boxShadow: '0 8px 30px rgba(124,92,191,0.25)',
                            letterSpacing: '0.05em',
                        }}
                    >
                        🎁 今すぐ無限の叡智を復活させる（初月無料）
                    </a>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-xs tracking-widest" style={{ color: '#9a9ab0' }}>
                            SCROLL
                        </span>
                        <div
                            className="w-px h-10 animate-bounce-slow"
                            style={{
                                background: 'linear-gradient(180deg, #7c5cbf, transparent)',
                            }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
