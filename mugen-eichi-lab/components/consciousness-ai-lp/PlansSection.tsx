'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.8 },
};

interface PlanFeature {
    text: string;
    detail: string;
}

interface Plan {
    id: string;
    icon: string;
    nameEn: string;
    nameJa: string;
    price: string;
    tagline: string;
    featured: boolean;
    includesFrom?: string;
    features: PlanFeature[];
    bonus: string;
    targetAudience: string[];
    ctaText: string;
    accentColor: string;
}

const plans: Plan[] = [
    {
        id: 'manifest',
        icon: '🌟',
        nameEn: 'Manifest',
        nameJa: 'マニフェスト',
        price: '¥3,480',
        tagline: '意識×AIでビジョンを具現化する',
        featured: false,
        features: [
            {
                text: 'AI実践セミナー（月2回、各90分、録画あり）',
                detail: '最新AIツールの実演、江藤の実践デモ',
            },
            {
                text: '意識ワーク（月1回、せいやによるバックアップ）',
                detail: '自分の内側を整え、制限を手放す実践の時間',
            },
            {
                text: 'AI実践共有動画（週1回、月4本）',
                detail: '最新AI実践、システム開発の進捗共有',
            },
            { text: '会員専用Discord参加', detail: 'メンバー同士の交流、実践事例の共有、せいやからのリアルタイム発信' },
        ],
        bonus: '初月無料',
        targetAudience: [
            '意識×AIの両方を実践したい',
            '自分のビジョンを、AIで軽やかに具現化したい',
            '意識のワークで自分の内側も整えたい',
            'まず気軽にコミュニティに参加してみたい',
        ],
        ctaText: 'マニフェストプランで始める（初月無料）',
        accentColor: '#c9a84c',
    },
    {
        id: 'accelerate',
        icon: '🚀',
        nameEn: 'Accelerate',
        nameJa: 'アクセラレート',
        price: '¥6,800',
        tagline: 'AI自動化・自律化チームを構築し、ビジネスで実践する',
        featured: true,
        includesFrom: 'マニフェストプラン全内容',
        features: [
            {
                text: 'AI自動化システム構築サポート（少人数Zoom）',
                detail: '自分専用のAIワークフロー・自律化チームを一緒に設計・構築',
            },
            {
                text: 'せいやへの直接チャット質問OK（専用Discord）',
                detail: 'テキストベースでせいやに直接質問、実践の悩みをリアルタイム解消',
            },
            {
                text: '最新AIツールの割引提供',
                detail: 'オリジナルツールを会員価格で（30〜50% OFF）',
            },
        ],
        bonus: '初月無料',
        targetAudience: [
            'AIで業務を自動化・自律化したい',
            '自分専用のAIチームを構築したい',
            'ビジネスでAIを実用的に使いこなしたい',
        ],
        ctaText: 'アクセラレートプランで始める（初月無料）',
        accentColor: '#7c5cbf',
    },
    {
        id: 'infinite',
        icon: '♾️',
        nameEn: 'Infinite',
        nameJa: 'インフィニット',
        price: '¥19,800',
        tagline: '無限の可能性を生きる最高峰プラン',
        featured: false,
        includesFrom: 'アクセラレートプラン全内容',
        features: [
            {
                text: '個別コンサル（月1回、60分、Zoom）',
                detail: 'AI/意識のシフト/ビジネス等、何でもOK',
            },
            {
                text: '最新システムの優遇提供',
                detail: '開発AIツールを無料 or 最優遇特別割引（50%以上OFF）',
            },
            {
                text: 'システム開発の実演公開（月1回）',
                detail: 'VoiSlide Movie等の開発プロセスをリアルタイム公開',
            },
            {
                text: 'リアルイベント優先案内・割引',
                detail: 'リアルイベント・交流会の案内',
            },
        ],
        bonus: '初月無料',
        targetAudience: [
            '江藤と最も近い距離で意識×AIを実践したい',
            '個別コンサルで深くシフトしたい',
            '最新システムを無料or大幅割引で使いたい',
        ],
        ctaText: 'インフィニットプランで始める（初月無料）',
        accentColor: '#1a1a3e',
    },
];

