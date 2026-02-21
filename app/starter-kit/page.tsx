import SystemCard from "@/components/starter-kit/SystemCard";

export default function StarterKitPage() {
    return (
        <main className="sk-landing">
            {/* Hero */}
            <section className="sk-hero">
                <div className="sk-hero-glow sk-hero-glow-1" />
                <div className="sk-hero-glow sk-hero-glow-2" />
                <div className="sk-hero-content">
                    <p className="sk-hero-eyebrow">Infinite Wisdom</p>
                    <h1 className="sk-hero-title">
                        無限の叡智
                        <br />
                        <span className="sk-hero-title-accent">スターターキット</span>
                    </h1>
                    <p className="sk-hero-description">
                        あなたの無限の可能性を解き放つ、3つのAI対話システム。
                        <br />
                        ビジョンを描き、制限を見つけ、手放していく。
                        <br />
                        ステップ順に進むのがおすすめですが、直感で選ぶのもOKです。
                    </p>
                </div>
            </section>

            {/* Cards */}
            <section className="sk-cards-section">
                {/* Preparation */}
                <div className="sk-prep-section">
                    <a href="/starter-kit/preparation" className="sk-prep-card">
                        <div className="sk-prep-card-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                            </svg>
                        </div>
                        <div className="sk-prep-card-content">
                            <span className="sk-prep-card-label">最初の準備</span>
                            <h3 className="sk-prep-card-title">映写機の場所に立つ</h3>
                            <p className="sk-prep-card-desc">
                                各システムを使う前に、あなたの真実の場所「映写機の場所」に立ち、
                                宇宙意識とつながる準備をします。
                            </p>
                        </div>
                        <div className="sk-prep-card-arrow">→</div>
                    </a>
                </div>

                <div className="sk-cards-grid">
                    <SystemCard
                        step={1}
                        title="無限ビジョンナビ"
                        subtitle="Infinite Vision Navi"
                        description="未来から逆算して、あなただけのビジョンを高解像度で描き出します。体感に没入し、実現した自分から道を見つけましょう。"
                        icon={
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <circle cx="12" cy="12" r="3" />
                                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M16.36 16.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M16.36 7.64l1.42-1.42" />
                            </svg>
                        }
                        href="/starter-kit/vision-navi"
                        accentColor="#D4A574"
                        accentColorLight="#FDF6EE"
                    />
                    <SystemCard
                        step={2}
                        title="リミットディテクター"
                        subtitle="Limit Detector"
                        description="あなたが無意識に持っている「制限」を映し出し、分離のパターンに気づくための対話システムです。"
                        icon={
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                                <path d="M12 16v-4M12 8h.01" />
                            </svg>
                        }
                        href="/starter-kit/limit-detector"
                        accentColor="#7B8CDE"
                        accentColorLight="#F0F2FC"
                    />
                    <SystemCard
                        step={3}
                        title="手放しワークシステム"
                        subtitle="Letting Go Work System"
                        description="捉えた制限や不要なエネルギーを手放し、本来の光に戻すためのワークシステムです。"
                        icon={
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15,3 21,3 21,9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                        }
                        href="/starter-kit/letting-go"
                        accentColor="#9DB5A0"
                        accentColorLight="#F2F7F3"
                    />
                </div>
            </section>

            {/* Footer */}
            <footer className="sk-footer">
                <p>© 2026 無限の叡智スターターキット</p>
            </footer>
        </main>
    );
}
