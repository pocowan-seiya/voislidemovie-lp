'use client';

import React from 'react';
import { motion } from 'framer-motion';

const benefitVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
    })
};

const WisdomTransformation = () => {
    const benefits = [
        {
            icon: "🔥",
            title: "本当の自分のビジョンに、出会う",
            desc: "「これだ！」というワクワクのビジョンに生きていける豊かさ。才能が開花し、エネルギーに満ち溢れた毎日が始まる。"
        },
        {
            icon: "🔥",
            title: "叡智へのフルアクセスを、取り戻す",
            desc: "無意識の制限が溶けていき、秘めたエネルギーに、アクセスできるようになる。"
        },
        {
            icon: "🔥",
            title: "叡智をつかっていくワクワクに生きれる。",
            desc: "ストレスなく、エネルギーが湧いてくる。やればできる状態から、やりたくてしょうがない状態へ。"
        },
        {
            icon: "🔥",
            title: "想像を超えた、じぶんの感性に出会う",
            desc: "「もっとある」と感じていたものに、出会っていく。本質的なエネルギーで、地球を生きる。"
        },
        {
            icon: "🔥",
            title: "無限の可能性を、切り開いていく",
            desc: "意識×AIで、ビジョンを形にする。この地球でやるべきことを、やりきる人生へ。"
        }
    ];

    return (
        <section className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-pink-500/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                <motion.div
                    className="text-center mb-16 md:mb-20"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                >
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                        3つのシステムを使うと、<br className="md:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">こんな世界へ抜けていきます</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {benefits.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="flex gap-5 p-6 md:p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-amber-500/30 transition-colors duration-500 group"
                            custom={idx}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={benefitVariants}
                        >
                            <div className="text-4xl md:text-5xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">{item.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-base md:text-lg">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WisdomTransformation;
