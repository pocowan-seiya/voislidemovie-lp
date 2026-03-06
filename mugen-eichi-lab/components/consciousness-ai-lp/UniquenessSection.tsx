'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.8 },
};

interface ExampleItem {
    title: string;
    detail: string;
}

interface Category {
    label: string;
    icon: string;
    accentColor: string;
    items: ExampleItem[];
}


const categories: Category[] = [
    {
        label: 'AI',
        icon: '⚡',
        accentColor: '#c9a84c',
        items: [
            {
                title: '最新AIツールを使った実用的なAI活用',
                detail: 'Claude、ChatGPT、Gemini、生成AI、自動ワークフローツール、自律型AIエージェント → 江藤が実際に使っているツールの実演・解説',
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
                detail: '「これは使える！」をリアルタイムで共有・実践',
            },
        ],
    },
    {
        label: '意識のシフト',
        icon: '🌿',
        accentColor: '#7c5cbf',
        items: [
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
                detail: '「こんなこと、自分には無理」「自分はこんなもの」→ 無制限のビジョンを見ることを許可していく',
            },
            {
                title: 'ビジョンに動こうとしたときに出てくる重さ',
                detail: '体に出てくる違和感、恐怖、不安 → 動くことを止めている制限を手放す',
            },
            {
                title: '「自分はこんな人間だ」という信念',
                detail: '「自分はこれだけはできない」「自分はこういう性格だ」→ 自分に貼り付けたラベルを手放す',
            },
        ],
    },
    {
        label: '物理次元 × 精神次元',
        icon: '♾️',
        accentColor: '#1a1a3e',
        items: [
            {
                title: '手放しのワーク × AI実践を同時に行う',
                detail: '意識をシフトさせながら、AIで具現化 → 圧倒的な速度で復活していく',
            },
            {
                title: '精神的なシフトと物理的なシフトを同時に',
                detail: '内側が変わる × 外側が変わる → もともと1つだったものを統合して生きる',
            },
        ],
    },
];

