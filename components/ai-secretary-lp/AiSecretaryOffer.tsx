'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AiSecretaryCountdown from './AiSecretaryCountdown';

const bonuses = [
    { title: "Bonus 1", desc: "AI秘書スタートアップガイド (PDF)" },
    { title: "Bonus 2", desc: "実演で使用するプロンプトテンプレート" },
    { title: "Bonus 3", desc: "アーカイブ動画の無期限視聴権" }
];

const AiSecretaryOffer = () => {
    return (
        <section id="offer" className="py-24 bg-white relative">
            <div className="container mx-auto px-6 max-w-4xl">

                <motion.div
                    className="relative bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-2xl overflow-hidden p-8 md:p-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-slate-900 via-amber-400 to-slate-900"></div>

                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-serif text-slate-900 mb-4">
                            Premium Invitation
                        </h2>
                        <p className="text-slate-500 font-light">
                            あなた専属のAI秘書を、共に創り上げる旅へ。
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">

                        {/* LEFT: DETAILS */}
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Date</h4>
                                <p className="text-xl text-slate-800 font-serif">2026.02.24 (Tue)</p>
                                <p className="text-slate-500">20:00 - 21:30</p>
                            </div>
                            <div>
                                <h4 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Place</h4>
                                <p className="text-xl text-slate-800 font-serif">Online (Zoom)</p>
                            </div>
                            <div>
                                <h4 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">Includes</h4>
                                <ul className="space-y-3">
                                    {bonuses.map((b, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                                            <span className="text-amber-500">✦</span>
                                            <span>
                                                <strong className="text-slate-800 block">{b.title}</strong>
                                                {b.desc}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* RIGHT: PRICING */}
                        <div className="text-center bg-slate-50 p-8 rounded-xl border border-slate-100">

                            <div className="mb-6">
                                <AiSecretaryCountdown mode="offer" />
                            </div>

                            <div className="mb-2 text-slate-400 line-through font-serif">Regular ¥8,000</div>
                            <div className="flex items-baseline justify-center gap-1 mb-6 text-slate-900">
                                <span className="text-xl font-serif">¥</span>
                                <span className="text-5xl font-serif font-bold tracking-tight">5,000</span>
                            </div>

                            <a href="#" className="block w-full">
                                <button className="w-full py-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white font-serif tracking-widest rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    APPLY NOW
                                </button>
                            </a>
                            <p className="mt-4 text-xs text-slate-400">
                                ※ 定員に達し次第、締め切らせていただきます。
                            </p>
                        </div>

                    </div>

                </motion.div>

            </div>
        </section>
    );
};

export default AiSecretaryOffer;
