export default function HowItWorks() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                <div className="text-center mb-20 animate-fade-in-up">
                    <p className="text-blue-500 font-bold tracking-widest mb-4">THREE STEPS</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        音声ファーストの新常識<br />
                        VoiSlide Movie
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        VoiSlide Movie は、<br />
                        <span className="font-bold text-slate-800">音声を録るだけで、YouTube動画が自動で完成する</span><br />
                        という、これまでの"発信の常識"を完全に書き換えるシステムです。
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">

                    {/* STEP 1 */}
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-xl transition-shadow group">
                        <div className="aspect-video bg-slate-200 rounded-xl mb-6 overflow-hidden relative">
                            <img src="/images/voiceslide-movie-lp/step1.png" alt="Step 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="mb-4">
                            <span className="block text-xs font-bold text-blue-500 mb-1">STEP 1</span>
                            <h3 className="text-2xl font-bold text-slate-900">音声を録る</h3>
                        </div>
                        <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                            スマホでも、PCでも、どこでもOK。<br />
                            思いついた瞬間に、音声を録るだけ。<br />
                            5分〜20分の音声を録ります。
                        </p>
                        <div className="bg-white p-4 rounded-lg text-sm text-slate-500 border border-slate-100">
                            <p className="font-bold text-slate-700 mb-2">収録のコツ</p>
                            <ul className="space-y-1 text-xs">
                                <li>✅ 静かな場所で録る</li>
                                <li>✅ スマホのマイクでも十分</li>
                                <li>✅ "言い直し"は不要</li>
                            </ul>
                        </div>
                    </div>

                    {/* STEP 2 */}
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-xl transition-shadow group">
                        <div className="aspect-video bg-slate-200 rounded-xl mb-6 overflow-hidden relative">
                            <img src="/images/voiceslide-movie-lp/step2_real.png" alt="Step 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="mb-4">
                            <span className="block text-xs font-bold text-cyan-500 mb-1">STEP 2</span>
                            <h3 className="text-2xl font-bold text-slate-900">システムにアップロード</h3>
                        </div>
                        <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                            VoiSlide Movie に音声をアップロード。<br />
                            テンプレートを選択するだけ。<br />
                            あとは「生成」ボタンを押すだけ。
                        </p>
                        <div className="bg-white p-4 rounded-lg text-sm text-slate-500 border border-slate-100">
                            <p className="font-bold text-slate-700 mb-2">操作は簡単</p>
                            <ul className="space-y-1 text-xs">
                                <li>✅ 音声ファイルをD&D</li>
                                <li>✅ テンプレートを選択</li>
                                <li>✅ 「生成」をクリック</li>
                            </ul>
                        </div>
                    </div>

                    {/* STEP 3 */}
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
                        <div className="aspect-video bg-slate-200 rounded-xl mb-6 overflow-hidden relative">
                            <img src="/images/voiceslide-movie-lp/step3_real.png" alt="Step 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="mb-4">
                            <span className="block text-xs font-bold text-amber-500 mb-1">STEP 3</span>
                            <h3 className="text-2xl font-bold text-slate-900">動画が自動で完成</h3>
                        </div>
                        <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                            たった10分で、音声とスライドが同期した「スライド動画」が生成されます。<br />
                            文字起こし、資料作成、同期。<br />
                            すべて自動です。
                        </p>
                        <div className="bg-amber-50 p-4 rounded-lg text-sm text-amber-800 border border-amber-100">
                            <p className="font-bold mb-1">YouTube動画制作時間</p>
                            <p className="text-lg font-bold">3時間 → 15分</p>
                            <p className="text-xs opacity-75">（90%削減）</p>
                        </div>
                    </div>

                </div>

                <div className="mt-16 text-center">
                    <p className="text-xl text-slate-800 font-bold mb-2">もう、編集に時間を取られない。もう、"作り込む"必要はない。</p>
                    <p className="text-lg text-slate-600">音声を録る → 動画が生まれる。たったこれだけです。</p>
                </div>

            </div>
        </section>
    );
}
