'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.8 },
};

interface Workshop {
    date: string;
    day: string;
    time: string;
    title: string;
    description: string;
    tag?: string;
    tagColor?: string;
    confirmed: boolean;
}

const workshops: Workshop[] = [
    {
        date: '3/14',
        day: '土',
        time: '15:00〜17:00',
        title: 'Antigravity × Obsidian — AI × 第2の脳のセットアップ',
        description:
            '江藤が毎日使っている最先端のAI環境を、一緒にセットアップします。Antigravity（AIコーディングエージェント）と Obsidian（第2の脳）を連携させ、自分専用のAI環境がその場で完成します。AIの使い方が根本的に変わる、最初の一歩です。',
        tag: '初回ワークショップ',
        tagColor: '#c9a84c',
        confirmed: true,
    },
    {
        date: '3/28',
        day: '土',
        time: '15:00〜17:00',
        title: 'Claude Cowork — 自律型AIエージェントを導入しよう',
        description:
            'Claudeの自律的に動いてくれるエージェント機能を、実際に導入・セットアップしていくコワーキングセッション。スケジュールタスクやルーティンタスクの自動化も可能で、手軽に導入できるのが魅力です。江藤がリアルタイムでサポートしながら、参加者全員で「自分のビジョン × 自律型AI」を実践します。',
        tag: '第2回ワークショップ',
        tagColor: '#c9a84c',
        confirmed: true,
    },
    {
        date: '4月',
        day: '',
        time: '日程調整中',
        title: '意識のシフト × AI実践ワーク',
        description:
            '意識のシフトとAIの活用を同時に実践するワークショップ。内容は参加メンバーの進捗やニーズに合わせて設計します。詳細は3月中にお届けします。',
        tag: 'Coming Soon',
        tagColor: '#7c5cbf',
        confirmed: false,
    },
];

export default function UpcomingWorkshopsSection() {
    return (
        <section className="relative py-20 sm:py-28" style={{ background: '#fff' }}>
            {/* Top border line */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-0 w-full h-px"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(124,92,191,0.12), transparent)' }}
                />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto px-6">
                {/* Section heading */}
                <motion.div {...fadeInUp} className="text-center mb-14">
                    <p className="text-sm tracking-[0.2em] mb-4" style={{ color: '#c9a84c' }}>
                        UPCOMING WORKSHOPS
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
                        直近のワークショップ開催予定
                    </h2>
                    <p className="text-base sm:text-lg" style={{ color: '#4a4a6a' }}>
                        初月無料ですべてのワークショップに参加できます
                    </p>
                    <div className="section-divider mt-8" />
                </motion.div>

                {/* Workshop list */}
                <div className="space-y-6">
                    {workshops.map((ws, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: i * 0.12 }}
                            className="relative rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-lg"
                            style={{
                                background: ws.confirmed
                                    ? 'linear-gradient(135deg, rgba(201,168,76,0.04) 0%, #fff 60%)'
                                    : 'linear-gradient(135deg, rgba(124,92,191,0.03) 0%, #fff 60%)',
                                border: ws.confirmed
                                    ? '1px solid rgba(201,168,76,0.2)'
                                    : '1px solid rgba(124,92,191,0.1)',
                            }}
                        >
                            {/* Tag */}
                            {ws.tag && (
                                <span
                                    className="inline-block text-xs tracking-wider px-3 py-1 rounded-full mb-4"
                                    style={{
                                        background: `${ws.tagColor}12`,
                                        color: ws.tagColor,
                                        border: `1px solid ${ws.tagColor}30`,
                                        fontWeight: 500,
                                    }}
                                >
                                    {ws.tag}
                                </span>
                            )}

                            {/* Date + Time */}
                            <div className="flex flex-wrap items-baseline gap-2 mb-3">
                                <span
                                    className="text-2xl sm:text-3xl"
                                    style={{
                                        fontFamily: '"Noto Serif JP", serif',
                                        fontWeight: 700,
                                        color: '#1a1a3e',
                                    }}
                                >
                                    {ws.date}
                                </span>
                                {ws.day && (
                                    <span
                                        className="text-base"
                                        style={{ color: '#4a4a6a', fontWeight: 500 }}
                                    >
                                        ({ws.day})
                                    </span>
                                )}
                                <span
                                    className="text-sm"
                                    style={{ color: '#7c5cbf', fontWeight: 500 }}
                                >
                                    {ws.time}
                                </span>
                            </div>

                            {/* Title */}
                            <h3
                                className="text-base sm:text-lg mb-3"
                                style={{
                                    fontFamily: '"Noto Serif JP", serif',
                                    fontWeight: 600,
                                    color: '#1a1a3e',
                                }}
                            >
                                {ws.title}
                            </h3>

                            {/* Description */}
                            <p
                                className="text-sm leading-[2] tracking-wide"
                                style={{ color: '#4a4a6a' }}
                            >
                                {ws.description}
                            </p>

                            {/* Archive note */}
                            {ws.confirmed && (
                                <p className="text-xs mt-3" style={{ color: '#7c5cbf', fontStyle: 'italic' }}>
                                    ※ アーカイブ参加も可能です
                                </p>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Bottom note */}
                <motion.div {...fadeInUp} className="text-center mt-12">
                    <div
                        className="inline-block rounded-full px-6 py-3"
                        style={{
                            background: 'linear-gradient(135deg, rgba(124,92,191,0.06), rgba(201,168,76,0.06))',
                            border: '1px solid rgba(124,92,191,0.1)',
                        }}
                    >
                        <p className="text-sm" style={{ color: '#1a1a3e', fontWeight: 500 }}>
                            ✦ すべてのワークショップが<span style={{ color: '#c9a84c', fontWeight: 700 }}>初月無料</span>で参加できます
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
