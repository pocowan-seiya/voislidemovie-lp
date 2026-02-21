'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        q: "プログラミングの知識がゼロでも大丈夫ですか？",
        a: "はい、全く問題ありません。本セミナーではコードを書く作業は一切行わず、ノーコードツールと自然言語（日本語）のみでAI秘書を構築します。"
    },
    {
        q: "当日参加できない場合はどうなりますか？",
        a: "お申し込みいただいた全ての方に、セミナーの録画アーカイブ（無期限視聴可能）をお送りします。当日ご都合がつかない場合でも、後日ご自身のペースで実践していただけます。"
    },
    {
        q: "どんなAI秘書が作れますか？",
        a: "あなたの業務内容に合わせて、例えば「メール自動返信」「スケジュール調整」「リサーチ代行」「日報作成」など、特定のタスクを自律的にこなすエージェントを作成します。"
    },
    {
        q: "必要な機材やソフトはありますか？",
        a: "PC（Windows/Mac）とGoogle Chromeなどのブラウザがあれば参加可能です。使用するAIツールのアカウント作成手順は、事前にお送りするガイドに記載しております。"
    },
    {
        q: "維持費はかかりますか？",
        a: "作成したAI秘書の運用には、AIモデル（GPT-4など）のAPI利用料がかかりますが、個人の利用頻度であれば月額数百円〜千円程度に収まることがほとんどです。"
    }
];

const AiSecretaryFAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-slate-50 relative">
            <div className="container mx-auto px-6 max-w-3xl">

                <div className="text-center mb-16">
                    <span className="text-slate-500 text-sm font-serif tracking-widest uppercase mb-4 block">
                        Q & A
                    </span>
                    <h2 className="text-3xl font-serif text-slate-900 mb-6">よくあるご質問</h2>
                    <div className="w-16 h-[1px] bg-slate-400 mx-auto" />
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="font-serif text-slate-800 text-lg pr-8">{faq.q}</span>
                                <span className={`text-slate-400 text-2xl transition-transform duration-300 ${activeIndex === index ? 'rotate-45' : ''}`}>
                                    +
                                </span>
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-8 text-slate-600 leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/50">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AiSecretaryFAQ;
