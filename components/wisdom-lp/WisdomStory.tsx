'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const WisdomStory = () => {
    return (
        <section className="py-24 md:py-32 bg-gradient-to-br from-slate-950 via-cyan-950/30 to-slate-950 text-white relative overflow-hidden">
            {/* Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[200px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                <motion.div
                    className="text-center mb-16 md:mb-20"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                >
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">江藤せいやのストーリー</h2>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center max-w-7xl mx-auto">

                    {/* Image */}
                    <motion.div
                        className="w-full lg:w-2/5 relative group"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                    >
                        <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
                            <Image
                                src="/images/wisdom-lp/seiya_profile.jpg"
                                alt="Seiya Eto"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                        </div>
                        {/* Decorative Glow */}
                        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gradient-to-br from-amber-400/30 to-orange-600/20 rounded-full blur-3xl pointer-events-none" />
                    </motion.div>

                    {/* Story Text */}
                    <motion.div
                        className="w-full lg:w-3/5 text-slate-300 text-base md:text-lg leading-loose space-y-6"
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                    >
                        <p>
                            はじめまして、江藤せいやです。<br /><br />
                            起業15年。<br />
                            IT・FXで月商2,000万円を達成し、<br />
                            世界を旅する生活を実現しました。
                        </p>
                        <p>
                            でも、何かが満たされない。<br />
                            「成功しているはずなのに、なぜ？」<br />
                            そんな問いを抱えたまま、<br />
                            気づけば、借金500万円の現実をつくり出していました。
                        </p>
                        <hr className="border-white/10 my-8" />
                        <p>
                            そのとき、選んだのは、<br />
                            <strong className="text-white text-xl">「本当の自分で生きる」道。</strong>
                        </p>
                        <p>
                            恐怖・制限・美徳といった、<br />
                            じぶんの「分離」を手放していくと、<br />
                            映し出す現実が、まるで別世界に変わっていきました。
                        </p>
                        <hr className="border-white/10 my-8" />
                        <p>
                            そこからは、AIを自分の叡智として使い、<br />
                            コードを書かずに「Vibe Coding」で、<br />
                            AIシステムを次々と開発しています。<br />
                            FXトレード、音楽制作、アート表現。<br />
                            <span className="text-cyan-300">すべてが、自分の叡智の表現。</span>
                        </p>
                        <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 font-semibold">
                            シフトするほどに領域が広がっていく<br />
                            自分の叡智を使っていくこと、生きていくことが、<br />
                            こんなにワクワクするなんで想像もしていませんでした。
                        </p>
                        <hr className="border-white/10 my-8" />
                        <p>
                            そして今、僕を含めて、<br />
                            一人ひとりが「無限の叡智を生きる」時代に来ています。<br />
                            もともとの、じぶんへの復活です。
                        </p>
                        <p className="text-white font-semibold text-xl">
                            制限を手放せば、<br />
                            想像を超えた、じぶんの叡智が、解き放たれる。<br />
                            <span className="text-amber-300">一緒に、無限の叡智を切り開いていきましょう。</span>
                        </p>
                        <p className="font-serif text-3xl text-right mt-12 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">江藤せいや</p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default WisdomStory;
