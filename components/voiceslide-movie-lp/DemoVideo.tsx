export default function DemoVideo() {
    return (
        <section id="demo-section" className="py-20 bg-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 text-center">

                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        まずは、この動画をご覧ください
                    </h2>
                    <p className="text-xl text-slate-600">
                        実際の画面を、すべてお見せします
                    </p>
                </div>

                {/* Video Frame */}
                <div className="relative mx-auto max-w-5xl">
                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-30 animate-pulse"></div>

                    <div className="relative bg-slate-900 rounded-2xl p-2 shadow-2xl border border-slate-700">
                        {/* Mock Browser Header */}
                        <div className="h-8 bg-slate-800 rounded-t-xl flex items-center px-4 gap-2 border-b border-slate-700 mb-0.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                            <div className="ml-4 flex-1 h-5 bg-slate-700/50 rounded-full text-[10px] text-slate-400 flex items-center justify-center font-mono">
                                voiceslide-movie.com/demo
                            </div>
                        </div>

                        <div className="relative w-full pt-[56.25%] bg-black rounded-b-xl overflow-hidden">
                            <iframe
                                src="https://player.vimeo.com/video/1154239979?h=f40b99d021&badge=0&autopause=0&player_id=0&app_id=58479"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                className="absolute top-0 left-0 w-full h-full"
                                title="VoiSlide Movie Demo"
                            />
                        </div>
                    </div>
                </div>

                <div className="bg-slate-50 p-8 rounded-2xl text-left border border-slate-200">
                    <p className="text-lg text-slate-700 leading-relaxed mb-4 font-bold">
                        この動画を観ると、
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <span className="text-green-500 text-xl font-bold">✅</span>
                            <span className="text-slate-600">どうやって音声だけで動画が完成するのか？</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-green-500 text-xl font-bold">✅</span>
                            <span className="text-slate-600">なぜこのシステムが、発信を画期的に変えていくのか？</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-green-500 text-xl font-bold">✅</span>
                            <span className="text-slate-600">たった10分で、音声からスライド動画が生まれる瞬間</span>
                        </li>
                    </ul>
                    <p className="mt-6 text-slate-700 font-medium">
                        が、すべてわかります。
                    </p>
                </div>
            </div>
        </section>
    );
}
