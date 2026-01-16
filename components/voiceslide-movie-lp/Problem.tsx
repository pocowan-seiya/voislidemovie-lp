export default function Problem() {
    const problems = [
        "YouTube動画を作りたいけど、編集に時間がかかりすぎる",
        "週1本投稿するだけで精一杯。週3本なんて無理…",
        "サムネイル作成も、すべて別々に作らないといけない",
        "「発信したい」と思っても、作業に追われて、エネルギーが削がれる",
        "ひらめきの瞬間を、そのまま動画にしたいのに、編集で時間がかかる",
        "コミュニティ向けの動画コンテンツも、もっと手軽に作りたい"
    ];

    return (
        <section className="py-24 bg-slate-50 relative">
            <div className="max-w-4xl mx-auto px-6">

                <h2 className="text-3xl md:text-5xl font-bold text-center text-slate-900 mb-16">
                    こんな悩み、ありませんか？
                </h2>

                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-slate-100 mb-16">
                    <ul className="space-y-6">
                        {problems.map((problem, index) => (
                            <li key={index} className="flex items-start gap-4">
                                <span className="text-2xl mt-1">❌</span>
                                <span className="text-lg md:text-xl text-slate-700 font-medium">{problem}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="prose prose-lg text-slate-600 max-w-none bg-blue-50/50 p-8 md:p-12 rounded-3xl border border-blue-100">
                    <p className="font-bold text-xl text-slate-900 mb-6">
                        実は、僕自身も同じ悩みを抱えていました。
                    </p>
                    <p className="mb-4">
                        YouTube動画を週3本投稿しようと思ったら、
                    </p>
                    <ul className="list-none pl-0 space-y-2 mb-6 bg-white/60 p-6 rounded-xl border border-blue-100/50">
                        <li>・撮影：1本あたり30分</li>
                        <li>・編集：1本あたり2〜3時間</li>
                        <li>・サムネ作成：30分</li>
                    </ul>
                    <p className="mb-6 font-bold text-slate-800">
                        合計で、1本あたり3〜4時間。<br />
                        週3本なら、9〜12時間。
                    </p>
                    <p className="mb-8">
                        これでは、発信することが目的になってしまい、<br />
                        本当に伝えたいことを、エネルギーのまま届けることができませんでした。
                    </p>
                    <p className="text-xl font-bold text-center text-blue-600 mb-6">

                    </p>
                </div>

            </div>
        </section>
    );
}
