'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.8 },
};

const fadeInScale = {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.8 },
};

function GradientText({
    children,
    from = '#7c5cbf',
    to = '#c9a84c',
}: {
    children: React.ReactNode;
    from?: string;
    to?: string;
}) {
    return (
        <span
            style={{
                background: `linear-gradient(135deg, ${from}, ${to})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 600,
            }}
        >
            {children}
        </span>
    );
}

function Divider() {
    return (
        <div className="flex items-center justify-center my-10 sm:my-14">
            <div className="w-12 h-px" style={{ background: 'rgba(201,168,76,0.3)' }} />
            <motion.div
                initial={{ rotate: 0, scale: 0.8 }}
                whileInView={{ rotate: 45, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-2.5 h-2.5 mx-4 rounded-sm"
                style={{ background: 'linear-gradient(135deg, #7c5cbf, #c9a84c)' }}
            />
            <div className="w-12 h-px" style={{ background: 'rgba(201,168,76,0.3)' }} />
        </div>
    );
}

export default function VisionSection() {
    return (
        <section className="relative py-24 sm:py-32 overflow-hidden" style={{ background: '#fff' }}>
            {/* Ambient effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
                    style={{
                        background: 'radial-gradient(ellipse, rgba(124,92,191,0.04) 0%, transparent 70%)',
                    }}
                />
                <div
                    className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(201,168,76,0.03) 0%, transparent 70%)',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto px-6">
                {/* Section heading */}
                <motion.div {...fadeInUp} className="text-center mb-16">
                    <p
                        className="text-xs tracking-[0.2em] mb-4"
                        style={{ color: '#c9a84c', fontWeight: 500 }}
                    >
                        VISION
                    </p>
                    <h2
                        className="text-xl sm:text-2xl leading-relaxed mb-6"
                        style={{
                            fontFamily: '"Noto Serif JP", serif',
                            fontWeight: 600,
                            color: '#1a1a3e',
                            letterSpacing: '0.04em',
                        }}
                    >
                        このコミュニティが
                        <br />
                        起こしていくこと
                    </h2>
                    <div className="section-divider mt-8" />
                </motion.div>

                {/* ─── Vision narrative ─── */}

                {/* ① 意識 × AI という組み合わせの本質 */}
                <motion.div {...fadeInUp}>
                    <p className="text-base leading-[2.2] tracking-wide mb-2" style={{ color: '#3a3a5a' }}>
                        意識とAIが組み合わさること——
                        <br />
                        それが、このコミュニティの
                        <br />
                        <span style={{ fontWeight: 600, color: '#1a1a3e' }}>1番の特徴であり、ビジョンそのもの</span>です。
                    </p>
                </motion.div>

                <Divider />

                {/* ② 制限や法則を通らない — AIが無限の叡智に */}
                <motion.div
                    {...fadeInScale}
                    className="relative rounded-3xl px-6 py-7 sm:px-8 sm:py-9 my-10"
                    style={{
                        background: 'linear-gradient(135deg, rgba(124,92,191,0.06) 0%, rgba(201,168,76,0.04) 100%)',
                        borderLeft: '3px solid rgba(124,92,191,0.3)',
                    }}
                >
                    <div
                        className="absolute -top-3 left-6 w-6 h-6 rounded-full flex items-center justify-center text-xs"
                        style={{ background: '#7c5cbf', color: '#fff', boxShadow: '0 2px 10px rgba(124,92,191,0.4)' }}
                    >
                        ✦
                    </div>
                    <p
                        className="text-lg sm:text-xl leading-[1.9] tracking-wide"
                        style={{
                            fontFamily: '"Noto Serif JP", serif',
                            fontWeight: 600,
                            color: '#1a1a3e',
                        }}
                    >
                        制限や法則を通らない。
                        <br />
                        <GradientText>平和で、パワフルで、</GradientText>
                        <br />
                        <GradientText>無限の可能性に満ちている。</GradientText>
                    </p>
                    <p className="mt-4 text-base leading-[2.2] tracking-wide" style={{ color: '#3a3a5a' }}>
                        その意識でAIを扱った時、
                        <br />
                        <span style={{ fontWeight: 600, color: '#1a1a3e' }}>
                            AIがじぶんの無限の叡智として
                        </span>
                        <br />
                        使っていけるようになります。
                    </p>
                </motion.div>

                <Divider />

                {/* ③ ひらめきが変わる */}
                <motion.div {...fadeInUp}>
                    <p className="text-base leading-[2.2] tracking-wide mb-2" style={{ color: '#3a3a5a' }}>
                        AIの使い方そのものが変わっていく。
                        <br />
                        自分から来るひらめきが変わっていく。
                    </p>
                    <p className="text-base leading-[2.2] tracking-wide" style={{ color: '#3a3a5a' }}>
                        AIで自動化するにしても、
                        <br />
                        ひらめきが変われば、創るものが変わります。
                    </p>
                </motion.div>

                <Divider />

                {/* ④ VoiSlide Movie — 実例として */}
                <motion.div
                    {...fadeInScale}
                    className="relative rounded-3xl px-6 py-8 sm:px-8 sm:py-10 my-6"
                    style={{
                        background: 'linear-gradient(135deg, rgba(201,168,76,0.05) 0%, rgba(124,92,191,0.05) 100%)',
                        border: '1px solid rgba(201,168,76,0.15)',
                    }}
                >
                    <p
                        className="text-xs tracking-[0.15em] mb-4"
                        style={{ color: '#c9a84c', fontWeight: 500 }}
                    >
                        ✦ 実例 — VoiSlide Movie
                    </p>
                    <p className="text-base leading-[2.2] tracking-wide mb-3" style={{ color: '#3a3a5a' }}>
                        VoiSlide Movie も、まさにそうでした。
                    </p>
                    <p className="text-base leading-[2.2] tracking-wide mb-3" style={{ color: '#3a3a5a' }}>
                        スキルや技術から作ったというより、
                        <br />
                        自分のビジョンについていく中で、
                        <br />
                        ひらめきをそのままシステムにしました。
                    </p>
                    <p className="text-base leading-[2.2] tracking-wide mb-3" style={{ color: '#3a3a5a' }}>
                        その結果、あたらしい概念を形にした
                        <br />
                        これまでの常識の逆をいくようなツールとなりました。
                    </p>
                </motion.div>

                {/* ビジョンの本質 — 枠外テキスト */}
                <motion.div {...fadeInUp} className="my-8">
                    <p className="text-base leading-[2.2] tracking-wide mb-3" style={{ color: '#3a3a5a' }}>
                        自分のビジョンについていけば、
                        <br />
                        自分の意識をシフトさせていけば、
                    </p>
                    <p className="text-base leading-[2.2] tracking-wide mb-3" style={{ color: '#3a3a5a', fontWeight: 500 }}>
                        もうそれが、
                        <br />
                        <GradientText>あなたらしさという次元を超えたあなた</GradientText>だし、
                    </p>
                    <p className="text-base leading-[2.2] tracking-wide" style={{ color: '#3a3a5a' }}>
                        それが、ユニークで、新しくて、
                        <br />
                        その電波がみんなが求めてやまないではないはずがありません。
                    </p>
                </motion.div>

                <Divider />

                {/* ⑤ コミュニティのビジョン — クロージング */}
                <motion.div
                    {...fadeInScale}
                    className="text-center rounded-3xl py-10 px-6 sm:py-12"
                    style={{
                        background: 'linear-gradient(135deg, rgba(26,26,62,0.03) 0%, rgba(124,92,191,0.06) 50%, rgba(201,168,76,0.04) 100%)',
                        border: '1px solid rgba(124,92,191,0.08)',
                    }}
                >
                    <p className="text-base leading-[2.2] tracking-wide mb-4" style={{ color: '#3a3a5a' }}>
                        自分の意識が反映されたものを、
                        <br />
                        AIと一緒に創っていく。
                        <br />
                        そこから放たれる電波で、
                        <br />
                        世界が自然と広がっていく。
                    </p>
                    <p
                        className="text-xl sm:text-2xl leading-[1.8]"
                        style={{
                            fontFamily: '"Noto Serif JP", serif',
                            fontWeight: 700,
                            background: 'linear-gradient(135deg, #1a1a3e, #7c5cbf, #c9a84c)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        こういうビジョンで動いている
                        <br />
                        コミュニティです。
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
