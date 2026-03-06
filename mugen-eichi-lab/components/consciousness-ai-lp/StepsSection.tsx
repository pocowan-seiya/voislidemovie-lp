'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.8 },
};

const loopSteps = [
    {
        number: 1,
        icon: '🔭',
        title: 'ビジョンを描く・動く',
        body: '制限なく、自分が1番ワクワクするビジョンを見る。そして、そのビジョンに向かって動き出す。',
        color: '#c9a84c',
        bgGradient: 'rgba(201,168,76,0.06)',
    },
    {
        number: 2,
        icon: '🌿',
        title: '出てくるものを手放す',
        body: '動くと出てくる恐怖、不安、「自分には無理」という声。手放しのワークで、驚くほど簡単に外していく。',
        color: '#7c5cbf',
        bgGradient: 'rgba(124,92,191,0.06)',
    },
    {
        number: 3,
        icon: '✨',
        title: '無限の叡智に復活する',
        body: '制限を手放すと、自分が軽くなる。本来のとてつもなく豊かな意識に復活し、ビジョンがさらに鮮明になる。ひらめきの次元が変わる。',
        color: '#5c8dbf',
        bgGradient: 'rgba(92,141,191,0.06)',
    },
    {
        number: 4,
        icon: '⚡',
        title: 'AIで軽やかに具現化する',
        body: '復活した叡智をAIというパートナーと共に、軽やかに形にしていく。想像を超えたスピードで、ビジョンが現実になっていく。',
        color: '#5cbf8d',
        bgGradient: 'rgba(92,191,141,0.06)',
    },
];

export default function StepsSection() {
    return (
        <section className="relative py-24 sm:py-32" style={{ background: '#fafafa' }}>
            <div className="absolute inset-0 pointer-events-none sacred-geometry-bg" />

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                {/* Section heading */}
                <motion.div {...fadeInUp} className="text-center mb-16">
                    <p className="text-sm tracking-[0.2em] mb-4" style={{ color: '#c9a84c' }}>
                        TRANSFORMATION
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
                        このコミュニティで起こること
                    </h2>
                    <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#4a4a6a' }}>
                        4つのステップが循環し、
                        <br className="sm:hidden" />
                        ループするたびに復活が深まっていく
                    </p>
                    <div className="section-divider mt-8" />
                </motion.div>

                {/* Loop visualization */}
                <div className="relative mb-12">
                    {/* Loop arrow indicator - center */}
                    <motion.div
                        {...fadeInUp}
                        className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center"
                    >
                        <div
                            className="w-24 h-24 rounded-full flex flex-col items-center justify-center"
                            style={{
                                background: 'linear-gradient(135deg, rgba(201,168,76,0.08), rgba(124,92,191,0.08))',
                                border: '2px solid rgba(124,92,191,0.12)',
                                backdropFilter: 'blur(10px)',
                            }}
                        >
                            <span className="text-2xl">🔄</span>
                            <span
                                className="text-[10px] mt-0.5 tracking-wider"
                                style={{ color: '#7c5cbf', fontWeight: 600 }}
                            >
                                LOOP
                            </span>
                        </div>
                    </motion.div>

                    {/* 2x2 grid of loop steps */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        {loopSteps.map((step, idx) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.12 }}
                                className="relative rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-lg group"
                                style={{
                                    background: `linear-gradient(180deg, ${step.bgGradient} 0%, rgba(255,255,255,0.95) 60%)`,
                                    border: `1px solid ${step.color}20`,
                                }}
                            >
                                {/* Step number + arrow */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div
                                        className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold"
                                        style={{
                                            background: `linear-gradient(135deg, ${step.color}, ${step.color}cc)`,
                                            boxShadow: `0 3px 12px ${step.color}25`,
                                        }}
                                    >
                                        {step.number}
                                    </div>
                                    <span className="text-xl">{step.icon}</span>
                                    {idx < 3 && (
                                        <span
                                            className="hidden sm:inline-block ml-auto text-lg transition-transform duration-300 group-hover:translate-x-1"
                                            style={{ color: `${step.color}80` }}
                                        >
                                            →
                                        </span>
                                    )}
                                    {idx === 3 && (
                                        <span
                                            className="hidden sm:inline-block ml-auto text-lg transition-transform duration-300 group-hover:-translate-y-1"
                                            style={{ color: `${step.color}80` }}
                                        >
                                            ↩
                                        </span>
                                    )}
                                </div>

                                <h3
                                    className="text-base sm:text-lg font-semibold mb-2"
                                    style={{
                                        fontFamily: '"Noto Serif JP", serif',
                                        color: '#1a1a3e',
                                    }}
                                >
                                    {step.title}
                                </h3>
                                <p
                                    className="text-sm leading-relaxed"
                                    style={{ color: '#5a5a7a' }}
                                >
                                    {step.body}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Loop deepening message */}
                <motion.div
                    {...fadeInUp}
                    className="text-center rounded-3xl p-7 sm:p-10 mb-10"
                    style={{
                        background: 'linear-gradient(135deg, rgba(124,92,191,0.05), rgba(201,168,76,0.05))',
                        border: '1px solid rgba(124,92,191,0.1)',
                    }}
                >
                    <p
                        className="text-lg sm:text-xl leading-loose mb-4"
                        style={{
                            fontFamily: '"Noto Serif JP", serif',
                            fontWeight: 600,
                            color: '#1a1a3e',
                        }}
                    >
                        このループが回るたびに、
                        <br />
                        どんどん自分に復活していく。
                    </p>
                    <div className="space-y-2 text-sm sm:text-base leading-relaxed" style={{ color: '#4a4a6a' }}>
                        <p>
                            ビジョンに動いて、出てくるものは軽やかに手放して。
                            <br />
                            復活した叡智を使って、AIとともに具現化に動いて。
                        </p>
                        <p>
                            動くとまた出てくる。それもすぐ手放して。
                            <br />
                            またさらに復活して、さらに鮮明なビジョンが見える。
                        </p>
                    </div>
                    <div className="my-5 flex items-center justify-center gap-2" style={{ color: '#c9a84c' }}>
                        <span>◆</span>
                        <div className="w-16 h-px" style={{ background: 'rgba(201,168,76,0.4)' }} />
                        <span>◆</span>
                    </div>
                    <p
                        className="text-base sm:text-lg leading-loose"
                        style={{
                            fontFamily: '"Noto Serif JP", serif',
                            fontWeight: 500,
                            color: '#1a1a3e',
                        }}
                    >
                        気づいたら、それが当たり前になっている。
                        <br />
                        自分が人生の主人公に復活して、
                        <br />
                        自分に力が戻ってきている。
                    </p>
                    <p
                        className="mt-4 text-sm"
                        style={{
                            fontStyle: 'italic',
                            color: '#7c5cbf',
                        }}
                    >
                        ——この豊かな体験が、ここから始まります。
                    </p>
                </motion.div>

                {/* あやこさんクラス併用推奨 */}
                <motion.div
                    {...fadeInUp}
                    className="text-center rounded-2xl p-6"
                    style={{
                        background: 'linear-gradient(135deg, rgba(124,92,191,0.04), rgba(201,168,76,0.04))',
                        border: '1px solid rgba(124,92,191,0.08)',
                    }}
                >
                    <p className="text-sm leading-relaxed" style={{ color: '#7c5cbf', fontStyle: 'italic' }}>
                        💫 より深い意識の統合を求める方へ
                        <br />
                        関野あやこさんの「手放しのクラス」と併用することで、
                        <br />
                        さらに深い変容が加速します。
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
