'use client';

import React from 'react';
import { Check } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }
};

const WisdomEmpathy = () => {
    const checkList = [
        "自分の才能を、もっと開花させたい",
        "無限の叡智を、フル活用したい",
        "この地球で生まれてやるべきことを、やりきりたい",
        "本当の自分のビジョンと出会いたい",
        "エネルギーに満ち溢れた毎日を過ごしたい",
        "自分を生きたくてしょうがない",
        "秘めたエネルギーに、フルアクセスして使い倒したい",
        "結果は出るけど、もっとストレスなく、自然体で生きたい",
        "やればできるけど、もっと本質的なエネルギーで動きたい",
        "自分の無限の可能性を、切り開いていきたい"
    ];

    return (
        <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                {/* Section Header */}
                <motion.div
                    className="text-center mb-16 md:mb-20"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                >
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                        こんな想いを<br className="md:hidden" />抱いていませんか？
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
                    {/* Checklist */}
                    <motion.div
                        className="flex-1 w-full"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                    >
                        <div className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl h-full">
                            <ul className="space-y-5">
                                {checkList.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        className="flex items-start gap-4 group"
                                        variants={itemVariants}
                                    >
                                        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white mt-0.5 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                                            <Check size={16} strokeWidth={3} />
                                        </div>
                                        <span className="text-slate-200 font-medium text-base md:text-lg leading-relaxed">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Empathy Message + Image */}
                    <motion.div
                        className="flex-1 w-full space-y-10"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.3 }}
                    >
                        {/* Character Image Place */}
                        <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10 group">
                            <Image
                                src="/images/wisdom-lp/characters.jpg"
                                alt="Walking with Wisdom"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
                        </div>

                        <div className="text-slate-300 text-base md:text-lg leading-loose space-y-6">
                            <p className="font-bold text-2xl md:text-3xl text-white">
                                あなたは、すでに動いている。<br />
                                結果も、出している。
                            </p>
                            <p>
                                でも、どこかで感じている。<br />
                                <span className="text-cyan-300 font-semibold text-xl">「もっとある」と。</span>
                            </p>
                            <p>
                                もっと自然に、エネルギーが湧いてくる生き方。<br />
                                もっとストレスなく、才能が開花していく状態。<br />
                                もっと本質的な、じぶんの叡智で生きる世界。
                            </p>
                            <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/10 p-6 rounded-2xl border-l-4 border-amber-400 text-slate-100">
                                <p>
                                    それは、幻想ではありません。<br />
                                    むしろ、ほんとうの自分の生きなかったことがイリュージョンでした。
                                </p>
                            </div>
                            <p>
                                じぶんが、現実を映しかえていく、主人公となった生き方。
                            </p>
                            <p className="font-bold text-white text-xl">
                                制限を手放せば、<br />
                                想像を超えたあなたの叡智を、<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">フルワイドで使って生きれるようになる。</span>
                            </p>
                            <p className="text-amber-300 font-semibold text-lg">
                                圧倒的な確かさで、簡単さ・シンプルさを許可していく。<br />
                                その扉を、今、開きませんか？
                            </p>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default WisdomEmpathy;
