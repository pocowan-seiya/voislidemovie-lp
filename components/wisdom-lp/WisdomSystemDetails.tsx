'use client';

import React from 'react';
import { Compass, Search, Rainbow } from 'lucide-react';
import { motion } from 'framer-motion';

const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
    })
};

const SystemCard = ({ icon: Icon, title, subTitle, description, features, colorClass, gradientFrom, gradientTo, index }: any) => (
    <motion.div
        className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl flex flex-col h-full relative overflow-hidden group hover:border-white/20 transition-colors duration-500"
        custom={index}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={cardVariants}
    >
        {/* Top Gradient Bar */}
        <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${gradientFrom} ${gradientTo}`} />

        {/* Icon */}
        <motion.div
            className="mb-8 flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 text-white group-hover:scale-110 transition-transform duration-500"
            whileHover={{ rotate: 5 }}
        >
            <Icon size={40} strokeWidth={1.5} />
        </motion.div>

        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">{title}</h3>
        <p className={`text-base font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r ${gradientFrom} ${gradientTo}`}>{subTitle}</p>

        <div className="text-slate-300 mb-10 flex-grow text-base md:text-lg leading-loose">
            <p className="whitespace-pre-line">{description}</p>
        </div>

        <ul className="bg-black/20 rounded-2xl p-6 space-y-4 text-sm md:text-base text-slate-200 border border-white/5">
            {features.map((feature: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradientFrom} ${gradientTo} mt-1 text-lg`}>✦</span>
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
    </motion.div>
);

const WisdomSystemDetails = () => {
    const systems = [
        {
            icon: Compass,
            title: "システム1",
            subTitle: "無限ビジョン・ナビ",
            description: `あなたの「1番のワクワクのビジョン」を発見します。\n\n「こうあるべき」「これが現実的」といった制限を超えて、本当にあなたが生きたいビジョンに、出会う。`,
            features: [
                "AIとの対話で、あなたの本質を引き出す",
                "制限ない、1番のビジョンが見える",
                "すでにビジョンが具現化した体感を味わう",
                "そうしたらそうなるのかが見えてくる"
            ],
            gradientFrom: "from-cyan-400",
            gradientTo: "to-blue-500"
        },
        {
            icon: Search,
            title: "システム2",
            subTitle: "リミット・ディテクター",
            description: `あなたの叡智を止めている「分離」を発見します。\n\n恐怖・美徳・思い込みといった「見えない壁」を発見し、叡智へのフルアクセスを、取り戻します。`,
            features: [
                "自分の無意識の制限が明確になる",
                "なぜエネルギーが湧かなかったのかが、腑に落ちる",
                "叡智へのアクセスを阻んでいたものが見える"
            ],
            gradientFrom: "from-amber-400",
            gradientTo: "to-orange-500"
        },
        {
            icon: Rainbow,
            title: "システム3",
            subTitle: "手放しワーク・システム",
            description: `発見した「分離」を、自分の手で手放していくシステム。\n\nAIがガイドする手放しのワークを通じて、軽やかさ、簡単さで、ワクワクで形にしてしまう世界へ。`,
            features: [
                "じぶんの中にあった、重さがなくなる",
                "あれほど感じていた居心地の悪さが、自分の中からなくなる",
                "じぶんに力が戻って復活していくのを感じる"
            ],
            gradientFrom: "from-purple-400",
            gradientTo: "to-pink-500"
        }
    ];

    return (
        <section className="py-24 md:py-32 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
                    {systems.map((sys, idx) => (
                        <SystemCard key={idx} {...sys} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WisdomSystemDetails;
