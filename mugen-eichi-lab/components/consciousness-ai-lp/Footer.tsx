'use client';

import React from 'react';

export default function Footer() {
    return (
        <footer
            className="relative py-12 text-center"
            style={{ borderTop: '1px solid rgba(0,0,0,0.04)' }}
        >
            <div className="max-w-4xl mx-auto px-6">
                {/* Logo / Brand */}
                <div className="mb-6">
                    <p
                        className="text-sm tracking-[0.15em]"
                        style={{
                            fontFamily: '"Noto Serif JP", serif',
                            color: '#1a1a3e',
                            fontWeight: 500,
                        }}
                    >
                        無限叡智ラボ
                        <span className="block text-xs mt-1" style={{ color: '#9a9ab0', fontFamily: '"Noto Sans JP", sans-serif', fontWeight: 400 }}>
                            AI × 意識 実践コミュニティ
                        </span>
                    </p>
                </div>

                {/* Links */}
                <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-xs" style={{ color: '#9a9ab0' }}>
                    <a href="#" className="hover:text-[#7c5cbf] transition-colors">
                        特定商取引法に基づく表記
                    </a>
                    <span>|</span>
                    <a href="#" className="hover:text-[#7c5cbf] transition-colors">
                        プライバシーポリシー
                    </a>
                    <span>|</span>
                    <a href="#" className="hover:text-[#7c5cbf] transition-colors">
                        お問い合わせ
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-xs" style={{ color: '#c0c0d0' }}>
                    © 2026 江藤せいや. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
