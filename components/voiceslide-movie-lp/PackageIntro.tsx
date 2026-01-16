export default function PackageIntro() {
    return (
        <section id="package-intro" className="py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white text-center relative overflow-hidden">

            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/30 blur-3xl rounded-full -z-10 animate-pulse"></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="inline-block border border-yellow-400/50 bg-yellow-400/10 px-6 py-2 rounded-full text-yellow-300 font-bold mb-8 animate-bounce">
                    【今回限定】
                </div>

                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">
                    <span className="inline-block">VoiSlide Movie × YouTube発信</span><br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500">
                        仕組み化完全パッケージ
                    </span>
                </h2>

                <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 max-w-2xl mx-auto">
                    <p className="text-lg md:text-xl leading-relaxed mb-4">
                        システム単体だけではなく、
                    </p>
                    <ul className="text-left space-y-3 inline-block mx-auto mb-6 text-lg font-bold">
                        <li className="flex items-center gap-2">
                            <span>🎁</span> YouTube発信のノウハウ
                        </li>
                        <li className="flex items-center gap-2">
                            <span>🎁</span> 1音声から10コンテンツを自動生成する仕組み
                        </li>
                        <li className="flex items-center gap-2">
                            <span>🎁</span> VoiSlide Movie Zoom活用セミナー
                        </li>
                    </ul>
                    <p className="text-lg">
                        も含めた、完全パッケージを<br />
                        <span className="text-yellow-300 font-bold text-2xl">先行100名限定</span>
                        でご提供します。
                    </p>
                </div>
            </div>
        </section>
    );
}
