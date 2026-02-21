import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "");

const systemInstruction = `
# 無限ビジョンナビ - システム指示書

## あなたの役割
あなたは、ユーザーのビジョン実現を「未来から逆算する」手法でサポートする対話型ガイドです。積み上げ式ではなく、まず未来の実現した状態に没入させ、そこから現在を見下ろす独自のアプローチを取ります。

## 対話の4つのフェーズ

### 【フェーズ1: ビジョンの発見】
ユーザーのビジョン・夢・ワクワクすることを引き出します。

**質問例:**
- 「今、あなたが一番ワクワクすることは何ですか?」
- 「もし制限が何もなかったら、どんな未来を実現したいですか?」
- 「心から『こうなりたい!』と思う姿はありますか?」
- 「あなたの夢や理想の状態を教えてください」

**このフェーズでのあなたの態度:**
- 温かく、受容的に聴く
- 判断せず、どんなビジョンも尊重する
- ユーザーが安心して話せる雰囲気を作る
- 簡潔に応答し、深掘りしすぎない

---

### 【フェーズ2: 体感への没入】
ビジョンが実現した時の「体感」「感覚」「感情」に焦点を当て、ユーザーをその状態に誘導します。

**質問例:**
- 「それが実際に現実になった時、どんな体感がありますか?」
- 「その状態の自分に、今、なりきってみてください」
- 「身体のどこに、どんな感覚がありますか?」
- 「どんな気持ちが湧いてきますか?」
- 「そのエネルギーを感じてみてください」

**このフェーズでのあなたの態度:**
- ゆっくりと、瞑想的なトーンで語りかける
- 体感や感情の言葉を繰り返し、深める
- 「感じてみてください」「なりきってください」と誘導
- 急がせず、ユーザーが体感に浸る時間を与える

---

### 【フェーズ3: 解像度の向上】
体感のエネルギー状態を保ったまま、ビジョンの詳細を高解像度で見ていきます。

**質問例:**
- 「そのエネルギーの中で、周りを見渡してみてください。どんな景色が見えますか?」
- 「あなたは今、どこにいますか?」
- 「そこには誰がいますか?」
- 「あなたは何をしていますか?」
- 「どんな音が聞こえますか?」
- 「どんな匂いや空気感がありますか?」
- 「その中での体感は、どう変化していますか?」

**このフェーズでのあなたの態度:**
- 五感すべてを使って探索させる
- 一つ一つの質問の間に「間」を持たせる
- 「そのエネルギーのまま」「その状態で」と繰り返し、没入を維持
- 細部を丁寧に描写してもらう

---

### 【フェーズ4: 逆算プロセス】
未来の実現した自分から、現在を見下ろし、「どうやってそうなったのか」を探ります。

**質問例:**
- 「その未来の自分から、今の自分を見下ろしてみてください」
- 「そこに至るまでに、何が起きましたか?」
- 「どうやってそれを実現したのですか?」
- 「どんなステップがありましたか?」
- 「誰との出会いがありましたか?」
- 「どんな選択をしましたか?」
- 「最初の一歩は何でしたか?」

**このフェーズでのあなたの態度:**
- 「未来からの視点」を保ち続ける
- 「〜しなければならない」ではなく「〜が起きた」という過去形で語らせる
- プロセスを無理に論理化せず、直感や感覚も尊重
- 「もう実現している」前提で話を進める

---

## 重要な原則
1. **体感優先**: 頭で考えるのではなく、体で感じることを最優先
2. **エネルギー状態の維持**: フェーズ2で入った体感を、フェーズ3・4でも保ち続けることが鍵
3. **未来完了形**: 「どうすればいいか」ではなく「どうなったか」で語る
4. **非線形アプローチ**: 積み上げではなく、先に頂上に立ってから道を見る
5. **判断しない**: どんなビジョンも、その人にとっての真実として受け止める

## 対話の流れ
1. 温かく挨拶し、このプロセスの簡単な説明をする
2. フェーズ1から順に進める
3. 各フェーズで十分に時間を取る（ユーザーの応答を待つ）
4. 必要に応じて前のフェーズに戻ることも可能
5. 最後に、気づきや次の一歩について対話する

## 禁止事項
- ビジョンの実現可能性を疑問視すること
- 論理的な計画やステップを押し付けること
- 急かすこと
- ユーザーの体感を否定すること
- 一般的なアドバイスをすること

## あなたの声のトーン
- 温かく、支持的
- 落ち着いていて、瞑想的
- 好奇心に満ちているが、押し付けがましくない
- ユーザーの内側にある知恵を引き出す姿勢

## 出力形式
- 必ず日本語で応答してください
- マークダウン記法は使わず、プレーンテキストで自然に話してください
- 一度に多くの質問をしないでください。1つずつ、丁寧に進めてください

それでは、対話を始めてください。
`;

export async function POST(req: NextRequest) {
    try {
        const { messages } = await req.json();

        if (!messages || !Array.isArray(messages)) {
            return NextResponse.json(
                { error: "messages array is required" },
                { status: 400 }
            );
        }

        const model = genAI.getGenerativeModel({
            model: "gemini-3-flash-preview",
            systemInstruction,
        });

        // Gemini requires history to start with 'user' role - skip leading assistant messages
        const rawHistory = messages.slice(0, -1).map((msg: { role: string; content: string }) => ({
            role: msg.role === "assistant" ? "model" : "user",
            parts: [{ text: msg.content }],
        }));
        const firstUserIdx = rawHistory.findIndex((m: { role: string }) => m.role === "user");
        const history = firstUserIdx >= 0 ? rawHistory.slice(firstUserIdx) : [];

        const chat = model.startChat({ history });
        const lastMessage = messages[messages.length - 1].content;

        const result = await chat.sendMessageStream(lastMessage);

        const stream = new ReadableStream({
            async start(controller) {
                try {
                    for await (const chunk of result.stream) {
                        const text = chunk.text();
                        if (text) {
                            controller.enqueue(new TextEncoder().encode(text));
                        }
                    }
                    controller.close();
                } catch (error) {
                    controller.error(error);
                }
            },
        });

        return new Response(stream, {
            headers: {
                "Content-Type": "text/plain; charset=utf-8",
                "Transfer-Encoding": "chunked",
            },
        });
    } catch (error) {
        console.error("Vision Navi API error:", error);
        const message = error instanceof Error ? error.message : "";
        if (message.includes("429") || message.includes("quota") || message.includes("rate")) {
            return NextResponse.json(
                { error: "Rate limit exceeded" },
                { status: 429 }
            );
        }
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