export default function UniquenessSection() {
    return (
        <section className="relative py-24 sm:py-32" style={{ background: '#fafafa' }}>
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(124,92,191,0.04) 0%, transparent 70%)',
                    }}
                />
                <div
                    className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(201,168,76,0.03) 0%, transparent 70%)',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto px-6">
                {/* Section heading */}
                <motion.div {...fadeInUp} className="text-center mb-14">
                    <p
                        className="text-xs tracking-[0.2em] mb-4"
                        style={{ color: '#c9a84c', fontWeight: 500 }}
                    >
                        UNIQUENESS
                    </p>
                    <h2
                        className="text-2xl sm:text-3xl leading-relaxed mb-4"
                        style={{
                            fontFamily: '"Noto Serif JP", serif',
                            fontWeight: 600,
                            color: '#1a1a3e',
                            letterSpacing: '0.04em',
                        }}
                    >
                        コミュニティの独自性
                    </h2>
                    <div
                        className="inline-block rounded-2xl px-8 py-5 mt-2"
                        style={{
                            background: 'linear-gradient(135deg, rgba(124,92,191,0.08), rgba(201,168,76,0.06))',
                            border: '1px solid rgba(124,92,191,0.15)',
                            boxShadow: '0 4px 20px rgba(124,92,191,0.08)',
                        }}
                    >
                        <p
                            className="text-xl sm:text-2xl md:text-3xl leading-[1.6] tracking-wide"
                            style={{
                                fontFamily: '"Noto Serif JP", serif',
                                fontWeight: 700,
                                background: 'linear-gradient(135deg, #7c5cbf, #c9a84c)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            精神次元 × 物理次元を統合する
                            <br />
                            唯一無二のコミュニティ
                        </p>
                    </div>
                    <div className="section-divider mt-8" />
                </motion.div>

                {/* Description — designed blocks */}
                <div className="mb-16 max-w-2xl mx-auto space-y-0">
                    {/* Block 1: 導入 */}
                    <motion.div {...fadeInUp} className="text-center mb-10">
                        <p className="text-sm sm:text-base leading-[2.2] tracking-wide" style={{ color: '#4a4a6a' }}>
                            僕たちはこれまで、精神次元と物理次元を分けてきました。
                        </p>
                        <p className="text-sm sm:text-base leading-[2.2] tracking-wide mt-2" style={{ color: '#4a4a6a' }}>
                            でも、もうそんな時代は終わります。
                            <br />
                            なぜなら、<span style={{ fontWeight: 600, color: '#1a1a3e' }}>もともと1つ</span>だからです。
                        </p>
                        <p className="text-sm sm:text-base leading-[2.2] tracking-wide mt-3" style={{ color: '#4a4a6a' }}>
                            それが、本当の自分の無限の可能性の意識で、
                            <br />
                            物理次元の地球を生きるということです。
                        </p>
                    </motion.div>

                    {/* Divider */}
                    <div className="flex items-center justify-center my-8">
                        <div className="w-10 h-px" style={{ background: 'rgba(201,168,76,0.3)' }} />
                        <div className="w-2 h-2 mx-3 rotate-45 rounded-sm" style={{ background: 'linear-gradient(135deg, #7c5cbf, #c9a84c)' }} />
                        <div className="w-10 h-px" style={{ background: 'rgba(201,168,76,0.3)' }} />
                    </div>

                    {/* Block 2: 最先端の定義 — accent card */}
                    <motion.div
                        {...fadeInUp}
                        className="rounded-2xl px-6 py-6 sm:px-8 sm:py-7 my-8"
                        style={{
                            background: 'linear-gradient(135deg, rgba(124,92,191,0.06) 0%, rgba(201,168,76,0.04) 100%)',
                            borderLeft: '3px solid rgba(124,92,191,0.3)',
                        }}
                    >
                        <p
                            className="text-base sm:text-lg leading-[2] tracking-wide text-center"
                            style={{
                                fontFamily: '"Noto Serif JP", serif',
                                fontWeight: 600,
                                color: '#1a1a3e',
                            }}
                        >
                            精神次元の最先端 =
                            <span style={{ background: 'linear-gradient(135deg, #7c5cbf, #c9a84c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}> 意識のシフト</span>
                            <br />
                            物理次元の最先端 =
                            <span style={{ background: 'linear-gradient(135deg, #c9a84c, #7c5cbf)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}> AI</span>
                        </p>
                    </motion.div>

                    {/* Block 3: ビジョン */}
                    <motion.div {...fadeInUp} className="text-center my-10">
                        <p className="text-sm sm:text-base leading-[2.2] tracking-wide" style={{ color: '#4a4a6a' }}>
                            意識とAIが組み合わさること——
                            <br />
                            それが、このコミュニティの
                            <br />
                            <span style={{ fontWeight: 600, color: '#1a1a3e' }}>1番の特徴であり、ビジョンそのもの</span>です。
                        </p>
                    </motion.div>

                    {/* Divider */}
                    <div className="flex items-center justify-center my-8">
                        <div className="w-10 h-px" style={{ background: 'rgba(201,168,76,0.3)' }} />
                        <div className="w-2 h-2 mx-3 rotate-45 rounded-sm" style={{ background: 'linear-gradient(135deg, #7c5cbf, #c9a84c)' }} />
                        <div className="w-10 h-px" style={{ background: 'rgba(201,168,76,0.3)' }} />
                    </div>

                    {/* Block 4: 平和でパワフル */}
                    <motion.div {...fadeInUp} className="text-center my-10">
                        <p
                            className="text-lg sm:text-xl leading-[1.8] mb-4"
                            style={{
                                fontFamily: '"Noto Serif JP", serif',
                                fontWeight: 600,
                                background: 'linear-gradient(135deg, #7c5cbf, #c9a84c)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            制限や法則を通らない。
                            <br />
                            平和で、パワフルで、
                            <br />
                            無限の可能性に満ちている。
                        </p>
                        <p className="text-sm sm:text-base leading-[2.2] tracking-wide mt-3" style={{ color: '#4a4a6a' }}>
                            その意識でAIを扱った時、
                            <br />
                            <span style={{ fontWeight: 600, color: '#1a1a3e' }}>
                                AIがじぶんの無限の叡智として
                            </span>
                            <br />
                            使っていけるようになります。
                        </p>
                    </motion.div>

                    {/* Divider */}
                    <div className="flex items-center justify-center my-8">
                        <div className="w-10 h-px" style={{ background: 'rgba(201,168,76,0.3)' }} />
                        <div className="w-2 h-2 mx-3 rotate-45 rounded-sm" style={{ background: 'linear-gradient(135deg, #7c5cbf, #c9a84c)' }} />
                        <div className="w-10 h-px" style={{ background: 'rgba(201,168,76,0.3)' }} />
                    </div>

                    {/* Block 5: ひらめきが変わる */}
                    <motion.div {...fadeInUp} className="text-center my-10">
                        <p className="text-sm sm:text-base leading-[2.2] tracking-wide" style={{ color: '#4a4a6a' }}>
                            AIの使い方そのものが変わっていく。
                            <br />
                            自分から来るひらめきが変わっていく。
                        </p>
                        <p className="text-sm sm:text-base leading-[2.2] tracking-wide mt-3" style={{ color: '#4a4a6a' }}>
                            AIで自動化するにしても、
                            <br />
                            ひらめきが変われば、創るものが変わります。
                        </p>
                    </motion.div>

                    {/* Divider */}
                    <div className="flex items-center justify-center my-8">
                        <div className="w-10 h-px" style={{ background: 'rgba(201,168,76,0.3)' }} />
                        <div className="w-2 h-2 mx-3 rotate-45 rounded-sm" style={{ background: 'linear-gradient(135deg, #7c5cbf, #c9a84c)' }} />
                        <div className="w-10 h-px" style={{ background: 'rgba(201,168,76,0.3)' }} />
                    </div>

                    {/* Block 6: VoiSlide Movie 実例 */}
                    <motion.div
                        {...fadeInUp}
                        className="text-center rounded-2xl py-8 px-6 my-6"
                        style={{
                            background: 'linear-gradient(135deg, rgba(201,168,76,0.05), rgba(124,92,191,0.05))',
                            border: '1px solid rgba(201,168,76,0.12)',
                        }}
                    >
                        <p className="text-xs tracking-[0.15em] mb-4" style={{ color: '#c9a84c', fontWeight: 500 }}>
                            ✦ 実例 — VoiSlide Movie
                        </p>
                        <p className="text-sm sm:text-base leading-[2.2] tracking-wide mb-3" style={{ color: '#4a4a6a' }}>
                            VoiSlide Movie も、まさにそうでした。
                        </p>
                        <p className="text-sm sm:text-base leading-[2.2] tracking-wide mb-3" style={{ color: '#4a4a6a' }}>
                            スキルや技術から作ったというより、
                            <br />
                            自分のビジョンについていく中で、
                            <br />
                            ひらめきをそのままシステムにしました。
                        </p>
                        <p className="text-sm sm:text-base leading-[2.2] tracking-wide mb-3" style={{ color: '#4a4a6a' }}>
                            その結果、あたらしい概念を形にした
                            <br />
                            これまでの常識の逆をいくようなツールとなりました。
                        </p>
                    </motion.div>

                    {/* ビジョンの本質 — 枠外テキスト */}
                    <motion.div {...fadeInUp} className="text-center my-10">
                        <p className="text-sm sm:text-base leading-[2.2] tracking-wide mb-3" style={{ color: '#4a4a6a' }}>
                            自分のビジョンについていけば、
                            <br />
                            自分の意識をシフトさせていけば、
                        </p>
                        <p className="text-sm sm:text-base leading-[2.2] tracking-wide mb-3" style={{ color: '#4a4a6a', fontWeight: 500 }}>
                            もうそれが、
                            <br />
                            <span style={{ background: 'linear-gradient(135deg, #7c5cbf, #c9a84c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 600 }}>
                                あなたらしさという次元を超えたあなた
                            </span>だし、
                        </p>
                        <p className="text-sm sm:text-base leading-[2.2] tracking-wide" style={{ color: '#4a4a6a' }}>
                            それが、ユニークで、新しくて、
                            <br />
                            その電波がみんなが求めてやまないではないはずがありません。
                        </p>
                    </motion.div>

                    {/* Block 7: クロージング — accent card */}
                    <motion.div
                        {...fadeInUp}
                        className="text-center rounded-2xl py-8 px-6 mt-8"
                        style={{
                            background: 'linear-gradient(135deg, rgba(26,26,62,0.03), rgba(124,92,191,0.06), rgba(201,168,76,0.04))',
                            border: '1px solid rgba(124,92,191,0.08)',
                        }}
                    >
                        <p
                            className="text-base sm:text-lg leading-[1.8]"
                            style={{
                                fontFamily: '"Noto Serif JP", serif',
                                fontWeight: 600,
                                color: '#1a1a3e',
                            }}
                        >
                            それが、理想論ではなく
                            <br />
                            <span style={{ background: 'linear-gradient(135deg, #7c5cbf, #c9a84c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                リアリティを持って、起きていく
                            </span>
                            <br />
                            コミュニティです。
                        </p>
                    </motion.div>
                </div>

                {/* Category lists */}
                <div className="space-y-12">
                    {categories.map((cat, catIdx) => (
                        <motion.div
                            key={catIdx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.8, delay: catIdx * 0.1 }}
                        >
                            {/* Category header */}
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-xl">{cat.icon}</span>
                                <h3
                                    className="text-lg sm:text-xl font-semibold"
                                    style={{
                                        fontFamily: '"Noto Serif JP", serif',
                                        color: cat.accentColor,
                                        letterSpacing: '0.03em',
                                    }}
                                >
                                    {cat.label}
                                </h3>
                                <div
                                    className="flex-1 h-px"
                                    style={{ background: `${cat.accentColor}22` }}
                                />
                            </div>

                            {/* Items */}
                            <div className="space-y-4">
                                {cat.items.map((item, i) => (
                                    <div
                                        key={i}
                                        className="rounded-2xl px-5 py-4 transition-all duration-300 hover:shadow-md"
                                        style={{
                                            background: '#fff',
                                            border: '1px solid rgba(0,0,0,0.04)',
                                        }}
                                    >
                                        <div className="flex items-start gap-3">
                                            <span
                                                className="mt-0.5 text-sm"
                                                style={{ color: cat.accentColor }}
                                            >
                                                ✓
                                            </span>
                                            <div>
                                                <p
                                                    className="text-sm font-medium mb-1"
                                                    style={{ color: '#1a1a3e' }}
                                                >
                                                    {item.title}
                                                </p>
                                                <p
                                                    className="text-xs leading-relaxed"
                                                    style={{ color: '#8a8aaa' }}
                                                >
                                                    {item.detail}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
