export default function PackageDetails() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">
                    パッケージ内容
                </h2>

                <div className="space-y-12">

                    {/* Item 1 */}
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-shadow border-2 border-blue-500 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-blue-500 text-white px-6 py-2 rounded-bl-2xl font-bold">
                            内容 ①
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                            VoiSlide Movie システム 永久ライセンス
                        </h3>
                        <p className="text-blue-500 font-bold text-xl mb-6">価値：¥9,800相当</p>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <ul className="space-y-2 text-slate-700">
                                    <li className="flex items-center gap-2">✅ 月額課金ではなく、買い切り型</li>
                                    <li className="flex items-center gap-2">✅ 一度購入すれば、永久に使い放題</li>
                                    <li className="flex items-center gap-2">✅ 月間利用回数：無制限</li>
                                    <li className="flex items-center gap-2">✅ システムアップデート：1年間無料</li>
                                </ul>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl text-sm text-slate-600">
                                ※ご自身でAPIを設定する仕組みです。<br />
                                1動画生成あたりたった80円ほどでつくれます。
                            </div>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow border border-slate-200 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-slate-700 text-white px-6 py-2 rounded-bl-2xl font-bold">
                            内容 ②
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                            VoiSlide Movie × YouTube発信<br />仕組み化マスターガイド（動画講座5本）
                        </h3>
                        <p className="text-blue-500 font-bold text-xl mb-6">価値：¥19,800相当</p>

                        <div className="space-y-4 text-slate-700">
                            <p>動画講座（合計1.5〜2時間）で、以下を完全マスター：</p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-slate-50 p-4 rounded-xl">
                                    <h4 className="font-bold mb-2">第1講：VoiSlide Movie 完全マニュアル</h4>
                                    <p className="text-sm text-slate-600">・システムの使い方（初心者でも10分で理解）<br />・音声収録のコツ</p>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-xl">
                                    <h4 className="font-bold mb-2">第2講：YouTube発信の最適化</h4>
                                    <p className="text-sm text-slate-600">・サムネイル・タイトルの最適化<br />・アルゴリズムを味方につける方法</p>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-xl">
                                    <h4 className="font-bold mb-2">第3講：1音声 → 10コンテンツ展開</h4>
                                    <p className="text-sm text-slate-600">・他媒体への横展開<br />・Opalを活用したワークフロー自動化</p>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-xl">
                                    <h4 className="font-bold mb-2">第4講：収益化までの最短ルート</h4>
                                    <p className="text-sm text-slate-600">・コミュニティ向けコンテンツの作り方<br />・講座販売戦略</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow border border-slate-200 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-slate-700 text-white px-6 py-2 rounded-bl-2xl font-bold">
                            内容 ③
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                            音声だけでサムネイル・ブログ・SNSを一括生成<br />「発信の仕組み化」
                        </h3>
                        <p className="text-blue-500 font-bold text-xl mb-6">価値：¥19,800相当</p>

                        <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl mb-6">
                            <h4 className="font-bold text-amber-800 mb-2">【何ができるのか？】</h4>
                            <p className="text-amber-900 mb-4 font-bold">1回の音声収録（5分）で、合計10コンテンツが自動で生まれます。</p>
                            <ul className="text-sm text-amber-800 grid grid-cols-2 gap-2">
                                <li>✅ YouTube動画 1本</li>
                                <li>✅ サムネイル 3枚</li>
                                <li>✅ ブログ記事 1本</li>
                                <li>✅ X投稿 5本</li>
                                <li>✅ メルマガ本文 1本</li>
                            </ul>
                        </div>
                        <p className="text-slate-600">※Opal連携&自動ワークフロー構築の完全ノウハウを提供</p>
                    </div>

                    {/* Item 4 */}
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow border border-slate-200 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-slate-700 text-white px-6 py-2 rounded-bl-2xl font-bold">
                            内容 ④
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                            VoiSlide Movie Zoom活用セミナー参加権（1月末開催予定）
                        </h3>
                        <p className="text-blue-500 font-bold text-xl mb-6">価値：¥5,000相当</p>

                        <p className="text-slate-700 mb-4">
                            「使い方がわからない」「うまく活用できない」という不安を、すべて解消します。
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-slate-100 px-3 py-1 rounded-full text-sm">基礎活用法</span>
                            <span className="bg-slate-100 px-3 py-1 rounded-full text-sm">Opal連携実演</span>
                            <span className="bg-slate-100 px-3 py-1 rounded-full text-sm">QAセッション</span>
                            <span className="bg-slate-100 px-3 py-1 rounded-full text-sm">事例シェア</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
