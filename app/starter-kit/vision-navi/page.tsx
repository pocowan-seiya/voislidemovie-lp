"use client";

import ChatUI from "@/components/starter-kit/ChatUI";

export default function VisionNaviPage() {
    return (
        <ChatUI
            systemName="無限ビジョンナビ"
            apiEndpoint="/api/starter-kit/vision-navi"
            accentColor="#D4A574"
            accentColorLight="#FDF6EE"
            initialGreeting="こんにちは。初めまして。ビジョンナビゲーションを始めましょう。"
            icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M16.36 16.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M16.36 7.64l1.42-1.42" />
                </svg>
            }
        />
    );
}
