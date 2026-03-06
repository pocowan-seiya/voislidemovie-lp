export default function FunctionDetails() {
    const functions = [
        {
            id: 1,
            title: "スマート音声クレンジング（自動カット）",
            icon: "🎤",
            desc: "「えー」「あのー」といったフィラー（不要語）や、長い無音時間をAIが自動で検知し、自然な流れになるよう精密にカットします。",
            perfectFor: "「えー」「あのー」が多くて、編集が大変な人",
            color: "blue"
        },
        {
            id: 2,
            title: "AIデザイン・アーキテクト（独自生成エンジン）",
            icon: "🎨",
            desc: "既存の型に当てはめるのではなく、スライドごとにAIが最適なHTML/CSSをゼロから書き上げます。話している内容の「重み」や「感情」を理解して視覚化します。",
            perfectFor: "デザインのセンスに自信がない人",
            color: "blue"
        },
        {
            id: 3,
            title: "パーソナライズ・デザインシステム",
            icon: "🌈",
            desc: "「明朝体」で上品に、「ゴシック体」でモダンに。コンテンツの雰囲気に合わせ、宇宙や自然などの洗練されたカラーテーマを一瞬で適用します。",
            perfectFor: "自分のブランドカラーで統一したい人",
            color: "blue"
        },
        {
            id: 4,
            title: "インテリジェント・画像連携",
            icon: "🖼️",
            desc: "ユーザーがアップロードした画像をAIが認識し、スライド内の最適な位置に自動で組み込みます。テキストと画像が重ならないようレイアウトも調整。",
            perfectFor: "画像を使ったビジュアル重視の動画を作りたい人",
            color: "blue"
        },
        {
            id: 5,
            title: "高度なアウトライン構築・編集機能",
            icon: "📝",
            desc: "10分以上の長い独り言でも、AIが論理的な「導入・本題・結論」の構成にまとめ直します。チャットベースのフィードバックで修正も可能。",
            perfectFor: "音声を録ったけど、構成がバラバラな人",
            color: "blue"
        },
        {
            id: 6,
            title: "マルチアウトプット・デリバリー",
            icon: "📦",
            desc: "フルHD動画生成はもちろん、スライドを画像(PNG)として一括ダウンロード可能。Instagramのカルーセル投稿やブログの図解としてそのまま活用できます。",
            perfectFor: "SNS投稿にも幅広く活用したい人",
            color: "blue"
        },
        {
            id: 7,
            title: "デバイス・セーフティ（集中生成機能）",
            icon: "⚡",
            desc: "長い動画の生成中もPCが眠らないよう自動制御。長時間作業も安心してAIに任せられます。",
            perfectFor: "生成中に他の作業をしたい人",
            color: "blue"
        },
        {
            id: 8,
            title: "顔出しワイプ（PiP）",
            icon: "📹",
            desc: "動画にあなたの顔出し映像を円形ワイプとして重ねられます。位置（4隅）やサイズ（小・中・大）を自由に選択。音声カットと映像が自動で同期するので、口の動きがズレません。",
            perfectFor: "顔出しで親近感を出したい人",
            color: "rose",
            isNew: true
        },
        {
            id: 9,
            title: "縦長動画（9:16）対応",
            icon: "📱",
            desc: "横長（16:9）だけでなく、縦長（9:16）動画にも対応。YouTube Shorts、Instagram Reels、TikTokに最適なフォーマットでそのまま投稿できます。",
            perfectFor: "ショート動画でバズりたい人",
            color: "violet",
            isNew: true
        },
        {
            id: 10,
            title: "BGMミキシング",
            icon: "🎵",
            desc: "好みのBGM音源をアップロードするだけで、ナレーション音声に自動ミックス。音量バランスも自動調整され、プロ品質のサウンドに仕上がります。",
            perfectFor: "動画の雰囲気をBGMで演出したい人",
            color: "emerald",
            isNew: true
        },
        {
            id: 11,
            title: "スライドコピー編集 & AIフィードバック再生成",
            icon: "✏️",
            desc: "生成されたスライドのテキストを直接編集可能。さらに「もっと大胆に」「色を変えて」などのフィードバックを送るだけで、AIがデザインごと再生成します。",
            perfectFor: "細部までこだわりたい人",
            color: "amber",
            isNew: true
        },
        {
            id: 12,
            title: "タイムライン編集",
            icon: "🎬",
            desc: "各スライドの表示タイミングをドラッグで直感的に調整。不要なスライドの削除もワンクリック。調整後はそのまま動画を再生成できます。",
            perfectFor: "スライドの切り替えタイミングにこだわりたい人",
            color: "cyan",
            isNew: true
        },
        {
            id: 13,
            title: "AIイラスト自動生成",
            icon: "🌟",
            desc: "スライドの内容に合わせて、AIがオリジナルイラストを自動生成。テキストだけでは伝わりにくいコンセプトも、視覚的に表現できます。",
            perfectFor: "イラスト素材を探す手間を省きたい人",
            color: "pink",
            isNew: true,
            isBeta: true
        },
        {
            id: 14,
            title: "OP/ED動画の自動結合",
            icon: "🎞️",
            desc: "オープニング動画やエンディング動画をアップロードすれば、本編の前後に自動で結合。チャンネルのブランディングを統一できます。",
            perfectFor: "YouTubeチャンネルのブランドを統一したい人",
            color: "orange",
            isNew: true
        },
        {
            id: 15,
            title: "Webカメラ録画 & 動画アップロード",
            icon: "📸",
            desc: "ブラウザ内でWebカメラを使ったワイプ映像の撮影が可能。動画ファイルをアップロードすれば、音声とワイプ映像を自動で分離・同期します。",
            perfectFor: "ワンストップで顔出し動画を完結させたい人",
            color: "teal",
            isNew: true
        }
    ];

    const colorMap: Record<string, { badge: string; tag: string; icon: string }> = {
        blue: { badge: "bg-blue-50 text-blue-700", tag: "bg-blue-500/10 border-blue-500/20", icon: "text-blue-500" },
        rose: { badge: "bg-rose-50 text-rose-700", tag: "bg-rose-500/10 border-rose-500/20", icon: "text-rose-500" },
        violet: { badge: "bg-violet-50 text-violet-700", tag: "bg-violet-500/10 border-violet-500/20", icon: "text-violet-500" },
        emerald: { badge: "bg-emerald-50 text-emerald-700", tag: "bg-emerald-500/10 border-emerald-500/20", icon: "text-emerald-500" },
        amber: { badge: "bg-amber-50 text-amber-700", tag: "bg-amber-500/10 border-amber-500/20", icon: "text-amber-500" },
        cyan: { badge: "bg-cyan-50 text-cyan-700", tag: "bg-cyan-500/10 border-cyan-500/20", icon: "text-cyan-500" },
        pink: { badge: "bg-pink-50 text-pink-700", tag: "bg-pink-500/10 border-pink-500/20", icon: "text-pink-500" },
        orange: { badge: "bg-orange-50 text-orange-700", tag: "bg-orange-500/10 border-orange-500/20", icon: "text-orange-500" },
        teal: { badge: "bg-teal-50 text-teal-700", tag: "bg-teal-500/10 border-teal-500/20", icon: "text-teal-500" },
    };

    return (
        <section className="py-24 bg-white">
            <div className="max-w-5xl mx-auto px-6">

                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        VoiSlide Movie の<span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">15</span>の機能
                    </h2>
                    <p className="text-lg text-slate-600">
                        VoiSlide Movie は、単なる動画編集ツールではありません。<br />
                        あなたの発信を加速させる次世代のコンテンツ制作エンジンです。
                    </p>
                </div>

                <div className="grid gap-8">
                    {functions.map((func) => {
                        const colors = colorMap[func.color] || colorMap.blue;
                        return (
                            <div key={func.id} className={`bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col md:flex-row gap-6 hover:shadow-lg transition-shadow ${(func as any).isNew ? 'ring-1 ring-blue-100' : ''}`}>
                                <div className="text-5xl bg-white w-20 h-20 flex items-center justify-center rounded-2xl shadow-sm border border-slate-100 shrink-0 relative">
                                    {func.icon}
                                    {(func as any).isNew && (
                                        <span className="absolute -top-2 -right-2 px-1.5 py-0.5 text-[10px] font-bold bg-blue-500 text-white rounded-full">
                                            NEW
                                        </span>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                                        <span className="text-xs font-bold text-slate-400 tracking-wider">FUNCTION {func.id.toString().padStart(2, '0')}</span>
                                        {(func as any).isBeta && (
                                            <span className="px-2 py-0.5 text-[10px] font-bold bg-gradient-to-r from-pink-500 to-violet-500 text-white rounded-full tracking-wider">
                                                BETA
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{func.title}</h3>
                                    <p className="text-slate-600 leading-relaxed mb-6">
                                        {func.desc}
                                    </p>
                                    <div className={`inline-flex items-center gap-2 px-4 py-2 ${colors.badge} text-sm font-bold rounded-lg`}>
                                        <span className={colors.icon}>👍</span> {func.perfectFor}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
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
                                <li>動画入力：MP4, MOV（ワイプ用）</li>
                                <li>BGM入力：MP3, WAV, M4A</li>
                                <li>動画出力：MP4（フルHD 1920×1080 / 縦長 1080×1920）</li>
                                <li>スライド出力：PNG（ZIP形式）</li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold text-white mb-2">【利用環境】</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>ブラウザ版（Chrome, Safari, Edge, Firefox）</li>
                                <li>インターネット接続が必要</li>
                                <li>Webカメラ対応（ワイプ録画用）</li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold text-white mb-2">【動画フォーマット】</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>横長（16:9）— YouTube, プレゼン向け</li>
                                <li>縦長（9:16）— Shorts, Reels, TikTok向け</li>
                                <li>OP/ED動画の自動結合対応</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
