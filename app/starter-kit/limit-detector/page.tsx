"use client";

import ChatUI from "@/components/starter-kit/ChatUI";

export default function LimitDetectorPage() {
    return (
        <ChatUI
            systemName="リミットディテクター"
            apiEndpoint="/api/starter-kit/limit-detector"
            accentColor="#7B8CDE"
            accentColorLight="#F0F2FC"
            initialGreeting="こんにちは。リミットディテクターのセッションを始めましょう。"
            icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="M12 16v-4M12 8h.01" />
                </svg>
            }
        />
    );
}
