'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.8 },
};

export default function TwoAxesSection() {
    return (
        <section className="relative py-24 sm:py-32" style={{ background: '#fafafa' }}>
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-0 w-full h-px"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(124,92,191,0.1), transparent)' }}
                />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                {/* Section heading */}
                <motion.div {...fadeInUp} className="text-center mb-16">
                    <p className="text-sm tracking-[0.2em] mb-4" style={{ color: '#c9a84c' }}>
                        TWO AXES
                    </p>
                    <h2
                        className="text-2xl sm:text-3xl leading-relaxed mb-3"
                        style={{
                            fontFamily: '"Noto Serif JP", serif',
                            fontWeight: 600,
                            color: '#1a1a3e',
                            letterSpacing: '0.04em',
                        }}
                    >
                        無限叡智ラボの2つの軸
                    </h2>
                    <p className="text-base sm:text-lg" style={{ color: '#4a4a6a' }}>
                        意識のシフト × AIでの具現化　——　この両輪で、ビジョンが現実になる
                    </p>
                    <div className="section-divider mt-8" />
                </motion.div>

                {/* Two axes cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
                    {/* Axis 1: 意識のシフト */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="rounded-3xl p-7 sm:p-9 transition-all duration-300 hover:shadow-lg"
                        style={{
                            background: 'linear-gradient(180deg, rgba(124,92,191,0.04) 0%, #fff 40%)',
                            border: '1px solid rgba(124,92,191,0.12)',
                        }}
                    >
                        <div className="text-center mb-6">
                            <span className="text-4xl">🌿</span>
                            <h3
                                className="text-lg sm:text-xl mt-3 mb-2"
                                style={{
                                    fontFamily: '"Noto Serif JP", serif',
                                    fontWeight: 600,
                                    color: '#1a1a3e',
                                }}
                            >
                                軸1：意識のシフト
                            </h3>
                            <div
                                className="w-12 h-0.5 mx-auto rounded-full"
                                style={{ background: 'linear-gradient(90deg, #7c5cbf, #7c5cbf40)' }}
                            />
                        </div>
                        <div className="space-y-3 text-sm leading-loose" style={{ color: '#3a3a5a' }}>
                            <p>
                                無限の可能性の意識に復活し、
                                <br />
                                「できない」「やれない」という制限を手放す。
                            </p>
                            <p>
                                関野あやこさんの
                                <span style={{ fontWeight: 500, color: '#7c5cbf' }}>手放しのメソッド</span>
                                をベースに、
                                <br />
                                コミュニティ内で意識のワークを実践していきます。
                            </p>
                        </div>
                    </motion.div>

                    {/* Axis 2: AIでの具現化 */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="rounded-3xl p-7 sm:p-9 transition-all duration-300 hover:shadow-lg"
                        style={{
                            background: 'linear-gradient(180deg, rgba(201,168,76,0.04) 0%, #fff 40%)',
                            border: '1px solid rgba(201,168,76,0.12)',
                        }}
                    >
                        <div className="text-center mb-6">
                            <span className="text-4xl">⚡</span>
                            <h3
                                className="text-lg sm:text-xl mt-3 mb-2"
                                style={{
                                    fontFamily: '"Noto Serif JP", serif',
                                    fontWeight: 600,
                                    color: '#1a1a3e',
                                }}
                            >
                                軸2：AIでの具現化
                            </h3>
                            <div
                                className="w-12 h-0.5 mx-auto rounded-full"
                                style={{ background: 'linear-gradient(90deg, #c9a84c, #c9a84c40)' }}
                            />
                        </div>
                        <div className="space-y-3 text-sm leading-loose" style={{ color: '#3a3a5a' }}>
                            <p>
                                その叡智を、最新AIテクノロジーで
                                <br />
                                軽やかに形にしていく。
                            </p>
                            <p>
                                江藤が実践する
                                <span style={{ fontWeight: 500, color: '#c9a84c' }}>AI活用の最前線</span>
                                を、
                                <br />
                                セミナーと動画で実践していきます。
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom message */}
                <motion.div
                    {...fadeInUp}
                    className="text-center rounded-2xl p-6 sm:p-8"
                    style={{
                        background: 'linear-gradient(135deg, rgba(124,92,191,0.04), rgba(201,168,76,0.04))',
                        border: '1px solid rgba(124,92,191,0.08)',
                    }}
                >
                    <p
                        className="text-base sm:text-lg leading-loose mb-4"
                        style={{
                            fontFamily: '"Noto Serif JP", serif',
                            fontWeight: 500,
                            color: '#1a1a3e',
                        }}
                    >
                        この2つを同時に進めることで、
                        <br />
                        最も早く、最も軽やかに、
                        <br />
                        あなたのビジョンが現実になります。
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
