'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.8 },
};

interface PlanDetail {
    id: string;
    icon: string;
    nameJa: string;
    nameEn: string;
    tagline: string;
    price: string;
    accentColor: string;
    description: string[];
    highlights: { icon: string; title: string; detail: string }[];
    whoIsItFor: string[];
}

const planDetails: PlanDetail[] = [
    {
        id: 'awaken',
        icon: '🌅',
        nameJa: 'アウェイクンプラン',
        nameEn: 'Awaken',
        tagline: '無限の叡智に目醒める入口',
        price: '¥2,980/月',
        accentColor: '#c9a84c',
        description: [
            '「まず、やってみたい」——そんなあなたにぴったりのプランです。',
            '手放しのワークで見えない制限を手放し、自分の無限の叡智に触れていく。そして、AIを使ってビジョンを形にする基本を学ぶ。',
            'コミュニティの全てのベースとなるこのプランには、月2回の手放しのワークセッション、月1回のAI実践セミナー、週1回の動画配信、会員限定コラム、そしてDiscordコミュニティへのアクセスが含まれます。',
            'まずは自分の叡智に目醒め、AIとの共創の第一歩を踏み出してみてください。',
        ],
        highlights: [
            {
                icon: '🌿',
                title: '手放しのワークセッション（月2回）',
                detail: '各90分、録画あり。制限を手放し、無限の叡智を復活させていく実践の時間です。',
            },
            {
                icon: '⚡',
                title: 'AI実践セミナー（月1回）',
                detail: '各90分、録画あり。最新AIツールの実演と、江藤の実践デモをリアルタイムで体験。',
            },
            {
                icon: '📹',
                title: 'AI実践共有動画（週1回）',
                detail: '最新のAI活用実践やシステム開発の進捗を、短い動画で毎週シェア。',
            },
            {
                icon: '✍️',
                title: '会員限定コラム（月2本）',
                detail: '意識のシフトの記録や実践ログを、会員だけに向けて配信。',
            },
            {
                icon: '💬',
                title: '会員専用Discord',
                detail: 'メンバー同士の交流、実践事例の共有で、仲間と一緒に加速していく場。',
            },
        ],
        whoIsItFor: [
            'じぶんの無限の叡智を使いたい方',
            '手放しのワークを体験してみたい方',
            'AIを使ったビジョン具現化に興味がある方',
            'まず気軽にコミュニティに参加してみたい方',
        ],
    },
    {
        id: 'manifest',
        icon: '🌟',
        nameJa: 'マニフェストプラン',
        nameEn: 'Manifest',
        tagline: '最高のビジョンを具現化する実践の場',
        price: '¥6,800/月',
        accentColor: '#7c5cbf',
        description: [
            '「もっと深く実践したい。もっとAIを使いこなしたい」——本気で動きたいあなたへ。',
            'アウェイクンプランの全てに加え、AI実践セミナーが月2回に増量。質問中心の実践的なセッションで、わからないことをその場で解決できます。',
            'さらに、江藤が開発するオリジナルAIツールを会員価格（30〜50% OFF）で利用可能。マニフェストプラン専用Discordでは、江藤へ直接チャットで質問もできます。',
            'ビジョンを「思い描く」から「具現化する」へ。このプランがその架け橋になります。',
        ],
        highlights: [
            {
                icon: '⚡',
                title: 'AI実践セミナー月2回',
                detail: '質問中心のワークショップ形式。「これ、どうやるの？」をその場で解決。',
            },
            {
                icon: '🔧',
                title: '最新AIツールの割引提供',
                detail: 'オリジナル開発ツールを30〜50% OFFの会員価格で利用可能。',
            },
            {
                icon: '💬',
                title: '専用Discord（江藤へ直接質問OK）',
                detail: 'テキストベースで江藤に直接質問。実践の悩みをリアルタイムで解消。',
            },
        ],
        whoIsItFor: [
            'AI実践をさらに深めたい方',
            '最新AIツールをいち早く使いたい方',
            '江藤に直接質問しながら実践したい方',
            'ビジョンの具現化を加速させたい方',
        ],
    },
    {
        id: 'infinite',
        icon: '♾️',
        nameJa: 'インフィニットプラン',
        nameEn: 'Infinite',
        tagline: '無限の可能性を生きる最高峰プラン',
        price: '¥19,800/月',
        accentColor: '#1a1a3e',
        description: [
            '「自分の可能性を、最大限に解放したい」——制限なく生きたいあなたへ。',
            'マニフェストプランの全てに加え、月1回60分の個別コンサルで、AI活用、意識のシフト、ビジネスなど何でも深堀りできます。',
            '江藤が開発する最新AIシステムは無料〜最優遇価格（50%以上OFF）で提供。さらに、VoiSlide Movie等のシステム開発プロセスをリアルタイムで公開。リアルイベントへの優先案内・割引もあり。',
            '江藤と最も近い距離で、無限の可能性を現実にしていくプランです。',
        ],
        highlights: [
            {
                icon: '🎯',
                title: '個別コンサル（月1回、60分）',
                detail: 'Zoom形式。AI/意識/ビジネスなど、あなたのテーマに合わせて何でも相談OK。',
            },
            {
                icon: '🔑',
                title: '最新システムの優遇提供',
                detail: '開発AIツールを無料 or 50%以上OFFの最優遇価格で利用可能。',
            },
            {
                icon: '🖥️',
                title: 'システム開発の実演公開（月1回）',
                detail: 'VoiSlide Movie等の開発プロセスをリアルタイムで体験。AI開発の最前線を目撃。',
            },
            {
                icon: '🎪',
                title: 'リアルイベント優先案内・割引',
                detail: 'オフラインでの交流会やイベントへの優先参加・特別価格でのご案内。',
            },
        ],
        whoIsItFor: [
            '江藤と最も近い距離で実践したい方',
            '個別コンサルで深くシフトしたい方',
            '最新AIシステムをいち早く最優遇で使いたい方',
            '開発プロセスに興味がある方',
        ],
    },
];

