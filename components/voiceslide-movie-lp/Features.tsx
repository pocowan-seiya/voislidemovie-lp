export default function Features() {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />

            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-2xl md:text-5xl font-bold text-center mb-20 tracking-tight">
                    VoiSlide Movie の<br className="md:hidden" />3つの特徴
                </h2>

                <div className="space-y-24">

                    {/* Feature 1 */}
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 order-2 md:order-1">
                            <div className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-bold mb-4 border border-blue-500/30">
                                FEATURE 01
                            </div>
                            <h3 className="text-3xl font-bold mb-6">音声を録るだけで、<br /><span className="text-blue-400">YouTube動画が自動生成</span></h3>
                            <ul className="space-y-4 text-slate-300 text-lg">
                                <li className="flex items-center gap-3">
                                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    音声を自動で文字起こし
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    スライド資料を自動作成
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    音声とスライドを同期
                                </li>
                            </ul>
                            <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10">
                                <p className="text-sm text-slate-400">得られる効果</p>
                                <p className="text-xl font-bold text-white mt-1">制作時間：3時間 → 15分（90%削減）</p>
                            </div>
                        </div>
                        <div className="flex-1 order-1 md:order-2 flex justify-center relative">
                            <div className="w-full max-w-md aspect-square bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl opacity-90 blur-xl absolute scale-90" />
                            <div className="w-full max-w-md aspect-square bg-slate-800 rounded-3xl border border-slate-700 relative z-10 overflow-hidden group">
                                <img src="/images/voiceslide-movie-lp/feature_mic.png" alt="Microphone Icon" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 order-1 flex justify-center relative">
                            <div className="w-full max-w-md aspect-square bg-gradient-to-br from-yellow-500 to-red-500 rounded-3xl opacity-90 blur-xl absolute scale-90" />
                            <div className="w-full max-w-md aspect-square bg-slate-800 rounded-3xl border border-slate-700 relative z-10 overflow-hidden group">
                                <img src="/images/voiceslide-movie-lp/feature_bulb.png" alt="Idea Bulb Icon" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                        </div>
                        <div className="flex-1 order-2">
                            <div className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-bold mb-4 border border-yellow-500/30">
                                FEATURE 02
                            </div>
                            <h3 className="text-3xl font-bold mb-6">ひらめきの瞬間を、<br /><span className="text-yellow-400">そのまま動画にできる</span></h3>
                            <ul className="space-y-4 text-slate-300 text-lg">
                                <li className="flex items-center gap-3">
                                    <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    "言い直し"は不要
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    鮮度の高いひらめきをそのまま動画に
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    自分のエッセンスをコンテンツ化
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 order-2 md:order-1">
                            <div className="inline-block px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-bold mb-4 border border-green-500/30">
                                FEATURE 03
                            </div>
                            <h3 className="text-3xl font-bold mb-6">買い切り型で、<br /><span className="text-green-400">永久に使い放題</span></h3>
                            <ul className="space-y-4 text-slate-300 text-lg">
                                <li className="flex items-center gap-3">
                                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    月額課金ではなく、買い切り型
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    一度購入すれば、永久に使い放題
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    月間利用回数：無制限
                                </li>
                            </ul>
                            <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10">
                                <p className="text-sm text-slate-400">コストパフォーマンス</p>
                                <p className="text-xl font-bold text-white mt-1">1動画生成 = 約80円 (API利用料)</p>
                            </div>
                        </div>
                        <div className="flex-1 order-1 md:order-2 flex justify-center relative">
                            <div className="w-full max-w-md aspect-square bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl opacity-90 blur-xl absolute scale-90" />
                            <div className="w-full max-w-md aspect-square bg-slate-800 rounded-3xl border border-slate-700 relative z-10 overflow-hidden group">
                                <img src="/images/voiceslide-movie-lp/feature_asset.png" alt="Asset Icon" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
