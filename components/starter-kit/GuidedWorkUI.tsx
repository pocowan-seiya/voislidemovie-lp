"use client";

import { useState, useEffect, useCallback } from "react";

interface WorkStep {
    id: string;
    text: string | ((answers: Record<string, string>) => string);
    image?: { src: string; alt: string; caption?: string };
    inputType: "tap" | "select" | "text";
    inputKey?: string;
    options?: string[];
    placeholder?: string;
}

interface GuidedWorkUIProps {
    steps: WorkStep[];
    accentColor: string;
    onComplete?: (answers: Record<string, string>) => void;
}

export default function GuidedWorkUI({ steps, accentColor, onComplete }: GuidedWorkUIProps) {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [textInput, setTextInput] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    const step = steps[currentStep];
    const totalSteps = steps.length;
    const progress = ((currentStep + 1) / totalSteps) * 100;

    // Fade in on step change
    useEffect(() => {
        setIsVisible(false);
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, [currentStep]);

    const goNext = useCallback(() => {
        if (currentStep < totalSteps - 1) {
            setIsVisible(false);
            setTimeout(() => {
                setCurrentStep((prev) => prev + 1);
                setTextInput("");
            }, 400);
        } else {
            setIsCompleted(true);
            onComplete?.(answers);
        }
    }, [currentStep, totalSteps, answers, onComplete]);

    const goBack = useCallback(() => {
        if (currentStep > 0) {
            setIsVisible(false);
            setTimeout(() => {
                setCurrentStep((prev) => prev - 1);
                setTextInput("");
            }, 400);
        }
    }, [currentStep]);

    const handleSelect = (option: string) => {
        if (step.inputKey) {
            setAnswers((prev) => ({ ...prev, [step.inputKey!]: option }));
        }
        goNext();
    };

    const handleTextSubmit = () => {
        if (textInput.trim() && step.inputKey) {
            setAnswers((prev) => ({ ...prev, [step.inputKey!]: textInput.trim() }));
            goNext();
        }
    };

    // Keyboard & tap to advance (only for tap-type steps)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (step.inputType !== "tap") return;
            if (e.code === "Space" || e.code === "Enter") {
                e.preventDefault();
                goNext();
            }
            if (e.code === "ArrowLeft" || e.code === "Backspace") {
                e.preventDefault();
                goBack();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [step, goNext, goBack]);

    const resolvedText = typeof step.text === "function" ? step.text(answers) : step.text;

    if (isCompleted) {
        return (
            <div className="gw-container">
                <div className="gw-complete">
                    <div className="gw-complete-icon">✨</div>
                    <h2 className="gw-complete-title">ワーク完了</h2>
                    <p className="gw-complete-text">
                        お疲れ様でした。
                        <br />
                        今の体感を大切にしてください。
                    </p>
                    <button
                        className="gw-complete-btn"
                        style={{ backgroundColor: accentColor }}
                        onClick={() => {
                            setCurrentStep(0);
                            setAnswers({});
                            setIsCompleted(false);
                        }}
                    >
                        もう一度ワークする
                    </button>
                    <a href="/starter-kit" className="gw-complete-back">
                        ← スターターキットに戻る
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div
            className="gw-container"
            onClick={() => {
                if (step.inputType === "tap") goNext();
            }}
        >
            {/* Header */}
            <div className="gw-header">
                <button className="gw-back-btn" onClick={(e) => { e.stopPropagation(); goBack(); }}>
                    {currentStep > 0 ? "← 戻る" : ""}
                </button>
                <span className="gw-step-label">
                    Step {currentStep + 1} / {totalSteps}
                </span>
                <a
                    href="/starter-kit"
                    className="gw-exit-btn"
                    onClick={(e) => e.stopPropagation()}
                >
                    ✕
                </a>
            </div>

            {/* Progress bar */}
            <div className="gw-progress-track">
                <div
                    className="gw-progress-fill"
                    style={{ width: `${progress}%`, backgroundColor: accentColor }}
                />
            </div>

            {/* Content */}
            <div className={`gw-content ${isVisible ? "gw-visible" : "gw-hidden"}`}>
                <div className="gw-text-area">
                    {resolvedText.split("\n").map((line, i) => (
                        <p key={i} className="gw-text-line">
                            {line}
                        </p>
                    ))}
                </div>

                {/* Image */}
                {step.image && (
                    <div className="gw-image-card">
                        <img src={step.image.src} alt={step.image.alt} className="gw-image" />
                        {step.image.caption && (
                            <p className="gw-image-caption">
                                {step.image.caption.split("\n").map((line, i) => (
                                    <span key={i}>{line}<br /></span>
                                ))}
                            </p>
                        )}
                    </div>
                )}

                {/* Input area */}
                {step.inputType === "select" && step.options && (
                    <div className="gw-select-area" onClick={(e) => e.stopPropagation()}>
                        {step.options.map((option) => (
                            <button
                                key={option}
                                className="gw-select-btn"
                                style={{ borderColor: accentColor, color: accentColor }}
                                onClick={() => handleSelect(option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                )}

                {step.inputType === "text" && (
                    <div className="gw-text-input-area" onClick={(e) => e.stopPropagation()}>
                        <input
                            type="text"
                            className="gw-text-input"
                            placeholder={step.placeholder || "入力してください..."}
                            value={textInput}
                            onChange={(e) => setTextInput(e.target.value)}
                            onKeyDown={(e) => { if (e.key === "Enter") handleTextSubmit(); }}
                            autoFocus
                        />
                        <button
                            className="gw-text-submit"
                            style={{ backgroundColor: accentColor }}
                            onClick={handleTextSubmit}
                            disabled={!textInput.trim()}
                        >
                            次へ →
                        </button>
                    </div>
                )}
            </div>

            {/* Tap hint (only for tap-type) */}
            {step.inputType === "tap" && (
                <div className="gw-tap-hint" style={{ color: accentColor }}>
                    タップして次へ ✨
                </div>
            )}
        </div>
    );
}
