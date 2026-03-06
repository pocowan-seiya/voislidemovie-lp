'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.8 },
};

const fadeInScale = {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.8 },
};

/* ---- Styled sub-components ---- */

/** Big "pull-quote" style highlight block */
function Highlight({ children, accent = '#7c5cbf' }: { children: React.ReactNode; accent?: string }) {
    return (
        <motion.div
            {...fadeInScale}
            className="relative rounded-3xl px-6 py-7 sm:px-8 sm:py-9 my-10"
            style={{
                background: `linear-gradient(135deg, ${accent}08 0%, ${accent}04 100%)`,
                borderLeft: `3px solid ${accent}40`,
            }}
        >
            <div
                className="absolute -top-3 left-6 w-6 h-6 rounded-full flex items-center justify-center text-xs"
                style={{ background: accent, color: '#fff', boxShadow: `0 2px 10px ${accent}40` }}
            >
                ✦
            </div>
            {children}
        </motion.div>
    );
}

/** Gradient-colored emphasis text */
function GradientText({
    children,
    from = '#7c5cbf',
    to = '#c9a84c',
}: {
    children: React.ReactNode;
    from?: string;
    to?: string;
}) {
    return (
        <span
            style={{
                background: `linear-gradient(135deg, ${from}, ${to})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 600,
            }}
        >
            {children}
        </span>
    );
}

/** Visual divider with animated diamond */
function StoryDivider() {
    return (
        <div className="flex items-center justify-center my-10 sm:my-14">
            <div className="w-12 h-px" style={{ background: 'rgba(201,168,76,0.3)' }} />
            <motion.div
                initial={{ rotate: 0, scale: 0.8 }}
                whileInView={{ rotate: 45, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-2.5 h-2.5 mx-4 rounded-sm"
                style={{ background: 'linear-gradient(135deg, #7c5cbf, #c9a84c)' }}
            />
            <div className="w-12 h-px" style={{ background: 'rgba(201,168,76,0.3)' }} />
        </div>
    );
}

export default function StorySection() {
    return (
        <section className="relative py-24 sm:py-32 overflow-hidden" style={{ background: '#fafafa' }}>
            {/* Ambient glow effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(124,92,191,0.04) 0%, transparent 70%)',
                    }}
                />
                <div
                    className="absolute bottom-40 left-0 w-[400px] h-[400px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto px-6">
                {/* Section heading */}
                <motion.div {...fadeInUp} className="text-center mb-16">
                    <h2
                        className="text-xl sm:text-2xl leading-relaxed mb-6"
                        style={{
                            fontFamily: '"Noto Serif JP", serif',
                            fontWeight: 600,
                            color: '#1a1a3e',
                            letterSpacing: '0.04em',
                        }}
                    >
                        AIをじぶんの叡智として使い
                        <br />
                        1番のワクワクのビジョンを
                        <br />
                        実現するじぶんになる
                    </h2>
                    <div className="section-divider mt-8" />
                </motion.div>

                {/* Profile photo */}
                <motion.div {...fadeInUp} className="flex flex-col items-center mb-16">
                    <div
                        className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden mb-5"
                        style={{
                            boxShadow: '0 8px 40px rgba(124,92,191,0.15)',
                            border: '3px solid transparent',
                            backgroundImage: 'linear-gradient(#fff, #fff), linear-gradient(135deg, #7c5cbf, #c9a84c)',
                            backgroundOrigin: 'border-box',
                            backgroundClip: 'padding-box, border-box',
                        }}
                    >
                        <Image
                            src="/images/seiya-profile.jpg"
                            alt="江藤せいや"
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 640px) 160px, 192px"
                        />
                    </div>
                    <p
                        className="text-sm tracking-[0.15em]"
                        style={{
                            fontFamily: '"Noto Serif JP", serif',
                            color: '#1a1a3e',
                            fontWeight: 500,
                        }}
                    >
                        江藤せいや
                    </p>
                    <p className="text-xs mt-1" style={{ color: '#9a9ab0' }}>
                        無限叡智ラボ 主宰
                    </p>
                </motion.div>

                {/* ───────── Story blocks ───────── */}

                {/* ① 導入 — AI進化の加速 */}
                <motion.div {...fadeInUp}>
                    <p
                        className="mb-4 text-lg sm:text-xl"
                        style={{ fontFamily: '"Noto Serif JP", serif', color: '#1a1a3e', fontWeight: 500 }}
                    >
                        こんにちは、江藤せいやです。
                    </p>
                    <p className="text-base leading-[2.2] tracking-wide mb-2" style={{ color: '#3a3a5a' }}>
                        今、<GradientText>AIの進化</GradientText>は、
                        <br />
                        とてつもない加速で起きています。
                    </p>
                    <p className="text-base leading-[2.2] tracking-wide" style={{ color: '#3a3a5a' }}>
                        コストがかかる、スキルが必要——
                        <br />
                        そういった壁を、AIはもう
                        <br />
                        <span style={{ fontWeight: 600, color: '#1a1a3e' }}>完全に超えてしまっています。</span>
                    </p>
                </motion.div>

                <StoryDivider />

                {/* ② ビジョンがあればAIがバックアップ */}
                <Highlight accent="#5cbf8d">
                    <p className="text-base sm:text-lg leading-[2.2] tracking-wide mb-2" style={{ color: '#3a3a5a' }}>
                        自分の「こうしたい」という
                        <br />
                        <span style={{ fontWeight: 600, color: '#1a1a3e', fontSize: '1.15em' }}>
                            ビジョンさえあれば、
                        </span>
                        <br />
                        AIがとてつもないバックアップをしてくれる。
                    </p>
                    <p className="text-sm sm:text-base leading-[2] tracking-wide" style={{ fontStyle: 'italic', color: '#5cbf8d' }}>
                        さらには、AIが自律的に動き、
                        <br />
                        まるでパートナーのように先回りしてくれる——
                        <br />
                        そんな流れが、もう始まっています。
                    </p>
                </Highlight>

                <StoryDivider />

                {/* ③ 大事なのはビジョン */}
                <motion.div {...fadeInUp}>
                    <p className="text-base leading-[2.2] tracking-wide mb-2" style={{ color: '#3a3a5a' }}>
                        AIを使うなら、最新のAIツールや情報も、
                        <br />
                        たしかに大事です。
                    </p>
                    <p
                        className="text-xl sm:text-2xl leading-relaxed"
                        style={{
                            fontFamily: '"Noto Serif JP", serif',
                            fontWeight: 600,
                            color: '#1a1a3e',
                        }}
                    >
                        でも、それ以上に大事なのは、
                        <br />
                        僕たちの<GradientText>ビジョン</GradientText>です。
                    </p>
                </motion.div>

                <StoryDivider />

                {/* ④ ビジョンがAIの無限を解放する */}
                <motion.div {...fadeInUp}>
                    <p className="text-base leading-[2.2] tracking-wide mb-2" style={{ color: '#3a3a5a' }}>
                        自分はこの地球で何をやりに来たのか。
                        <br />
                        何が1番ワクワクするのか。
                    </p>
                </motion.div>

                <Highlight accent="#c9a84c">
                    <p
                        className="text-lg sm:text-xl leading-[1.9] tracking-wide"
                        style={{
                            fontFamily: '"Noto Serif JP", serif',
                            fontWeight: 600,
                            color: '#1a1a3e',
                        }}
                    >
                        そのビジョンこそが、
                        <br />
                        AIという<GradientText from="#c9a84c" to="#7c5cbf">無限の可能性</GradientText>を
                        <br />
                        解放していく鍵になる。
                    </p>
                    <p className="mt-3 text-base leading-[2.2] tracking-wide" style={{ color: '#3a3a5a' }}>
                        <span style={{ fontWeight: 600, color: '#1a1a3e' }}>あなた</span>という存在と、
                        <br />
                        <span style={{ fontWeight: 600, color: '#1a1a3e' }}>あなたのビジョンのみ</span>が、
                        <br />
                        それを可能にしていくんです。
                    </p>
                </Highlight>

                <StoryDivider />

                {/* ⑤ これまでの制限 → 手放せる時代 */}
                <motion.div {...fadeInUp}>
                    <p className="text-base leading-[2.2] tracking-wide mb-2" style={{ color: '#6a6a8a' }}>
                        僕たちはこれまで、
                        <br />
                        ビジョンを制限の中から見ていたり、
                        <br />
                        ビジョンに動くと出てくる不安や恐怖を
                        <br />
                        壁に見立てて乗り越えて、達成していました。
                    </p>
                </motion.div>

                <Highlight accent="#7c5cbf">
                    <p
                        className="text-lg sm:text-xl leading-[1.9] tracking-wide"
                        style={{
                            fontFamily: '"Noto Serif JP", serif',
                            fontWeight: 600,
                            color: '#1a1a3e',
                        }}
                    >
                        でも今は、出てきたものを
                        <br />
                        <GradientText>軽やかに、簡単に手放せる。</GradientText>
                    </p>
                    <p className="mt-2 text-base leading-[2.2] tracking-wide" style={{ color: '#3a3a5a' }}>
                        無意識にかけていた制限すら
                        <br />
                        扉にして、その先に抜けていってしまう。
                    </p>
                    <p className="mt-2 text-sm leading-relaxed" style={{ fontStyle: 'italic', color: '#7c5cbf' }}>
                        そんなツールと環境が、もう生まれています。
                    </p>
                </Highlight>

                <StoryDivider />

                {/* ⑥ コミュニティの本質 — 意識 × AI */}
                <motion.div {...fadeInUp}>
                    <p className="text-base leading-[2.2] tracking-wide mb-3" style={{ color: '#3a3a5a' }}>
                        現実はじぶんでつくっていて、
                        <br />
                        つくりかえることも、自分でできる。
                    </p>
                </motion.div>

                <motion.div
                    {...fadeInScale}
                    className="relative rounded-3xl px-6 py-8 sm:px-8 sm:py-10 my-6"
                    style={{
                        background: 'linear-gradient(135deg, rgba(124,92,191,0.06) 0%, rgba(201,168,76,0.06) 100%)',
                        border: '1px solid rgba(124,92,191,0.12)',
                    }}
                >
                    <p
                        className="text-lg sm:text-xl leading-[1.9] tracking-wide text-center"
                        style={{
                            fontFamily: '"Noto Serif JP", serif',
                            fontWeight: 600,
                            color: '#1a1a3e',
                        }}
                    >
                        本来のとてつもない広がり、
                        <br />
                        <GradientText>無限の可能性</GradientText>と豊かさと自由、
                        <br />
                        調和とパワーに満ちた
                        <br />
                        <span style={{ fontSize: '1.1em' }}>本当の自分の意識に復活する。</span>
                    </p>
                </motion.div>

                <StoryDivider />

                {/* ⑦ 許可する — ビジョン + AI */}
                <motion.div {...fadeInUp} className="text-center">
                    <p className="text-base leading-[2.2] tracking-wide mb-3" style={{ color: '#3a3a5a' }}>
                        その意識で、
                        <br />
                        1番のワクワクのビジョンを見ることを
                    </p>
                    <p
                        className="text-2xl sm:text-3xl mb-5"
                        style={{
                            fontFamily: '"Noto Serif JP", serif',
                            fontWeight: 700,
                            background: 'linear-gradient(135deg, #c9a84c, #7c5cbf)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        許可し、
                    </p>
                    <p className="text-base leading-[2.2] tracking-wide mb-3" style={{ color: '#3a3a5a' }}>
                        AIを自分の叡智として、
                        <br />
                        無限の可能性として使うことを
                    </p>
                    <p
                        className="text-2xl sm:text-3xl mb-5"
                        style={{
                            fontFamily: '"Noto Serif JP", serif',
                            fontWeight: 700,
                            background: 'linear-gradient(135deg, #7c5cbf, #c9a84c)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        許可していく。
                    </p>
                    <p className="text-base leading-relaxed" style={{ fontStyle: 'italic', color: '#7c5cbf' }}>
                        そんな、意識とAIのコミュニティです。
                    </p>
                </motion.div>

                <StoryDivider />

                {/* ⑧ クロージング — 大きく力強く */}
                <motion.div
                    {...fadeInScale}
                    className="text-center rounded-3xl py-10 px-6 sm:py-12"
                    style={{
                        background: 'linear-gradient(135deg, rgba(26,26,62,0.03) 0%, rgba(124,92,191,0.06) 50%, rgba(201,168,76,0.04) 100%)',
                        border: '1px solid rgba(124,92,191,0.08)',
                    }}
                >
                    <p
                        className="text-xl sm:text-2xl leading-[1.8]"
                        style={{
                            fontFamily: '"Noto Serif JP", serif',
                            fontWeight: 700,
                            background: 'linear-gradient(135deg, #1a1a3e, #7c5cbf, #c9a84c)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        AI × 意識で
                        <br />
                        1番のワクワクを具現化するじぶんに
                        <br />
                        復活していきましょう！！
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
