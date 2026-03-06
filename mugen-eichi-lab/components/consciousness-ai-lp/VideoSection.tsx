'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.8 },
};

export default function VideoSection() {
    return (
        <section className="relative py-20 sm:py-28" style={{ background: '#fafafa' }}>
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-0 w-full h-px"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.12), transparent)' }}
                />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto px-6">
                {/* Section heading */}
                <motion.div {...fadeInUp} className="text-center mb-12">
                    <p className="text-sm tracking-[0.2em] mb-4" style={{ color: '#c9a84c' }}>
                        VIDEO
                    </p>
                    <h2
                        className="text-xl sm:text-2xl leading-relaxed mb-3"
                        style={{
                            fontFamily: '"Noto Serif JP", serif',
                            fontWeight: 600,
                            color: '#1a1a3e',
                            letterSpacing: '0.04em',
                        }}
                    >
                        まずは、こちらの動画をご覧ください
                    </h2>
                    <div className="section-divider mt-6" />
                </motion.div>

                {/* Video embed container */}
                <motion.div
                    {...fadeInUp}
                    className="relative rounded-2xl overflow-hidden"
                    style={{
                        border: '1px solid rgba(124,92,191,0.12)',
                        boxShadow: '0 8px 40px rgba(124,92,191,0.08)',
                    }}
                >
                    {/* 16:9 aspect ratio container */}
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                        {/* Placeholder — replace src with actual YouTube embed URL */}
                        <div
                            className="absolute inset-0 flex items-center justify-center"
                            style={{
                                background: 'linear-gradient(135deg, rgba(26,26,62,0.04), rgba(124,92,191,0.06), rgba(201,168,76,0.04))',
                            }}
                        >
                            <div className="text-center">
                                <div
                                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                                    style={{
                                        background: 'linear-gradient(135deg, #7c5cbf, #c9a84c)',
                                        boxShadow: '0 4px 20px rgba(124,92,191,0.3)',
                                    }}
                                >
                                    <svg
                                        className="w-8 h-8 ml-1"
                                        fill="#fff"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                                <p className="text-sm" style={{ color: '#7c5cbf', fontWeight: 500 }}>
                                    動画を準備中です
                                </p>
                            </div>
                        </div>
                        {/*
                          YouTube動画が準備できたらこちらに差し替え:
                          <iframe
                            className="absolute inset-0 w-full h-full"
                            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                            title="無限叡智ラボ紹介動画"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        */}
                    </div>
                </motion.div>

                {/* Caption */}
                <motion.div {...fadeInUp} className="text-center mt-6">
                    <p className="text-sm leading-relaxed mb-8" style={{ color: '#4a4a6a' }}>
                        このコミュニティで何が起きていくのか——
                        <br />
                        その全体像を、動画でお伝えします。
                    </p>
                    <a
                        href="#plans"
                        className="inline-block rounded-full px-10 py-4 text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        style={{
                            fontFamily: '"Noto Serif JP", serif',
                            fontWeight: 600,
                            color: '#fff',
                            background: 'linear-gradient(135deg, #7c5cbf, #5a3d9e)',
                            boxShadow: '0 4px 20px rgba(124,92,191,0.3)',
                            letterSpacing: '0.06em',
                        }}
                    >
                        無限叡智ラボに申し込む
                    </a>
                    <p className="text-xs mt-3" style={{ color: '#7c5cbf', fontStyle: 'italic' }}>
                        ✦ 初月無料・すべてのプランで体験できます
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
