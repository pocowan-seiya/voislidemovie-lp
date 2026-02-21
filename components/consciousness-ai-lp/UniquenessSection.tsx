'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.8 },
};

interface UniquenessItem {
    id: number;
    icon: string;
    label: string;
    title: string;
    description: string[];
    examples: { title: string; detail: string }[];
    sessionInfo: string;
}

const uniquenessData: UniquenessItem[] = [
    {
        id: 1,
        icon: '🌿',
        label: '独自性 01',
        title: '手放しのワークで、見えない制限の先にいく',
        description: [
            '自分が全て映し出している。',
            'その本来の場所に立ち、自分の意識を変容させていく。',
            '自分が捉えきれない、じぶんがじぶんにかけている制限をいとも簡単に手放していく。',
            'じぶんの分離の線を消していき、本当の自分の意識に復活していく。',
            '関野あやこさんが第一人者としてダイレクトに復活するツールとして生み出した驚くほどの簡単さとシンプルさを使っていきます。',
            '制限を手放したその先にある、あなたの無限の叡智を使って、ビジョンを生きていく。',
            'それが、手放しのワークです。',
        ],
        examples: [
            {
                title: '現実に揺れるあり方',
                detail: '現実が良いと優越感・特別感を感じ、良くないとがっかり → この振り幅を手放し、現実に揺れない自分軸を取り戻す',
            },
            {
                title: '自分の中でよく繰り返すパターン',
                detail: '「自分はよくこんな展開になることが多い」→ パターンを生み出している周波数を手放す',
            },
            {
                title: 'ビジョンを見ることを無意識に止めている制限',
                detail: '「こんなこと、自分には無理」→ ビジョンを見ることを許可していく',
            },
            {
                title: 'ビジョンに動こうとしたときに出てくる重さ',
                detail: '体に出てくる違和感、恐怖、不安 → 動くことを止めている制限を手放す',
            },
            {
                title: '「自分はこんな人間だ」という信念',
                detail: '「自分はこれだけはできない」→ 自分に貼り付けたレッテルを手放す',
            },
        ],
        sessionInfo: '月2回の手放しのワークセッション（各90分、録画あり）で実践。',
    },
    {
        id: 2,
        icon: '⚡',
        label: '独自性 02',
        title: 'AIを自分の叡智として使い、ビジョンを軽やかに具現化する',
        description: [
            '意識をシフトし、新しい意識領域で見える1番のビジョンに生きていく。',
            'そこで見えてきたひらめき、サイン、アイデア。それを自分を生きるために使っていく。',
            'そのバックアップに、AIを思う存分使うことを許可していく。',
            '江藤が実践するAI情報やAIツールを使い、無限の可能性を、形にしていきます。',
            'AIが自律性を持つ中、時間という概念を超えていく。AIが勝手に動いてくれるような時代になっています。',
            '軽やかに、これまでの常識や概念を超えてビジョンを起こしていってしまう。',
            'それが、AI実践です。',
        ],
        examples: [
            {
                title: '最新AIツールを使った実用的なAI活用',
                detail: 'Claude、ChatGPT、Gemini、動画生成AI、自律型AIエージェント → 江藤が実際に使っているツールの実演・解説',
            },
            {
                title: 'ビジョンを具体的な形にしていく実践',
                detail: '「こんなビジョンがある」→ AIで形にする流れを実演',
            },
            {
                title: '自律的なAIシステムの構築',
                detail: 'SNS投稿、メール返信、リサーチを自動化 → AIが勝手に動いてくれる仕組みを作る',
            },
            {
                title: '普段のワークフローをAIで自動化',
                detail: 'ルーティンワークをAIに任せ、自分の時間をビジョンに集中できる',
            },
            {
                title: '最新AIトレンドのキャッチアップ',
                detail: '「これは使える！」をリアルタイムで共有',
            },
        ],
        sessionInfo: '月1〜2回のAI実践セミナー（各90分、録画あり）で実践。質問中心のワークショップ形式。',
    },
    {
        id: 3,
        icon: '♾️',
        label: '独自性 03',
        title: '精神次元 × 物理次元を統合する唯一無二のコミュニティ',
        description: [
            '僕たちはこれまで、精神次元と物理次元を分けてきました。',
            'でも、もうそんな時代は終わります。なぜなら、もともと1つだからです。',
            'それが、本当の自分の意識で、地球を生きるということです。',
            '精神次元の最先端 = 手放し。物理次元の最先端 = AI。',
            'その両方を、自分の復活に使います。',
            '本当の自分の、とてつもなく豊かな制限のない意識で、無限の叡智で、この地球を生きる。',
            '1番のワクワクを実現する自分になっていく。',
            'それが、理想論ではなくリアリティを持って、起こしていく。',
            '自分の本来の力を、もう発揮していい。このコミュニティは、そういう場所です。',
        ],
        examples: [
            {
                title: '手放しのワーク × AI実践を同時に行う',
                detail: '意識をシフトさせながら、AIで具現化 → 圧倒的な速度で復活していく',
            },
            {
                title: '精神的なシフトと物理的なシフトを同時に',
                detail: '内側が変わる × 外側が変わる → もともと1つだったものを統合して生きる',
            },
            {
                title: '会員同士の実践事例の共有',
                detail: 'Discord内で手放しの体験談、AI活用事例を共有 → 仲間の実践があなたを加速させる',
            },
            {
                title: 'リアルイベント・交流会での統合体験',
                detail: 'オンラインだけでなく、リアルでも繋がる → 1番のワクワクを生きる仲間と統合を体験',
            },
        ],
        sessionInfo: '',
    },
];

