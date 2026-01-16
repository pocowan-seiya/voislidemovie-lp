export default function FunctionDetails() {
    const functions = [
        {
            id: 1,
            title: "スマート音声クレンジング（自動カット）",
            icon: "🎤",
            desc: "「えー」「あのー」といったフィラー（不要語）や、長い無音時間をAIが自動で検知し、自然な流れになるよう精密にカットします。",
            perfectFor: "「えー」「あのー」が多くて、編集が大変な人"
        },
        {
            id: 2,
            title: "AIデザイン・アーキテクト（独自生成エンジン）",
            icon: "🎨",
            desc: "既存の型に当てはめるのではなく、スライドごとにAIが最適なHTML/CSSをゼロから書き上げます。話している内容の「重み」や「感情」を理解して視覚化します。",
            perfectFor: "デザインのセンスに自信がない人"
        },
        {
            id: 3,
            title: "パーソナライズ・デザインシステム",
            icon: "🌈",
            desc: "「明朝体」で上品に、「ゴシック体」でモダンに。コンテンツの雰囲気に合わせ、宇宙や自然などの洗練されたカラーテーマを一瞬で適用します。",
            perfectFor: "自分のブランドカラーで統一したい人"
        },
        {
            id: 4,
            title: "インテリジェント・画像連携",
            icon: "🖼️",
            desc: "ユーザーがアップロードした画像をAIが認識し、スライド内の最適な位置に自動で組み込みます。テキストと画像が重ならないようレイアウトも調整。",
            perfectFor: "画像を使ったビジュアル重視の動画を作りたい人"
        },
        {
            id: 5,
            title: "高度なアウトライン構築・編集機能",
            icon: "📝",
            desc: "10分以上の長い独り言でも、AIが論理的な「導入・本題・結論」の構成にまとめ直します。チャットベースのフィードバックで修正も可能。",
            perfectFor: "音声を録ったけど、構成がバラバラな人"
        },
        {
            id: 6,
            title: "マルチアウトプット・デリバリー",
            icon: "📦",
            desc: "フルHD動画生成はもちろん、スライドを画像(PNG)として一括ダウンロード可能。Instagramのカルーセル投稿やブログの図解としてそのまま活用できます。",
            perfectFor: "SNS投稿にも幅広く活用したい人"
        },
        {
            id: 7,
            title: "デバイス・セーフティ（集中生成機能）",
            icon: "⚡",
            desc: "長い動画の生成中もPCが眠らないよう自動制御。長時間作業も安心してAIに任せられます。",
            perfectFor: "生成中に他の作業をしたい人"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-5xl mx-auto px-6">

                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        VoiSlide Movie の7つの主要機能
                    </h2>
                    <p className="text-lg text-slate-600">
                        VoiSlide Movie は、単なる動画編集ツールではありません。<br />
                        あなたの発信を加速させる次世代のコンテンツ制作エンジンです。
                    </p>
                </div>

                <div className="grid gap-8">
                    {functions.map((func) => (
                        <div key={func.id} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col md:flex-row gap-6 hover:shadow-lg transition-shadow">
                            <div className="text-5xl bg-white w-20 h-20 flex items-center justify-center rounded-2xl shadow-sm border border-slate-100 shrink-0">
                                {func.icon}
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-xs font-bold text-slate-400 tracking-wider">FUNCTION {func.id.toString().padStart(2, '0')}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{func.title}</h3>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    {func.desc}
                                </p>
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 text-sm font-bold rounded-lg">
                                    <span className="text-blue-500">👍</span> {func.perfectFor}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Specs */}
                <div className="mt-20 p-8 bg-slate-900 text-slate-300 rounded-3xl">
                    <h3 className="text-2xl font-bold text-white mb-6 border-b border-slate-800 pb-4">技術仕様</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <p className="font-bold text-white mb-2">【対応API】</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Google Gemini API</li>
                                <li>OpenAI API</li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold text-white mb-2">【対応ファイル形式】</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>音声入力：MP3, WAV, M4A</li>
                                <li>動画出力：MP4（フルHD 1920x1080）</li>
                                <li>スライド出力：PNG（ZIP形式）</li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold text-white mb-2">【利用環境】</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>ブラウザ版（Chrome, Safari, Edge, Firefox）</li>
                                <li>インターネット接続が必要</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
