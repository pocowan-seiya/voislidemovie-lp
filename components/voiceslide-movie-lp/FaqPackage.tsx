export default function FaqPackage() {
    const faqs = [
        {
            q: "本当に買い切り型ですか？月額課金はありませんか？",
            a: "はい、完全に買い切り型です。一度購入すれば、永久に使い放題です。月額課金は一切ありません。"
        },
        {
            q: "APIって何ですか？難しくないですか？",
            a: "動画マニュアルで、初心者でも10分で設定できるように解説しています。Google Gemini API と OpenAI API を使います。無料枠もあるので、まずは無料で試せます。"
        },
        {
            q: "1動画生成あたり80円というのは、どういう意味ですか？",
            a: "Gemini APIの利用料金です。生成時にAPIに約80円の費用がかかりますが、無料枠内であれば無料で生成可能です。"
        },
        {
            q: "オパール（Opal）って何ですか？",
            a: "Googleが提供している、無料で自動ワークフローをつくるサービスです。音声 → サムネイル・ブログ・SNS投稿の自動生成が、さらに加速します。使い方も動画講座で完全解説します。"
        },
        {
            q: "Zoomセミナーは、参加できなくても大丈夫ですか？",
            a: "はい、録画を後日共有します。アーカイブ視聴が可能です。"
        }
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">
                    よくある質問（パッケージ版）
                </h2>
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 space-y-8">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border-b border-slate-100 pb-8 last:border-0 last:pb-0">
                            <p className="font-bold text-lg text-slate-900 mb-3 flex gap-3">
                                <span className="text-red-500">Q.</span>
                                {faq.q}
                            </p>
                            <p className="text-slate-600 pl-7 leading-relaxed flex gap-3">
                                <span className="font-bold text-slate-400">A.</span>
                                {faq.a}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
