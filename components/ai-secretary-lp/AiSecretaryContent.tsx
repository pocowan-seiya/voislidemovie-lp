'use client';

import React from 'react';
import { motion } from 'framer-motion';

const agendaItems = [
    {
        time: "Part 1",
        title: "構想 - Vision",
        desc: "あなたの業務を「因数分解」し、AIに任せるべき領域を特定するワークショップ。"
    },
    {
        time: "Part 2",
        title: "構築 - Creation",
        desc: "【ライブ実演】ノーコードツールを使い、その場で「AI秘書」をゼロから生み出します。"
    },
    {
        time: "Part 3",
        title: "対話 - Interaction",
        desc: "生まれたAI秘書とLINE/Slackで会話。その「人格」と「能力」を肌で感じる瞬間。"
    }
];

const AiSecretaryContent = () => {
    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-6 max-w-4xl">

                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-slate-500 text-sm font-serif tracking-widest uppercase mb-4 block">
                        Seminar Agenda
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif text-slate-900">
                        「90分」で、あなたの働き方が変わる。
                    </h2>
                </motion.div>

                <div className="relative border-l border-slate-200 ml-4 md:ml-0 md:pl-8 space-y-12">
                    {agendaItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className="relative pl-8 md:pl-0"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            {/* Marker */}
                            <div className="absolute left-[-5px] top-2 w-3 h-3 bg-white border-2 border-slate-900 rounded-full md:left-[-38px]"></div>

                            <div className="flex flex-col md:flex-row gap-4 md:items-baseline">
                                <span className="text-amber-500 font-serif font-bold text-xl w-24 flex-shrink-0">
                                    {item.time}
                                </span>
                                <div>
                                    <h3 className="text-2xl font-serif text-slate-900 mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="mt-16 bg-slate-50 border border-slate-200 p-8 rounded-xl text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="text-slate-800 font-serif text-lg mb-2">
                        特に <span className="border-b-2 border-amber-300 font-bold">Part 2のライブ実演</span> は必見です。
                    </p>
                    <p className="text-slate-500 text-sm">
                        「こんなに簡単に作れるのか」という驚きを、ぜひ共有してください。
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default AiSecretaryContent;
