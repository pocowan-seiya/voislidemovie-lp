"use client";

import Link from "next/link";

interface SystemCardProps {
    step: number;
    title: string;
    subtitle: string;
    description: string;
    icon: React.ReactNode;
    href: string;
    accentColor: string;
    accentColorLight: string;
    disabled?: boolean;
    badge?: string;
}

export default function SystemCard({
    step,
    title,
    subtitle,
    description,
    icon,
    href,
    accentColor,
    accentColorLight,
    disabled = false,
    badge,
}: SystemCardProps) {
    const content = (
        <div
            className={`sk-card ${disabled ? "sk-card-disabled" : ""}`}
            style={{ "--card-accent": accentColor, "--card-accent-light": accentColorLight } as React.CSSProperties}
        >
            {badge && (
                <span className="sk-card-badge">{badge}</span>
            )}
            <div className="sk-card-step">STEP {step}</div>
            <div className="sk-card-icon">{icon}</div>
            <h3 className="sk-card-title">{title}</h3>
            <p className="sk-card-subtitle">{subtitle}</p>
            <p className="sk-card-description">{description}</p>
            {!disabled && (
                <div className="sk-card-cta" style={{ color: accentColor }}>
                    はじめる →
                </div>
            )}
        </div>
    );

    if (disabled) {
        return content;
    }

    return (
        <Link href={href} style={{ textDecoration: "none" }}>
            {content}
        </Link>
    );
}
