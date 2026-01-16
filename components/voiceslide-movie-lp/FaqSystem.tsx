export default function FaqSystem() {
    const faqs = [
        {
            q: "本当に編集不要ですか？",
            a: "はい、編集不要です。VoiSlide Movie が、音声とスライドを自動で同期させるので、編集作業は一切不要です。"
        },
        {
            q: "スマホだけで音声収録できますか？",
            a: "はい、スマホで十分です。スマホのボイスメモで録音した音声を、そのままVoiSlide Movie にアップロードできます。"
        },
        {
            q: "API設定は難しくないですか？",
            a: "動画マニュアルで、初心者でも10分で設定できるように解説しています。Google Gemini API と OpenAI API を使います。"
        },
        {
            q: "1動画生成あたり80円というのは、どういう意味ですか？",
            a: "API利用料金です。VoiSlide Movie は買い切り型ですが、動画生成時にAPIに約80円の費用がかかります。無料枠もあるので、まずは無料で試せます。"
        },
        {
            q: "月額課金はありますか？",
            a: "いいえ、買い切り型です。一度購入すれば、永久に使い放題です。月額課金は一切ありません。"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">
                    よくある質問
                </h2>

                <div className="space-y-8">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border-b border-slate-100 pb-8 last:border-0">
                            <p className="font-bold text-lg text-slate-900 mb-2 flex gap-3">
                                <span className="text-blue-500">Q.</span>
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
