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

function StoryDivider() {
    return (
        <div className="flex items-center justify-center my-12">
            <div className="w-8 h-px" style={{ background: 'rgba(201,168,76,0.4)' }} />
            <div
                className="w-2 h-2 mx-3 rotate-45 rounded-sm"
                style={{ background: 'rgba(124,92,191,0.3)' }}
            />
            <div className="w-8 h-px" style={{ background: 'rgba(201,168,76,0.4)' }} />
        </div>
    );
}

export default function StorySection() {
    return (
        <section className="relative py-24 sm:py-32" style={{ background: '#fafafa' }}>
            {/* Subtle background accent */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 right-0 w-96 h-96 rounded-full animate-subtle-glow"
                    style={{
                        background: 'radial-gradient(circle, rgba(124,92,191,0.03) 0%, transparent 70%)',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto px-6">
                {/* Section heading */}
                <motion.div {...fadeInUp} className="text-center mb-16">
                    <h2
                        className="text-2xl sm:text-3xl leading-relaxed mb-6"
                        style={{
                            fontFamily: '"Noto Serif JP", serif',
                            fontWeight: 600,
                            color: '#1a1a3e',
                            letterSpacing: '0.04em',
                        }}
                    >
                        月商2,000万円 → 借金500万円 → 復活
                    </h2>
                    <p
                        className="text-base sm:text-lg leading-loose"
                        style={{ color: '#4a4a6a', letterSpacing: '0.03em' }}
                    >
                        制限は手放して、想像を超えたじぶんの叡智に出会っていく。
                        <br />
                        新時代、圧倒的な自分軸で、僕たちは無限の可能性に生きる。
                    </p>
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

                {/* Story blocks */}
                <div className="space-y-0">
                    <motion.div {...fadeInUp} className="text-base leading-[2.2] tracking-wide" style={{ color: '#3a3a5a' }}>
                        <p className="mb-2" style={{ fontFamily: '"Noto Serif JP", serif', color: '#1a1a3e', fontSize: '1.1rem' }}>
                            はじめまして、江藤せいやです。
                        </p>
                        <p className="mb-1">
                            僕は大学生のころ起業して15年、
                            <br />
                            IT事業経営やトレードなどをしてきました。
                        </p>
                        <p className="mb-1">
                            月商2,000万円、
                            <br />
                            家族でドバイ、タイなど
                            <br />
                            世界中のホテルを渡り歩きながら暮らす生活を実践していました。
                        </p>
                    </motion.div>

                    <StoryDivider />

                    <motion.div {...fadeInUp} className="text-base leading-[2.2] tracking-wide" style={{ color: '#3a3a5a' }}>
                        <p className="mb-1">
                            でも、いつも、何か満たされない日々でした。
                        </p>
                        <p className="mb-1">
                            それどころか、パートナーシップで、
                            <br />
                            全く突破口のない、深い悩みを抱えていました。
                        </p>
                        <p className="mb-1">
                            「自分にはどうすることもできない」
                            <br />
                            そんなイリュージョンを体験していました。
                        </p>
                        <p>
                            そんな自分自身のあり方が、そのまま現実に現れて
                            <br />
                            500万円の借金を背負うような現実にもなりました。
                        </p>
                    </motion.div>

                    <StoryDivider />

                    <motion.div {...fadeInUp} className="text-base leading-[2.2] tracking-wide" style={{ color: '#3a3a5a' }}>
                        <p className="mb-1" style={{ fontStyle: 'italic', color: '#7c5cbf' }}>
                            「これは、自分の先があるんじゃないか」
                        </p>
                        <p className="mb-1">
                            どうすることもできないような
                            <br />
                            でも、何かがあるんじゃないか
                        </p>
                        <p className="mb-1">
                            そう思っていた時に
                            <br />
                            関野あやこさんの手放しのワークとクラスに出会いました。
                        </p>
                        <p>
                            そこで出会ったのは、
                            <br />
                            衝撃と、そして、どこか知っていたような体感でした。
                        </p>
                    </motion.div>

                    <StoryDivider />

                    <motion.div {...fadeInUp} className="text-base leading-[2.2] tracking-wide" style={{ color: '#3a3a5a' }}>
                        <p className="mb-1" style={{ fontFamily: '"Noto Serif JP", serif', color: '#1a1a3e', fontWeight: 500 }}>
                            僕たちはもともと完全な意識で。
                        </p>
                        <p className="mb-1">
                            地球を遊ぶために
                            <br />
                            自分の意識を分離して
                        </p>
                        <p className="mb-1">
                            地球に降り立って
                            <br />
                            分離を体験してきました。
                        </p>
                        <p className="mb-1">
                            自分が映写機で、
                            <br />
                            現実のスクリーンに映し出している。
                        </p>
                        <p className="mb-1">
                            誰かのせいで悲しい気持ちになったのではなく
                            <br />
                            自分が「悲しい」という周波数を映写機に入れて、
                            <br />
                            その体験を自分が体験している。
                        </p>
                        <p style={{ fontWeight: 500, color: '#1a1a3e' }}>
                            つまり、じぶんに1000%力があるということです。
                        </p>
                    </motion.div>

                    <StoryDivider />

                    <motion.div {...fadeInUp} className="text-base leading-[2.2] tracking-wide" style={{ color: '#3a3a5a' }}>
                        <p className="mb-1">
                            だからこそ、現実を映し替えることができる。
                        </p>
                        <p className="mb-1">
                            その映写機に入れた周波数を
                            <br />
                            手放すことができる。
                        </p>
                        <p className="mb-1">
                            じぶんの分離が溶けて、その体験を終えていく。
                        </p>
                        <p>
                            覆っていた雲の先に、意識がシフトし、
                            <br />
                            あたらしい次元の意識で、
                            <br />
                            現実を映しかえていくことができる。
                        </p>
                    </motion.div>

                    <StoryDivider />

                    <motion.div {...fadeInUp} className="text-base leading-[2.2] tracking-wide" style={{ color: '#3a3a5a' }}>
                        <p className="mb-1" style={{ fontStyle: 'italic', color: '#7c5cbf' }}>
                            「手放せる」という角度。
                            <br />
                            その衝撃は、本当にとんでもなかったのを覚えています。
                        </p>
                    </motion.div>

                    <StoryDivider />

                    <motion.div {...fadeInUp} className="text-base leading-[2.2] tracking-wide" style={{ color: '#3a3a5a' }}>
                        <p className="mb-1">
                            そこから僕は、現実をつかって、
                            <br />
                            手放し続けました。
                        </p>
                        <p className="mb-1">居心地の悪い感情。</p>
                        <p className="mb-1">
                            美徳にしてた、
                            <br />
                            「相手に力がないから、自分が手を差し伸べていく」
                            <br />
                            外向きの優しさ。
                        </p>
                        <p className="mb-1">前世からずっと体験してたような恐怖。</p>
                        <p className="mb-1">
                            「自分はこんな人間だ」「これだけはできない」
                            <br />
                            そんな信念も、自分でつくり出したイリュージョン。
                        </p>
                        <p>
                            そういう分離も、
                            <br />
                            復活の磁場をつかい、全て手を放していきました。
                        </p>
                    </motion.div>

                    <StoryDivider />

                    <motion.div {...fadeInUp} className="text-base leading-[2.2] tracking-wide" style={{ color: '#3a3a5a' }}>
                        <p className="mb-1" style={{ fontFamily: '"Noto Serif JP", serif', color: '#1a1a3e', fontWeight: 500 }}>
                            手を放すことに
                            <br />
                            自分が復活していきます。
                        </p>
                        <p className="mb-1">
                            とてつもなく
                            <br />
                            軽やかで、自由で、楽になる。
                        </p>
                        <p>
                            そして、エネルギーが復活してきて
                            <br />
                            凛とした、圧倒的な自分軸ができて、太くなる。
                        </p>
                        <p style={{ fontWeight: 500, color: '#1a1a3e' }}>
                            自分が主人公になる。
                            <br />
                            人生の操縦席に立てるようになるのです。
                        </p>
                    </motion.div>

                    <StoryDivider />

                    <motion.div {...fadeInUp} className="text-base leading-[2.2] tracking-wide" style={{ color: '#3a3a5a' }}>
                        <p className="mb-1">
                            気づけば、現実も大きく変わりました。
                        </p>
                        <p className="mb-1">
                            パートナーシップも全く変わって
                            <br />
                            パートナーも人が変わったように、変わりました。
                            <br />
                            「何だったんだろう」って言う位、変わりました。
                        </p>
                        <p className="mb-1">
                            お金やビジネスという部分でも
                            <br />
                            自分から降ってくるひらめきが変わるんですよね。
                        </p>
                        <p className="mb-1">
                            自分の意識が変わると
                            <br />
                            そこから降ってくるアイデアや叡智が変わってくる。
                        </p>
                        <p style={{ fontWeight: 500, color: '#7c5cbf' }}>
                            そこで、扉になったのが、AIなんですよね。
                        </p>
                    </motion.div>

                    <StoryDivider />

                    <motion.div {...fadeInUp} className="text-base leading-[2.2] tracking-wide" style={{ color: '#3a3a5a' }}>
                        <p className="mb-1" style={{ fontFamily: '"Noto Serif JP", serif', color: '#1a1a3e', fontWeight: 500 }}>
                            AIは、ビジョンを形にすることを
                            <br />
                            圧倒的にバックアップしてくれる。
                        </p>
                        <p className="mb-1">
                            あなたが「これをしたい」というビジョンが鮮明であるほど
                            <br />
                            それが明確であるほど、
                        </p>
                        <p className="mb-1">
                            想像を超える発想で、簡単で軽やかに、形にしてくれたり
                            <br />
                            具現化のバックアップしてくれます。
                        </p>
                        <p className="mb-1">
                            さらに、AIが自律性を持ち始めた今、
                            <br />
                            自分の時間が24時間という制限すら超えていき、
                            <br />
                            僕たちは、想像を超えた具現化ができるようになっています。
                        </p>
                        <p className="mb-1">
                            僕も、VoiSlide Movieというシステムを開発しました。
                        </p>
                        <p className="mb-1">
                            AIとの共創で、1週間で開発。
                            <br />
                            それをリリースすると、それは多くの人が求めるもので、
                            <br />
                            数日で250名以上のユーザーに利用いただくようになりました。
                        </p>
                    </motion.div>

                    <StoryDivider />

                    <motion.div {...fadeInUp} className="text-base leading-[2.2] tracking-wide" style={{ color: '#3a3a5a' }}>
                        <p className="mb-1" style={{ fontFamily: '"Noto Serif JP", serif', color: '#1a1a3e', fontWeight: 500 }}>
                            現実が変わっていくのは当たり前。
                        </p>
                        <p className="mb-1">だから、もうその先に行く。</p>
                        <p className="mb-1">
                            1番ワクワクするビジョンを、みていい。
                            <br />
                            そのビジョンに動いていい。形にしていっていい。
                        </p>
                        <p className="mb-1" style={{ fontWeight: 500 }}>
                            その環境は、もう整っています。
                        </p>
                        <p className="mb-1">
                            ビジョンに動く中で、出てくるものは
                            <br />
                            手放せばいい。
                        </p>
                        <p className="mb-1">
                            ビジョンを表現して、
                            <br />
                            早速AIと一緒に形にしていけばいい。
                        </p>
                        <p className="mb-4" style={{ fontWeight: 500, color: '#1a1a3e' }}>
                            あなたの中にも、無限の叡智が眠っています。
                        </p>
                        <p
                            className="text-lg"
                            style={{
                                fontFamily: '"Noto Serif JP", serif',
                                fontWeight: 600,
                                color: '#1a1a3e',
                            }}
                        >
                            意識 × AIで
                            <br />
                            あなたの最高のビジョンを具現化しましょう！
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