export default function PlansSection() {
    return (
        <section id="plans" className="relative py-24 sm:py-32">
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-1/4 left-0 w-72 h-72 rounded-full animate-breath-pulse"
                    style={{ background: 'radial-gradient(circle, rgba(124,92,191,0.04) 0%, transparent 70%)' }}
                />
                <div
                    className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full animate-subtle-glow"
                    style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)' }}
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Section heading */}
                <motion.div {...fadeInUp} className="text-center mb-16">
                    <p className="text-sm tracking-[0.2em] mb-4" style={{ color: '#c9a84c' }}>
                        PLANS
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
                        あなたに合ったプランを選んでください
                    </h2>
                    <p className="text-base sm:text-lg" style={{ color: '#4a4a6a' }}>
                        3つのプランで、制限を手放し、最高のビジョンを生きる
                    </p>
                    <div className="section-divider mt-8" />
                </motion.div>

                {/* Plan cards grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: idx * 0.15 }}
                            className="relative rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl"
                            style={{
                                background: plan.featured
                                    ? 'linear-gradient(180deg, rgba(124,92,191,0.03) 0%, rgba(255,255,255,1) 30%)'
                                    : '#fff',
                                border: plan.featured
                                    ? '2px solid rgba(124,92,191,0.2)'
                                    : '1px solid rgba(0,0,0,0.06)',
                                boxShadow: plan.featured
                                    ? '0 8px 40px rgba(124,92,191,0.1)'
                                    : '0 2px 20px rgba(0,0,0,0.04)',
                            }}
                        >
                            {/* Featured badge */}
                            {plan.featured && (
                                <div
                                    className="absolute top-0 left-0 right-0 py-2 text-center text-xs font-medium tracking-widest text-white"
                                    style={{ background: 'linear-gradient(90deg, #7c5cbf, #c9a84c)' }}
                                >
                                    RECOMMENDED
                                </div>
                            )}

                            <div className={`p-7 sm:p-8 ${plan.featured ? 'pt-12' : ''}`}>
                                {/* Plan header */}
                                <div className="text-center mb-6">
                                    <span className="text-3xl">{plan.icon}</span>
                                    <h3
                                        className="text-xl mt-3 mb-1"
                                        style={{
                                            fontFamily: '"Noto Serif JP", serif',
                                            fontWeight: 600,
                                            color: '#1a1a3e',
                                        }}
                                    >
                                        {plan.nameJa}
                                        <span className="text-sm font-normal ml-1" style={{ color: '#9a9ab0' }}>
                                            ({plan.nameEn})
                                        </span>
                                    </h3>
                                    <p className="text-sm mb-4" style={{ color: '#6a6a8a' }}>
                                        {plan.tagline}
                                    </p>
                                    <div className="flex items-baseline justify-center gap-1">
                                        <span
                                            className="text-3xl sm:text-4xl font-bold"
                                            style={{ color: plan.accentColor }}
                                        >
                                            {plan.price}
                                        </span>
                                        <span className="text-sm" style={{ color: '#9a9ab0' }}>
                                            /月（初月無料）
                                        </span>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div
                                    className="w-full h-px mb-6"
                                    style={{ background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent)' }}
                                />

                                {/* Includes from */}
                                {plan.includesFrom && (
                                    <div
                                        className="mb-4 px-3 py-2 rounded-lg text-xs text-center"
                                        style={{
                                            background: 'rgba(124,92,191,0.04)',
                                            color: '#7c5cbf',
                                            border: '1px solid rgba(124,92,191,0.1)',
                                        }}
                                    >
                                        ✅ {plan.includesFrom} +
                                    </div>
                                )}

                                {/* Feature list */}
                                <div className="space-y-4 mb-6">
                                    {plan.features.map((feature, i) => (
                                        <div key={i} className="flex gap-3">
                                            <div
                                                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs"
                                                style={{ background: `${plan.accentColor}15`, color: plan.accentColor }}
                                            >
                                                ✓
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium" style={{ color: '#1a1a3e' }}>
                                                    {feature.text}
                                                </p>
                                                <p className="text-xs mt-0.5" style={{ color: '#9a9ab0' }}>
                                                    {feature.detail}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Bonus */}
                                <div
                                    className="mb-6 px-4 py-3 rounded-xl text-center"
                                    style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.15)' }}
                                >
                                    <span className="text-xs font-medium" style={{ color: '#c9a84c' }}>
                                        🎁 初回特典: {plan.bonus}
                                    </span>
                                </div>

                                {/* Target audience */}
                                <div className="mb-6">
                                    <p className="text-xs font-medium mb-2" style={{ color: '#9a9ab0' }}>
                                        こんな人におすすめ:
                                    </p>
                                    <ul className="space-y-1.5">
                                        {plan.targetAudience.map((item, i) => (
                                            <li
                                                key={i}
                                                className="text-xs flex gap-2 items-start"
                                                style={{ color: '#5a5a7a' }}
                                            >
                                                <span style={{ color: plan.accentColor }}>・</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* CTA */}
                                <a
                                    href="#"
                                    className="block w-full py-3.5 rounded-full text-center text-sm font-medium
                                               transition-all duration-500 hover:scale-[1.02] hover:shadow-lg"
                                    style={{
                                        background: plan.featured
                                            ? `linear-gradient(135deg, ${plan.accentColor}, ${plan.accentColor}cc)`
                                            : 'transparent',
                                        color: plan.featured ? '#fff' : plan.accentColor,
                                        border: plan.featured ? 'none' : `1.5px solid ${plan.accentColor}40`,
                                        boxShadow: plan.featured
                                            ? `0 4px 20px ${plan.accentColor}30`
                                            : 'none',
                                    }}
                                >
                                    👉 {plan.ctaText}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
