'use client';

import React, { useState } from 'react';
import { Gift, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WisdomOffer = () => {
    return (
        <section className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 max-w-5xl">
                <motion.div
                    className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-14 border border-white/10 shadow-2xl"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-12 tracking-tight">LINE登録で受け取れるもの</h2>

                    {/* Main Offer */}
                    <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl p-8 md:p-10 border border-cyan-500/20 mb-12">
                        <div className="flex items-center gap-5 mb-8">
                            <div className="bg-gradient-to-br from-cyan-400 to-blue-500 text-white p-4 rounded-2xl shadow-lg shadow-cyan-500/30">
                                <Gift size={32} />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white">無限の叡智 スターターキット<span className="text-base font-normal text-slate-400 ml-3">（3つのAIシステム）</span></h3>
                        </div>
                        <div className="space-y-5 pl-5 border-l-2 border-cyan-500/50 ml-7">
                            <div>
                                <span className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 block">1. 無限ビジョン・ナビ</span>
                                <span className="text-slate-400">→ 本当の自分のビジョンに、出会う</span>
                            </div>
                            <div>
                                <span className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 block">2. リミット・ディテクター</span>
                                <span className="text-slate-400">→ 叡智へのアクセスを阻む、制限を発見する</span>
                            </div>
                            <div>
                                <span className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 block">3. 手放しワーク・システム</span>
                                <span className="text-slate-400">→ 制限を手放し、叡智を解き放つ</span>
                            </div>
                        </div>
                    </div>

                    {/* Additional Offers */}
                    <div className="space-y-5">
                        <h4 className="text-center font-bold text-slate-500 mb-8 text-sm tracking-[0.2em]">✨ その他、こんなものも受け取れます</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                "4ステップ無料体験（意識×AIで、ビジョンを具現化する実践）",
                                "AIコミュニティ情報（月額3,000円 / AIを叡智として使う実践者のコミュニティ）",
                                "AIシステム各種（VoiSlide Movie ほか、ビジョンを形にするツール）",
                                "音楽・アート（フルフル・ブルブルの世界）",
                                "手放しのワーク・クラス情報"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm md:text-base text-slate-300 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                                    <span className="text-amber-400 text-xs mt-1">●</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// --- FAQ Component ---

const FAQItem = ({ question, answer, index }: { question: string, answer: string, index: number }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <motion.div
            className="border-b border-white/10 last:border-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
            <button
                className="w-full py-6 md:py-8 flex items-center justify-between text-left focus:outline-none group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center gap-4 md:gap-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-bold text-2xl md:text-3xl">Q.</span>
                    <span className="font-bold text-white text-lg md:text-xl group-hover:text-cyan-300 transition-colors">{question}</span>
                </div>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="text-slate-400 w-6 h-6 md:w-8 md:h-8" />
                </motion.div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="bg-white/5 p-6 md:p-8 rounded-2xl flex gap-4 md:gap-6 mb-6 border border-white/5">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 font-bold text-2xl md:text-3xl">A.</span>
                            <p className="text-slate-300 whitespace-pre-line leading-loose text-base md:text-lg">{answer}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export const WisdomFAQ = () => {
    const faqs = [
        { q: "本当に無料ですか？", a: "はい、完全無料です。\nスターターキット（3つのAIシステム）は、LINE登録後、すぐにお使いいただけます。" },
        { q: "AIを使ったことがないのですが、大丈夫ですか?", a: "大丈夫です。\nシステムは対話形式で進むので、AIが初めての方でも、簡単に使えます。" },
        { q: "すでに結果は出ているのですが、それでも使えますか?", a: "はい、むしろそういう方に使っていただきたいです。\n\n「結果は出るけど、もっとある」「もっとストレスなく、自然体で生きたい」\n\nそう感じている方こそ、無限の叡智を解き放つタイミングです。" },
        { q: "どれくらいの時間がかかりますか?", a: "1つのシステムは、10〜20分程度で完了します。\nご自身のペースで、自由に進めていただけます。" },
        { q: "後から何か売り込まれたりしませんか?", a: "スターターキットは完全無料です。\n\nその後、さらに深く実践したい方には、AIコミュニティ（月額3,000円）や有料のシステム・プログラムもご用意していますが、強制ではありません。\nご自身のペースで、選んでいただけます。" }
    ];

    return (
        <section className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <motion.h2
                    className="text-center text-3xl md:text-5xl font-bold text-white mb-12 md:mb-16 tracking-tight"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                >
                    よくある質問
                </motion.h2>
                <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-4 md:p-8">
                    {faqs.map((faq, i) => (
                        <FAQItem key={i} question={faq.q} answer={faq.a} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WisdomOffer;
