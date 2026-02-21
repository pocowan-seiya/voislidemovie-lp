"use client";

import GuidedChatUI from "@/components/starter-kit/GuidedChatUI";

const PREP_STEPS = [
    // 1. イントロ
    {
        id: "intro",
        text: "映写機の場所に立つ準備ワークへようこそ。\n\nこのワークでは、あなたの真実の場所「映写機の場所」に立ち、\n宇宙意識とつながる準備をしていきます。\n\nリラックスして、タップで進めてください。",
        inputType: "tap" as const,
    },

    // 2. 位置選択
    {
        id: "position",
        text: "こちらの絵を見てください✨\n\nあなたの前方にある「現実のスクリーン」に、あなたの現実が映し出されています。\n\n1番左の場所が、\n映写機の場所、あなたの真実の場所。\n\nここから、右に離れるほど、\n現実に強くフォーカスしていて、感情をものすごく感じます。\n\n少し離れているくらいだと、\nそこまでは感じていないけど、モヤモヤしたり、言葉にならない居心地の悪さを感じます。\n\n\n今、あなたはどのあたりにいますか？\n左寄りですか？\u3000右寄りですか？\n\n直感で大丈夫です。どこにいるかを選んでください。",
        image: {
            src: "/starter-kit/nikochan-diagram.jpg",
            alt: "映写機の場所と現実のスクリーンの関係図",
            caption: "",
        },
        inputType: "select" as const,
        inputKey: "position",
        options: ["右寄り", "やや右", "真ん中", "やや左", "左寄り"],
    },

    // 3. 光の磁場
    {
        id: "light-field",
        text: "それでは、\n目を閉じても閉じなくても大丈夫です。\n\n今自分が立っている場所を感じてください。\n\n\nあなたが今立っている地面、お部屋の地面の上に、\n見渡す限り、\u201C光の磁場\u201Dが広がっています。\n\n黄金の粒子でできた光の海をイメージしてください。\n\n\n光の磁場は、地球を覆うように、広がっています。\n\nなので、あなたの家の壁も突き抜けて、\n東西南北360度、地平線・水平線まで\nどこまでも波打って、広がっています。\n\nこの光の磁場を十分に感じてください。",
        image: {
            src: "/starter-kit/light-field.jpg",
            alt: "光の磁場のイメージ",
            caption: "",
        },
        inputType: "tap" as const,
    },

    // 4. 映写機の場所
    {
        id: "projector",
        image: {
            src: "/starter-kit/nikochan-diagram.jpg",
            alt: "映写機の場所と現実のスクリーンの関係図",
            caption: "",
        },
        text: "では、自分の後ろを見てください。\n\n光の磁場の中に、ひときわ輝いている場所があります。\nその輝いている場所が「映写機の場所」、あなたの真実の場所です。\n\n立っている方は、その場所まで、歩いてもしくはスキップで戻ってください。\n\n座っている方は、後ろを向いて「ここだ」と決めてから、\nもう一度前を向き直して、その場所にスッとテレポートするように移動してください。",
        inputType: "tap" as const,
    },

    // 5. 胸のドア + 鉄の球体
    {
        id: "chest-door",
        text: "映写機の場所に\u201Cトンッ\u201Dと立ってください。\n\nあなたの胸の前に、ドアがあります。\nまるで船が出発するときのスロープのような、なだらかなドアです。\n\nそのドアを、上から下に、パタンと開けてください。\n\n\nすると、あなたの身体から\nゴロンと、黒光りする鉄の球体が出てきます。\nとてつもなく重いものです。\n\nそれを持って、スッと手を離してください。\n\n\n目の前にはなだらかなスロープがあるので、\nゴロゴロゴロゴロと転がっていきます。\n\n光の磁場の中央に大きな穴があるので、\nそこにストーンと落ちていきます。\n\n\n深呼吸してください。",
        inputType: "tap" as const,
    },

    // 6. 宇宙意識
    {
        id: "cosmic",
        text: "深呼吸して見上げると、\n自分の真上に、あなたの宇宙意識が広がっています。\n\nとてつもない、広がりと澄んだ空気感。\n\n星が瞬いている、夜空のような宇宙意識。\n\n空のように、どこまでもぶつかることのない広がり。\n奥行きも、とてつもなく広がっています。\n\nあなたの宇宙の叡智、無限の可能性。\nここから、必要なときに必要なだけ、サインやビジョンが降ってきます。\n\n\nここはハイヤーセルフとつながっています。\nハイヤーセルフや宇宙の家族たちが、光のシャワーを浴びせてくれます。\n\n光の粒子でできた、密度の濃いシャワー。\n\nその光のシャワーを、余すことなく浴びてください。",
        inputType: "tap" as const,
    },
];

const COMPLETION_MESSAGE =
    "映写機の場所に立ち、光のシャワーを浴びた状態になりました。\n\nこの状態で、各システムをお使いください✨\n\n準備が整いました。";

export default function PreparationPage() {
    return (
        <GuidedChatUI
            systemName="映写機の場所に立つ"
            accentColor="#B8A9C9"
            accentColorLight="#F5F0FA"
            steps={PREP_STEPS}
            completionMessage={COMPLETION_MESSAGE}
            icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
            }
        />
    );
}