export default function PlanDetailSection() {
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
                <motion.div {...fadeInUp} className="text-center mb-20">
                    <p className="text-sm tracking-[0.2em] mb-4" style={{ color: '#c9a84c' }}>
                        PLAN DETAILS
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
                        各プランの詳細
                    </h2>
                    <p className="text-base sm:text-lg" style={{ color: '#4a4a6a' }}>
                        あなたのビジョンに合わせた3つのプラン
                    </p>
                    <div className="section-divider mt-8" />
                </motion.div>

                {/* Plan detail blocks */}
                <div className="space-y-20">
                    {planDetails.map((plan, planIdx) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Plan header */}
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-4xl">{plan.icon}</span>
                                <div>
                                    <h3
                                        className="text-xl sm:text-2xl"
                                        style={{
                                            fontFamily: '"Noto Serif JP", serif',
                                            fontWeight: 600,
                                            color: '#1a1a3e',
                                        }}
                                    >
                                        {plan.nameJa}
                                        <span
                                            className="text-sm font-normal ml-2"
                                            style={{ color: '#9a9ab0' }}
                                        >
                                            ({plan.nameEn})
                                        </span>
                                    </h3>
                                    <p className="text-sm mt-1" style={{ color: plan.accentColor }}>
                                        {plan.tagline}
                                    </p>
                                </div>
                                <div className="ml-auto hidden sm:block">
                                    <span
                                        className="text-xl font-bold"
                                        style={{ color: plan.accentColor }}
                                    >
                                        {plan.price}
                                    </span>
                                    <span className="text-xs ml-1" style={{ color: '#9a9ab0' }}>
                                        （初月無料）
                                    </span>
                                </div>
                            </div>

                            {/* Mobile price */}
                            <div className="sm:hidden mb-4">
                                <span className="text-xl font-bold" style={{ color: plan.accentColor }}>
                                    {plan.price}
                                </span>
                                <span className="text-xs ml-1" style={{ color: '#9a9ab0' }}>
                                    （初月無料）
                                </span>
                            </div>

                            {/* Accent line */}
                            <div
                                className="w-full h-0.5 mb-8 rounded-full"
                                style={{
                                    background: `linear-gradient(90deg, ${plan.accentColor}, ${plan.accentColor}40, transparent)`,
                                }}
                            />

                            {/* Description */}
                            <div className="mb-10 space-y-3">
                                {plan.description.map((line, i) => (
                                    <p
                                        key={i}
                                        className="text-base leading-loose"
                                        style={{ color: '#3a3a5a', letterSpacing: '0.02em' }}
                                    >
                                        {line}
                                    </p>
                                ))}
                            </div>

                            {/* Highlights */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                {plan.highlights.map((h, i) => (
                                    <div
                                        key={i}
                                        className="rounded-2xl p-5 transition-all duration-300 hover:shadow-md"
                                        style={{
                                            background: '#fff',
                                            border: `1px solid ${plan.accentColor}18`,
                                        }}
                                    >
                                        <div className="flex items-start gap-3">
                                            <span className="text-xl flex-shrink-0">{h.icon}</span>
                                            <div>
                                                <p
                                                    className="text-sm font-medium mb-1"
                                                    style={{ color: '#1a1a3e' }}
                                                >
                                                    {h.title}
                                                </p>
                                                <p className="text-xs leading-relaxed" style={{ color: '#6a6a8a' }}>
                                                    {h.detail}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Who is it for */}
                            <div
                                className="rounded-2xl p-6"
                                style={{ background: `${plan.accentColor}08`, border: `1px solid ${plan.accentColor}12` }}
                            >
                                <p
                                    className="text-xs font-medium mb-3 tracking-widest"
                                    style={{ color: plan.accentColor }}
                                >
                                    こんな人に最適
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {plan.whoIsItFor.map((item, i) => (
                                        <p key={i} className="text-sm flex items-start gap-2" style={{ color: '#4a4a6a' }}>
                                            <span style={{ color: plan.accentColor }}>▸</span>
                                            {item}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            {/* Divider between plans */}
                            {planIdx < planDetails.length - 1 && (
                                <div className="flex items-center justify-center mt-16">
                                    <div className="w-8 h-px" style={{ background: 'rgba(201,168,76,0.3)' }} />
                                    <div className="w-2 h-2 mx-4 rotate-45" style={{ background: 'rgba(124,92,191,0.2)' }} />
                                    <div className="w-8 h-px" style={{ background: 'rgba(201,168,76,0.3)' }} />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
