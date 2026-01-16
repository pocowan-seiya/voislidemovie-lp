import CountdownTimerLP from "./CountdownTimerLP";

export default function Pricing() {
    return (
        <section className="py-24 bg-white border-t border-slate-100">
            <div className="max-w-4xl mx-auto px-6 text-center">

                <h2 className="text-3xl font-bold text-slate-900 mb-12">
                    合計価値と特別価格
                </h2>

                {/* Value Stack */}
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 mb-12 text-left max-w-xl mx-auto shadow-inner">
                    <ul className="space-y-4 text-lg text-slate-700">
                        <li className="flex justify-between border-b border-slate-200 pb-2">
                            <span>① システム永久ライセンス</span>
                            <span className="font-bold">¥9,800</span>
                        </li>
                        <li className="flex justify-between border-b border-slate-200 pb-2">
                            <span>② 動画講座5本</span>
                            <span className="font-bold">¥19,800</span>
                        </li>
                        <li className="flex justify-between border-b border-slate-200 pb-2">
                            <span>③ 発信の仕組み化</span>
                            <span className="font-bold">¥19,800</span>
                        </li>
                        <li className="flex justify-between border-b border-slate-200 pb-2">
                            <span>④ Zoomセミナー</span>
                            <span className="font-bold">¥5,000</span>
                        </li>
                    </ul>
                    <div className="mt-6 flex justify-between items-end text-slate-900">
                        <span className="text-xl font-bold">合計価値</span>
                        <span className="text-3xl font-bold line-through text-slate-400">¥54,400相当</span>
                    </div>
                </div>

                {/* Price Box */}
                <div className="bg-gradient-to-b from-red-600 to-red-700 text-white p-1 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <div className="bg-red-600 rounded-[22px] p-8 md:p-12 border border-red-400">
                        <div className="inline-block bg-yellow-400 text-red-900 px-6 py-2 rounded-full font-bold text-lg mb-6 animate-pulse">
                            🔥 超早割（3日間限定）
                        </div>

                        <div className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter">
                            ¥7,800 <span className="text-2xl font-normal opacity-80">（税込）</span>
                        </div>

                        <p className="text-red-100 mb-8 font-medium">
                            2026年1月16日（木）20時 〜 1月19日（日）23時59分
                        </p>

                        <div className="bg-black/20 rounded-xl p-6 mb-8">
                            <CountdownTimerLP targetDate="2026-01-19T23:59:00+09:00" />
                        </div>

                        <a
                            href="https://pocowa.com/p/r/IIBEQRAy"
                            className="block w-full bg-yellow-400 text-red-900 font-bold text-2xl md:text-3xl py-6 rounded-full shadow-[0_4px_0_rgb(180,83,9)] hover:translate-y-1 hover:shadow-none transition-all active:bg-yellow-500"
                        >
                            今すぐ購入する
                            <span className="block text-sm font-normal mt-1 opacity-80">（決済ページへ進む）</span>
                        </a>

                        <div className="mt-6 flex justify-center gap-8 text-sm font-medium text-red-200">
                            <p>👥 残り枠数：<span className="font-bold text-white">87/100名</span></p>
                        </div>
                    </div>
                </div>

                <p className="mt-8 text-slate-500 text-sm">
                    ※ 通常価格：¥9,800（2026年1月20日〜）<br />
                    ※ 先行100名限定です。100名に達した時点で販売終了となります。
                </p>

            </div>
        </section>
    );
}
