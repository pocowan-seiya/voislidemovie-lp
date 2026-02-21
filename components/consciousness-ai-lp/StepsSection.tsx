'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.8 },
};

const steps = [
    {
        number: 0,
        title: '1番のワクワクのビジョンを見る',
        body: '制限のないところで、自分が1番する最高のビジョンを見る。ワークやシステムとともに、実践していき、許可していきます。ここから、全て始まっていきます。',
        color: '#c9a84c',
    },
    {
        number: 1,
        title: '見えない制限を手放す',
        body: 'ビジョン見る、ビジョンを動く中で出てくるもの。恐怖や不安、罪悪感や、制限。それらを、捉えて手放していきます。びっくりするぐらい簡単に。',
        color: '#7c5cbf',
    },
    {
        number: 2,
        title: '無限の叡智が復活する',
        body: '手を離すことに、自分が復活していく。軽やかで、自由で、楽になる。本当の自分の、とてつもなく豊かな意識、制限のない意識、無限の叡智で生きる自分に復活する。',
        color: '#5c8dbf',
    },
    {
        number: 3,
        title: 'AIで軽やかに形にする',
        body: 'AIを使って、ビジョンを形にしていく。制限や常識、時間という概念すら超えていく。軽やかに、想像を超えた形で、ビジョンを起こしていってしまう。',
        color: '#5cbf8d',
    },
    {
        number: 4,
        title: '出てくるものは、全部手放す',
        body: 'ビジョンは、ゴールではなく、その先にあるもの。ビジョンはどんどん更新されて、あなたはその意識にどんどん拡大していく。出てくるものは全部手放していく。',
        color: '#bf5c8d',
    },
    {
        number: 5,
        title: 'ビジョンのエネルギーになる',
        body: '自分がどんどんクリアになればなるほどビジョンも、軽やかで鮮明に見えるようになってくる。先にビジョンのエネルギーになって、具現化している惑星に、もう立ってしまう。',
        color: '#8d5cbf',
    },
    {
        number: 6,
        title: 'ひらめきが受け取れる',
        body: '目的地に向かうのではなく、先に立つから「どうやって」を見ていくことができる。その次元から受け取れるひらめきは、これまでのものとは、また次元が違う。',
        color: '#bf8d5c',
    },
    {
        number: 7,
        title: '1番のワクワクを実現する',
        body: '本当の自分を生きていく。自分のビジョン、自分のワクワクを生きていく。復活すればするほど、自分の意識でそれを起こしてしまう。それが、このコミュニティで起こることです。',
        color: '#c9a84c',
    },
];

export default function StepsSection() {
    return (
        <section className="relative py-24 sm:py-32" style={{ background: '#fafafa' }}>
            <div className="absolute inset-0 pointer-events-none sacred-geometry-bg" />

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                {/* Section heading */}
                <motion.div {...fadeInUp} className="text-center mb-20">
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
                    <p className="text-base sm:text-lg" style={{ color: '#4a4a6a' }}>
                        意識のシフト × AI具現化　で、どう変わっていくのか？
                    </p>
                    <div className="section-divider mt-8" />
                </motion.div>

                {/* Steps timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div
                        className="absolute left-6 sm:left-8 top-0 bottom-0 w-px hidden sm:block"
                        style={{
                            background: 'linear-gradient(180deg, rgba(201,168,76,0.3), rgba(124,92,191,0.3), rgba(201,168,76,0.3))',
                        }}
                    />

                    <div className="space-y-8 sm:space-y-12">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-30px' }}
                                transition={{ duration: 0.6, delay: idx * 0.05 }}
                                className="flex gap-4 sm:gap-8 items-start"
                            >
                                {/* Step circle */}
                                <div className="flex-shrink-0 relative z-10">
                                    <div
                                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white text-sm sm:text-base font-medium"
                                        style={{
                                            background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)`,
                                            boxShadow: `0 4px 20px ${step.color}30`,
                                        }}
                                    >
                                        {step.number}
                                    </div>
                                </div>

                                {/* Step content */}
                                <div
                                    className="flex-1 rounded-2xl p-5 sm:p-7 transition-all duration-300 hover:shadow-lg"
                                    style={{
                                        background: 'rgba(255,255,255,0.9)',
                                        border: '1px solid rgba(0,0,0,0.04)',
                                        backdropFilter: 'blur(10px)',
                                    }}
                                >
                                    <h3
                                        className="text-base sm:text-lg font-semibold mb-3"
                                        style={{
                                            fontFamily: '"Noto Serif JP", serif',
                                            color: '#1a1a3e',
                                        }}
                                    >
                                        STEP {step.number}: {step.title}
                                    </h3>
                                    <p
                                        className="text-sm sm:text-base leading-relaxed"
                                        style={{ color: '#5a5a7a' }}
                                    >
                                        {step.body}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