export default function UniquenessSection() {
    const [activeTab, setActiveTab] = useState(0);
    const active = uniquenessData[activeTab];

    return (
        <section className="relative py-24 sm:py-32">
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute bottom-0 left-0 w-full h-px"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(124,92,191,0.1), transparent)' }}
                />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6">
                {/* Section heading */}
                <motion.div {...fadeInUp} className="text-center mb-16">
                    <p className="text-sm tracking-[0.2em] mb-4" style={{ color: '#c9a84c' }}>
                        UNIQUENESS
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
                        なぜ、このコミュニティなのか？
                    </h2>
                    <p className="text-lg" style={{ color: '#4a4a6a' }}>
                        唯一無二の3つの独自性
                    </p>
                    <div className="section-divider mt-8" />
                </motion.div>

                {/* Tab instruction hint */}
                <motion.p
                    {...fadeInUp}
                    className="text-center text-xs mb-4"
                    style={{ color: '#9a9ab0', letterSpacing: '0.05em' }}
                >
                    ▼ タップして切り替え
                </motion.p>

                {/* Tab buttons */}
                <motion.div {...fadeInUp} className="flex flex-col sm:flex-row gap-0 mb-12 justify-center">
                    {uniquenessData.map((item, idx) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(idx)}
                            className="relative flex items-center gap-3 px-6 sm:px-8 py-5 text-left transition-all duration-400 cursor-pointer group"
                            style={{
                                background: activeTab === idx
                                    ? 'linear-gradient(180deg, rgba(124,92,191,0.06), rgba(124,92,191,0.02))'
                                    : 'transparent',
                                borderBottom: activeTab === idx
                                    ? '3px solid #7c5cbf'
                                    : '3px solid rgba(0,0,0,0.06)',
                            }}
                        >
                            <span className="text-2xl">{item.icon}</span>
                            <div>
                                <span
                                    className="text-xs tracking-widest font-medium"
                                    style={{ color: activeTab === idx ? '#7c5cbf' : '#c9a84c' }}
                                >
                                    {item.label}
                                </span>
                                <p
                                    className="text-sm mt-1 font-medium leading-snug max-w-[220px]"
                                    style={{ color: activeTab === idx ? '#1a1a3e' : '#8a8aa0' }}
                                >
                                    {item.title.length > 24 ? item.title.substring(0, 24) + '…' : item.title}
                                </p>
                            </div>
                            {/* Active indicator dot (mobile) */}
                            {activeTab === idx && (
                                <motion.div
                                    layoutId="activeTabDot"
                                    className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full sm:hidden"
                                    style={{ background: '#7c5cbf' }}
                                />
                            )}
                        </button>
                    ))}
                </motion.div>

                {/* Tab content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl mx-auto"
                    >
                        {/* Title */}
                        <h3
                            className="text-xl sm:text-2xl mb-8 text-center leading-relaxed"
                            style={{
                                fontFamily: '"Noto Serif JP", serif',
                                fontWeight: 600,
                                color: '#1a1a3e',
                            }}
                        >
                            {active.title}
                        </h3>

                        {/* Description */}
                        <div className="mb-10 space-y-3">
                            {active.description.map((line, i) => (
                                <p
                                    key={i}
                                    className="text-base leading-loose"
                                    style={{ color: '#3a3a5a', letterSpacing: '0.02em' }}
                                >
                                    {line}
                                </p>
                            ))}
                        </div>

                        {/* Examples */}
                        <div
                            className="rounded-2xl p-6 sm:p-8 mb-6"
                            style={{ background: 'rgba(250,250,252,1)', border: '1px solid rgba(124,92,191,0.08)' }}
                        >
                            <p className="text-sm font-medium mb-5" style={{ color: '#7c5cbf', letterSpacing: '0.1em' }}>
                                具体例
                            </p>
                            <div className="space-y-5">
                                {active.examples.map((ex, i) => (
                                    <div key={i} className="flex gap-3">
                                        <div
                                            className="w-5 h-5 mt-1 rounded-md flex items-center justify-center text-xs flex-shrink-0"
                                            style={{ background: 'rgba(124,92,191,0.1)', color: '#7c5cbf' }}
                                        >
                                            ✓
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium mb-1" style={{ color: '#1a1a3e' }}>
                                                {ex.title}
                                            </p>
                                            <p className="text-sm leading-relaxed" style={{ color: '#6a6a8a' }}>
                                                {ex.detail}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Session info */}
                        {active.sessionInfo && (
                            <p className="text-center text-sm" style={{ color: '#9a9ab0' }}>
                                {active.sessionInfo}
                            </p>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
