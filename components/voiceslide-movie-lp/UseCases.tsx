export default function UseCases() {
    const users = [
        {
            category: "YouTube発信・コンテンツ制作",
            items: [
                "編集に時間をかけたくない",
                "週3本以上投稿したい",
                "音声だけでYouTube動画を完結させたい"
            ]
        },
        {
            category: "スライド資料作成・プレゼン",
            items: [
                "音声だけでスライドを作りたい",
                "話すだけでプロ品質のスライドが欲しい",
                "資料作成に時間をかけたくない"
            ]
        },
        {
            category: "講師・コーチ・コンサルタント",
            items: [
                "オンライン講座を手軽に量産したい",
                "セミナー内容をそのまま動画にしたい",
                "話すのは得意だけど資料作りは苦手"
            ]
        },
        {
            category: "ビジネス・チーム共有",
            items: [
                "音声メモを資料に変換したい",
                "会議内容をスライド動画にまとめたい",
                "思考を整理して論理的な資料を作りたい"
            ]
        },
        {
            category: "SNS発信・インフルエンサー",
            items: [
                "Instagram・Xの投稿を音声で作りました",
                "カルーセル投稿用スライドを作りたい",
                "毎日投稿したい"
            ]
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-slate-900 mb-16">
                    VoiSlide Movie は、<br />こんな人におすすめ
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {users.map((user, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all">
                            <h3 className="text-lg font-bold text-blue-600 mb-4 pb-2 border-b border-slate-100">
                                {user.category}
                            </h3>
                            <ul className="space-y-2">
                                {user.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                                        <span className="text-blue-500 mt-0.5">✅</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Others */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-center items-center text-center">
                        <h3 className="text-lg font-bold text-slate-900 mb-4">
                            その他、あらゆる発信に
                        </h3>
                        <ul className="space-y-2 text-slate-600 text-sm">
                            <li>日常のひらめきをコンテンツ化</li>
                            <li>Podcastを動画化</li>
                            <li>音声だけで発信を完結</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
