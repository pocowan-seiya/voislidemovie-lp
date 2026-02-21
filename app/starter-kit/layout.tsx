import type { Metadata } from "next";
import { Noto_Sans_JP, Inter } from "next/font/google";
import "./starter-kit.css";

const notoSansJP = Noto_Sans_JP({
    variable: "--font-noto-sans-jp",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
    title: "無限の叡智スターターキット",
    description: "あなたの無限の可能性を解き放つ3つのAI対話システム",
};

export default function StarterKitLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={`${notoSansJP.variable} ${inter.variable} sk-layout`}>
            {children}
        </div>
    );
}
