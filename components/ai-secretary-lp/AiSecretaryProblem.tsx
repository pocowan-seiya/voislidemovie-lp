'use client';

import React from 'react';
import { motion } from 'framer-motion';

const problems = [
    { emoji: "📩", text: "日々のメール返信に、時間を奪われている" },
    { emoji: "🤖", text: "AIツールの活用法が、実はよく分からない" },
    { emoji: "⏳", text: "情報収集やスケジュール調整で1日が終わる" },
    { emoji: "😓", text: "プログラミング知識がなく、諦めている" },
];

const AiSecretaryProblem = () => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-slate-500 text-sm font-serif tracking-widest uppercase mb-4 block">
                        Current Challenges
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">
                        貴重な時間を、<br />
                        「雑務」に使っていませんか？
                    </h2>
                    <div className="w-16 h-[1px] bg-slate-400 mx-auto" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            className="p-8 rounded-xl bg-white shadow-sm border border-slate-100 flex items-start gap-6 hover:shadow-md transition-shadow duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <span className="text-4xl bg-slate-50 p-3 rounded-full">{problem.emoji}</span>
                            <div>
                                <p className="text-slate-700 font-medium text-lg leading-relaxed pt-2">
                                    {problem.text}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="text-center mt-16 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                >
                    <p className="text-xl text-slate-600 font-serif leading-loose">
                        もし、一つでも当てはまるなら、<br />
                        <span className="text-slate-900 font-medium border-b border-amber-300">
                            ご安心ください。このセミナーは、貴方のためのものです。
                        </span>
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default AiSecretaryProblem;
