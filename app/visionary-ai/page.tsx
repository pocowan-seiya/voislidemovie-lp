"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import CountdownTimer from "@/components/CountdownTimer";

export default function VisionaryAILP() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30 overflow-x-hidden">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0">
                <Image
                    src="/lp_hero_visionary.png"
                    alt="Visionary Background"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black"></div>
            </div>

            {/* Navigation */}
            <nav
                className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="text-xl font-bold tracking-tighter bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                        Visionary AI
                    </div>
                    <a
                        href="https://pocowa.com/p/r/0yohphct"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-medium transition-all hover:scale-105"
                    >
                        Join the Team
                    </a>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
                <div className="animate-fade-in-up space-y-8 max-w-4xl mx-auto">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-medium tracking-widest uppercase mb-4 backdrop-blur-md">
                        New Program
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight drop-shadow-2xl">
                        <span className="block bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
                            Visionary AI
                        </span>
                        <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-emerald-400 bg-clip-text text-transparent mt-2">
                            Team Building
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-lg">
                        プレイヤーから、ビジョナリーへ。<br />
                        AIをプレイヤーに、あなたは監督になる。
                    </p>
                    <div className="pt-8">
                        <a
                            href="https://pocowa.com/p/r/0yohphct"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-block px-8 py-4 bg-white text-black rounded-full font-bold text-lg tracking-wide hover:scale-105 transition-transform duration-300 overflow-hidden shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
                        >
                            <span className="relative z-10">Start Building Your Team</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-emerald-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        </a>
                    </div>
                </div>

                {/* Video Embed */}
                <div className="mt-16 w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/20 border border-white/10">
                    <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                        <iframe
                            src="https://player.vimeo.com/video/1141644958?h=85c2349082&badge=0&autopause=0&player_id=0&app_id=58479"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            title="Visionary AI Teaser"
                        ></iframe>
                    </div>
                </div>

                {/* Countdown Timer 1 */}
                <div className="mt-16 w-full">
                    <CountdownTimer targetDate="2025-12-05T23:59:59" />
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-zinc-400">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </div>
            </section>

            {/* Philosophy / Message Section */}
            <section className="relative z-10 py-32 px-6 bg-gradient-to-b from-black via-zinc-900/20 to-black">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <h2 className="text-2xl md:text-4xl font-bold leading-relaxed tracking-wide">
                        AIが「プレイヤー」として完成する今、<br />
                        私たちは<span className="text-purple-400">「ビジョナリー」</span>へと進化する。
                    </h2>
                    <div className="space-y-8 text-lg md:text-xl text-zinc-300 leading-loose font-light">
                        <p>
                            言葉を紡ぐ、デザインを描く、資料を創る。<br />
                            AIは今、驚異的なスピードで進化し、<br />
                            「プレイヤー」として申し分のないレベルに到達しようとしています。
                        </p>
                        <p>
                            そう遠くない未来、"手を動かすこと"の多くは彼らに委ねられるでしょう。<br />
                            その時、私たち人間の本来の力、<br />
                            そして最も大切になるものとは何か。
                        </p>
                        <p className="text-2xl md:text-3xl font-bold text-white py-4">
                            それは「ビジョン」です。
                        </p>
                        <p>
                            ビジョンとは、単なる目標ではありません。<br />
                            私たちの意識そのものであり、原動力であり、生きるエネルギーそのものです。<br />
                            「こうありたい」「これを創りたい」という熱量こそが、<br />
                            AIにはない、私たちだけの羅針盤となります。
                        </p>
                        <p>
                            今こそ、私たちは"やること"に追われるプレイヤーを卒業し、<br />
                            AIという最強のパートナーを指揮する「監督」になる時です。<br />
                            ビジョンを描き、それを具現化するために<br />
                            自分の意識でAIという名の"叡智"を使う。
                        </p>
                        <p>
                            このプログラムは、単なるスキルアップではありません。<br />
                            あなたが本来持っている「ビジョン」に集中し、<br />
                            それを現実のものとしていくための、<br />
                            <span className="text-emerald-400 font-bold">「ビジョナリー」への覚醒と創造の旅</span>です。
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Concept */}
            <section className="relative z-10 py-32 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                                あなたは、<br />
                                プレイヤーから<br />
                                <span className="text-emerald-400">「監督」</span>になる。
                            </h2>
                            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
                                <p>
                                    ビジョンをありありと見て、表現する<br />
                                    それを言葉やデザインにしていくのはAIとなる。
                                </p>
                                <p>
                                    あなたはもう、"やること"にフォーカスするプレイヤーではありません。<br />
                                    AIという優秀なプレイヤーたちを指揮し、<br />
                                    "起きる"ビジョンを実現する「ディレクター・監督」です。
                                </p>
                                <p className="font-bold text-white text-xl border-l-4 border-purple-500 pl-6 py-2">
                                    あなたのビジネスを次の視座にシフトしていくための、<br />
                                    次世代のチームビルディング・プログラム。
                                </p>
                            </div>
                        </div>
                        <div className="relative h-[500px] w-full bg-zinc-900 rounded-3xl border border-white/10 overflow-hidden group shadow-2xl shadow-purple-900/20">
                            <Image
                                src="/lp_core_resonance.png"
                                alt="Resonance Concept"
                                fill
                                className="object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="text-sm font-mono text-emerald-400 mb-2">CORE CONCEPT</div>
                                <div className="text-2xl font-bold text-white">From Player to Director.</div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-24 grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Visionary",
                                desc: "「監督」としての視座",
                                icon: "👁️",
                            },
                            {
                                title: "Team",
                                desc: "AIを「プレイヤー」に",
                                icon: "🤖",
                            },
                            {
                                title: "Shift",
                                desc: "ビジネスの「次元上昇」",
                                icon: "🚀",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center group backdrop-blur-sm"
                            >
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-zinc-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Organization Map Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-zinc-950">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-500 opacity-20 blur-[100px]"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-emerald-400">
                                AI Organization Map
                            </span>
                        </h2>
                        <p className="text-xl text-zinc-400">
                            役割を理解し、適材適所で配置する
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        {/* Level 1: Director */}
                        <div className="flex justify-center mb-12 relative">
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 p-1 shadow-[0_0_30px_rgba(52,211,153,0.3)]">
                                    <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                    </div>
                                </div>
                                <div className="mt-4 text-center">
                                    <span className="block text-sm font-bold text-emerald-400 tracking-wider uppercase">Director</span>
                                    <span className="text-xl font-bold text-white">YOU</span>
                                </div>
                            </div>
                            {/* Connecting Line */}
                            <div className="absolute top-24 left-1/2 w-px h-12 bg-gradient-to-b from-emerald-500 to-purple-500 -translate-x-1/2"></div>
                        </div>

                        {/* Level 2: Brains */}
                        <div className="flex justify-center mb-12 relative">
                            <div className="relative z-10 bg-zinc-900/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 w-full max-w-2xl text-center shadow-[0_0_30px_rgba(168,85,247,0.1)]">
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-zinc-900 px-4 text-purple-400 font-bold text-sm border border-purple-500/30 rounded-full">
                                    Strategic Partners
                                </div>
                                <div className="flex justify-center gap-8 md:gap-16 items-center py-4">
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="w-16 h-16 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5c0-5.523 4.477-10 10-10Z" /><path d="M8.5 8.5a2.5 2.5 0 0 0-2.5 2.5H5a4.5 4.5 0 0 1 4.5-4.5v1Z" /><path d="M15.5 15.5a2.5 2.5 0 0 0 2.5-2.5H19a4.5 4.5 0 0 1-4.5 4.5v-1Z" /></svg>
                                        </div>
                                        <span className="font-bold text-zinc-200">Gemini</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="w-16 h-16 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400"><path d="M12 12c2-2.96 0-7-1-8 0 3.028-2.313 5.733-2.711 5.993C4.687 11.113 2 12 2 12s6 2 9 7c0 0 2-5 8-6 0 0-6-3-7-1Z" /></svg>
                                        </div>
                                        <span className="font-bold text-zinc-200">GPT-5</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="w-16 h-16 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
                                        </div>
                                        <span className="font-bold text-zinc-200">Agent</span>
                                    </div>
                                </div>
                                <p className="text-sm text-zinc-400 mt-2">総合的なブレイン・参謀</p>
                            </div>
                            {/* Connecting Line */}
                            <div className="absolute top-full left-1/2 w-px h-12 bg-gradient-to-b from-purple-500 to-blue-500 -translate-x-1/2"></div>
                        </div>

                        {/* Level 3: Players */}
                        <div className="relative">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-zinc-900 px-4 text-blue-400 font-bold text-sm border border-blue-500/30 rounded-full z-10">
                                Execution Specialists
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                                {/* Player 1 */}
                                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 flex flex-col items-center hover:border-blue-500/50 transition-colors duration-300">
                                    <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><line x1="3" x2="21" y1="9" y2="9" /><line x1="9" x2="9" y1="21" y2="9" /></svg>
                                    </div>
                                    <h4 className="font-bold text-white mb-1">Web制作AI</h4>
                                </div>
                                {/* Player 2 */}
                                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 flex flex-col items-center hover:border-blue-500/50 transition-colors duration-300">
                                    <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" /></svg>
                                    </div>
                                    <h4 className="font-bold text-white mb-1">資料作成AI</h4>
                                </div>
                                {/* Player 3 */}
                                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 flex flex-col items-center hover:border-blue-500/50 transition-colors duration-300">
                                    <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                                    </div>
                                    <h4 className="font-bold text-white mb-1">画像・動画作成AI</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Curriculum Steps */}
            <section className="relative z-10 py-32 px-6 bg-zinc-900/30 border-y border-white/5">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-sm font-mono text-purple-400 tracking-widest uppercase mb-4">
                            Curriculum
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold">Process of Building</h3>
                    </div>

                    <div className="space-y-24">
                        {/* Step 1 */}
                        <div className="group relative grid md:grid-cols-12 gap-8 items-center">
                            <div className="md:col-span-2 text-center md:text-right">
                                <div className="text-6xl font-bold text-white/10 group-hover:text-purple-500/20 transition-colors">
                                    01
                                </div>
                            </div>
                            <div className="md:col-span-5">
                                <h4 className="text-2xl font-bold mb-4 text-purple-400">
                                    出会う・見極める
                                </h4>
                                <h5 className="text-xl font-bold text-white mb-6">
                                    「スター選手」たちを知る
                                </h5>
                                <ul className="space-y-4 text-zinc-400">
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0"></span>
                                        <span>
                                            <strong className="text-zinc-200">スター選手の紹介:</strong>{" "}
                                            Gemini 3, GPT-5など、彼らの「得意ポジション」と「性格」を知る。
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0"></span>
                                        <span>
                                            <strong className="text-zinc-200">プレイヤーとしてのAI:</strong>{" "}
                                            単なるツールではない。自律的に動く彼らのポテンシャルを体感する。
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0"></span>
                                        <span>
                                            <strong className="text-zinc-200">スカウティング:</strong>{" "}
                                            どのAIが自分のチームに必要なのか、監督の視点でトライアルを行う。
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="md:col-span-5 relative h-64 md:h-full min-h-[300px] rounded-2xl overflow-hidden border border-white/10 shadow-lg shadow-purple-900/20">
                                <Image
                                    src="/lp_step1_encounter.png"
                                    alt="Step 1 Encounter"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-black/40"></div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="group relative grid md:grid-cols-12 gap-8 items-center">
                            <div className="md:col-span-5 order-2 md:order-1 relative h-64 md:h-full min-h-[300px] rounded-2xl overflow-hidden border border-white/10 shadow-lg shadow-blue-900/20">
                                <Image
                                    src="/lp_step2_integration.png"
                                    alt="Step 2 Integration"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-bl from-blue-900/40 to-black/40"></div>
                            </div>
                            <div className="md:col-span-5 order-1 md:order-2">
                                <h4 className="text-2xl font-bold mb-4 text-blue-400">
                                    任せる・委ねる
                                </h4>
                                <h5 className="text-xl font-bold text-white mb-6">
                                    監督としてのAIへの叡智に委ねる
                                </h5>
                                <ul className="space-y-4 text-zinc-400">
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                                        <span>
                                            <strong className="text-zinc-200">権限委譲のトレーニング:</strong>{" "}
                                            「自分でやった方が早い」を手放し、AIプレイヤーに任せる勇気を持つ。
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                                        <span>
                                            <strong className="text-zinc-200">ビジョンを語る:</strong>{" "}
                                            AIに対して、作業指示ではなく「ビジョン」を語り、動いてもらう方法を学ぶ。
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="md:col-span-2 order-3 text-center md:text-left">
                                <div className="text-6xl font-bold text-white/10 group-hover:text-blue-500/20 transition-colors">
                                    02
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="group relative grid md:grid-cols-12 gap-8 items-center">
                            <div className="md:col-span-2 text-center md:text-right">
                                <div className="text-6xl font-bold text-white/10 group-hover:text-emerald-500/20 transition-colors">
                                    03
                                </div>
                            </div>
                            <div className="md:col-span-5">
                                <h4 className="text-2xl font-bold mb-4 text-emerald-400">
                                    最強の布陣を組む
                                </h4>
                                <h5 className="text-xl font-bold text-white mb-6">
                                    あなただけの「ビジョンチーム」を結成する
                                </h5>
                                <ul className="space-y-4 text-zinc-400">
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                                        <span>
                                            <strong className="text-zinc-200">監督としての最終決定:</strong>{" "}
                                            あなたのビジョンを実現するために最適なメンバー（AI）を選抜。
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                                        <span>
                                            <strong className="text-zinc-200">チームビルディング:</strong>{" "}
                                            それぞれのAIの特性を活かした、あなただけの最強のフォーメーションを完成させる。
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="md:col-span-5 relative h-64 md:h-full min-h-[300px] rounded-2xl overflow-hidden border border-white/10 shadow-lg shadow-emerald-900/20">
                                <Image
                                    src="/lp_step3_teambuilding.png"
                                    alt="Step 3 Team Building"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 to-black/40"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            {/* Outcomes Section */}
            <section className="relative z-10 py-32 px-6 bg-gradient-to-b from-black to-zinc-900/50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                            The Future You
                        </h2>
                        <p className="text-zinc-400 text-lg">このプログラムを経て、あなたはこう変わる。</p>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                title: "プレイヤーからの卒業",
                                desc: "「自分でやった方が早い」という信念から解放され、AIに任せて「指揮する」という、意識の自由を手に入れることができます。"
                            },
                            {
                                title: "思考と実装のタイムラグ・ゼロ",
                                desc: "「あ、これやりたい」と思ったビジョンを、AIチームがそれを形にする。アイデアが鮮度の高いまま、具現化されていくスムーズさと簡単さを体感します。"
                            },
                            {
                                title: "あなたと共鳴する「チーム」の獲得",
                                desc: "ただの便利ツールではない。お互いの性格やビジョンを理解し、適切に動いてくれる、AIパートナーとチームを構築できます。"
                            },
                            {
                                title: "ビジョナリーとしての覚醒",
                                desc: "目の前の\"やること\"から距離がおかれ、視座が高まります。それによって、あなたは「どうやるか」から、「何が起こるのか」にエネルギーを注げるようになります。"
                            },
                            {
                                title: "ビジネスの次元上昇(シフト)",
                                desc: "1人の限界を超え、AIチームと共にビジネスを拡大する。AIの無限の可能性を引き出し、軽やかに価値を生み出す体制が完成します。"
                            }
                        ].map((item, index) => (
                            <div key={index} className="flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-all group">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors mt-1">
                                    <span className="text-emerald-400 font-bold text-xl">{index + 1}</span>
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-emerald-50 transition-colors mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-zinc-400 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative z-10 py-32 px-6">
                <div className="max-w-5xl mx-auto">
                    {/* Countdown Timer 2 */}
                    <div className="mb-20">
                        <CountdownTimer targetDate="2025-12-05T23:59:59" />
                    </div>
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Your Team Plans</h2>
                        <p className="text-zinc-400">サポートの厚さに応じて2つのプランを用意しました。</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Plan A */}
                        <div className="relative p-8 rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm hover:border-purple-500/50 transition-colors group">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-zinc-800 border border-white/10 rounded-full text-xs font-bold uppercase tracking-wider text-zinc-400">
                                Standard
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-center">Plan A</h3>
                            <p className="text-zinc-400 text-center text-sm mb-8">
                                まずはあなた専用のチームを構築し、<br />ビジネスをシフトさせていきたい方向け（2ヶ月間のプログラム）
                            </p>
                            <div className="text-center mb-8">
                                <span className="text-4xl font-bold">¥49,800</span>
                                <span className="text-zinc-500 text-sm ml-2">(税込)</span>
                            </div>
                            <ul className="space-y-4 mb-8 border-t border-white/5 pt-8">
                                <li className="flex items-center gap-3 text-sm">
                                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    動画コンテンツ・ワークショップ参加（計4回以上）
                                </li>
                                <li className="flex items-center gap-3 text-sm">
                                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    期間中チャット無制限（グループor個別）
                                </li>
                                <li className="flex items-center gap-3 text-sm font-bold text-white">
                                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    個別セッション：1回
                                </li>
                            </ul>
                            <a
                                href="https://pocowa.com/p/r/0yohphct"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 font-bold transition-all group-hover:scale-[1.02]"
                            >
                                Select Standard
                            </a>
                        </div>

                        {/* Plan B */}
                        <div className="relative p-8 rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-emerald-900/10 to-black backdrop-blur-sm hover:border-emerald-400 transition-colors group shadow-2xl shadow-emerald-900/20">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-emerald-500 text-black rounded-full text-xs font-bold uppercase tracking-wider">
                                Recommended
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-center text-emerald-400">Plan B</h3>
                            <p className="text-zinc-400 text-center text-sm mb-8">
                                運用後の「微調整」や「更なる拡大」<br />まで相談したい方向け（2ヶ月間のプログラム）
                            </p>
                            <div className="text-center mb-8">
                                <span className="text-4xl font-bold text-white">¥62,800</span>
                                <span className="text-zinc-500 text-sm ml-2">(税込)</span>
                            </div>
                            <ul className="space-y-4 mb-8 border-t border-white/5 pt-8">
                                <li className="flex items-center gap-3 text-sm">
                                    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    動画コンテンツ・ワークショップ参加（計4回以上）
                                </li>
                                <li className="flex items-center gap-3 text-sm">
                                    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    期間中チャット無制限（グループor個別）
                                </li>
                                <li className="flex items-center gap-3 text-sm font-bold text-white">
                                    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    個別セッション：2回
                                    <span className="text-xs font-normal text-emerald-400/70 ml-auto border border-emerald-500/30 px-2 py-0.5 rounded">Follow-up</span>
                                </li>
                            </ul>
                            <a
                                href="https://pocowa.com/p/r/0yohphct"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold transition-all group-hover:scale-[1.02] shadow-lg shadow-emerald-500/20"
                            >
                                Select Premium
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Closing */}
            <section className="relative z-10 py-32 px-6 text-center">
                <div className="max-w-3xl mx-auto space-y-12">
                    <div className="text-6xl mb-8">✨</div>
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                        あなたが描くビジョンを、<br />
                        彼らが実現してくれる。
                    </h2>
                    <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
                        <p>
                            監督の仕事は、プレイヤーよりも上手くプレイすることではありません。<br />
                            <strong className="text-white">「誰よりも遠くを見ること」</strong>です。
                        </p>
                        <p>
                            AIという最強のプレイヤーたちと共に、<br />
                            あなたのビジネスを、まだ見ぬ高みへとシフトさせましょう。
                        </p>
                        <p>
                            さあ、あなただけのチームを率いて、<br />
                            新しいゲームを始めませんか？
                        </p>
                    </div>
                    <div className="pt-12">
                        <a
                            href="https://pocowa.com/p/r/0yohphct"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-12 py-5 bg-white text-black rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-xl hover:shadow-white/20"
                        >
                            Join the Visionary Team
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 py-12 border-t border-white/5 text-center text-zinc-600 text-sm">
                <p>&copy; 2025 Antigravity. All rights reserved.</p>
            </footer>
        </div>
    );
}
