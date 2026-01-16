"use client";

import CountdownTimerLP from "./CountdownTimerLP";

export default function SpecialOffer() {
    // Set target date to Jan 19th (Sunday) 23:59:00
    const targetDate = "2026-01-19T23:59:00+09:00";

    return (
        <section className="py-16 bg-gradient-to-br from-indigo-900 to-slate-900 text-white relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">

                <div className="inline-block px-6 py-2 bg-red-600 text-white font-bold rounded-full mb-8 animate-bounce shadow-lg shadow-red-500/30">
                    ⚠︎ 今回だけの限定案内
                </div>

                <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                        特別パッケージ
                    </span>
                    <br className="md:hidden" />
                    申し込み受付中
                </h2>

                <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                    このページをご覧の方限定で、通常価格よりもお得な<br className="hidden md:inline" />
                    特別プランをご用意しました。この機会をお見逃しなく。
                </p>

                {/* Countdown Timer */}
                <div className="mb-12">
                    <p className="text-sm font-bold text-red-400 mb-4 tracking-widest uppercase">
                        Offer Ends In
                    </p>
                    <CountdownTimerLP targetDate={targetDate} />
                </div>

                {/* CTA Button */}
                <button
                    onClick={() => {
                        // Scroll to Package Intro section
                        const el = document.getElementById("package-intro");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="group relative px-10 py-5 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-full text-xl md:text-2xl font-bold shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                        パッケージ詳細・お申し込みはこちら
                        <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                    </span>
                    <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out -skew-x-12 origin-left" />
                </button>

            </div>
        </section>
    );
}
