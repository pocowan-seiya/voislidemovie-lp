"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface WorkStep {
    id: string;
    text: string | ((answers: Record<string, string>) => string);
    image?: { src: string; alt: string; caption?: string };
    inputType: "tap" | "select" | "text";
    inputKey?: string;
    options?: string[];
    placeholder?: string;
}

interface GuidedChatUIProps {
    systemName: string;
    accentColor: string;
    accentColorLight: string;
    icon: React.ReactNode;
    steps: WorkStep[];
    completionMessage?: string;
    onComplete?: (answers: Record<string, string>) => void;
}

// Speech Recognition types
interface SpeechRecognitionEvent extends Event {
    results: SpeechRecognitionResultList;
    resultIndex: number;
}

interface SpeechRecognitionErrorEvent extends Event {
    error: string;
}

interface SpeechRecognition extends EventTarget {
    continuous: boolean;
    interimResults: boolean;
    lang: string;
    start(): void;
    stop(): void;
    abort(): void;
    onresult: ((event: SpeechRecognitionEvent) => void) | null;
    onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
    onend: (() => void) | null;
    onstart: (() => void) | null;
}

declare global {
    interface Window {
        SpeechRecognition: new () => SpeechRecognition;
        webkitSpeechRecognition: new () => SpeechRecognition;
    }
}

export default function GuidedChatUI({
    systemName,
    accentColor,
    accentColorLight,
    icon,
    steps,
    completionMessage,
}: GuidedChatUIProps) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [visibleMessages, setVisibleMessages] = useState<
        { role: "assistant" | "user"; content: string; image?: WorkStep["image"] }[]
    >([]);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [textInput, setTextInput] = useState("");
    const [isAnimating, setIsAnimating] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [interimText, setInterimText] = useState("");
    const [voiceSupported, setVoiceSupported] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const recognitionRef = useRef<SpeechRecognition | null>(null);

    const scrollToBottom = useCallback(() => {
        setTimeout(() => {
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    }, []);

    // Check voice support
    useEffect(() => {
        const supported =
            typeof window !== "undefined" &&
            ("SpeechRecognition" in window || "webkitSpeechRecognition" in window);
        setVoiceSupported(supported);
    }, []);

    // Show first step on mount
    useEffect(() => {
        if (steps.length > 0 && visibleMessages.length === 0) {
            const step = steps[0];
            const text = typeof step.text === "function" ? step.text(answers) : step.text;
            setVisibleMessages([{ role: "assistant", content: text, image: step.image }]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [visibleMessages, scrollToBottom]);

    // Cleanup recognition on unmount
    useEffect(() => {
        return () => {
            recognitionRef.current?.abort();
        };
    }, []);

    const advanceToNextStep = useCallback(
        (userResponse?: string) => {
            const nextIndex = currentStepIndex + 1;

            if (userResponse) {
                setVisibleMessages((prev) => [...prev, { role: "user", content: userResponse }]);
            }

            if (nextIndex >= steps.length) {
                setIsCompleted(true);
                setVisibleMessages((prev) => [
                    ...prev,
                    {
                        role: "assistant",
                        content:
                            completionMessage || "ワークお疲れ様でした。\n今の体感を大切にしてください。✨",
                    },
                ]);
                return;
            }

            setIsAnimating(true);
            setCurrentStepIndex(nextIndex);

            setTimeout(() => {
                const step = steps[nextIndex];
                const newAnswers = { ...answers };
                const text =
                    typeof step.text === "function" ? step.text(newAnswers) : step.text;
                setVisibleMessages((prev) => [
                    ...prev,
                    { role: "assistant", content: text, image: step.image },
                ]);
                setIsAnimating(false);
            }, 800);
        },
        [currentStepIndex, steps, answers]
    );

    const handleTap = useCallback(() => {
        const step = steps[currentStepIndex];
        if (step.inputType !== "tap" || isAnimating || isCompleted) return;
        advanceToNextStep();
    }, [steps, currentStepIndex, isAnimating, isCompleted, advanceToNextStep]);

    const handleSelect = (option: string) => {
        const step = steps[currentStepIndex];
        if (step.inputKey) {
            setAnswers((prev) => ({ ...prev, [step.inputKey!]: option }));
        }
        advanceToNextStep(option);
    };

    const handleTextSubmit = () => {
        if (!textInput.trim()) return;
        const step = steps[currentStepIndex];
        if (step.inputKey) {
            setAnswers((prev) => ({ ...prev, [step.inputKey!]: textInput.trim() }));
        }
        const response = textInput.trim();
        setTextInput("");
        // Reset textarea height
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
        }
        advanceToNextStep(response);
    };

    // Voice input
    const toggleVoiceInput = useCallback(() => {
        if (isRecording) {
            recognitionRef.current?.stop();
            setIsRecording(false);
            setInterimText("");
            return;
        }

        const SpeechRecognitionAPI =
            window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognitionAPI) return;

        const recognition = new SpeechRecognitionAPI();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = "ja-JP";

        recognition.onstart = () => {
            setIsRecording(true);
        };

        recognition.onresult = (event: SpeechRecognitionEvent) => {
            let finalTranscript = "";
            let interimTranscript = "";

            for (let i = event.resultIndex; i < event.results.length; i++) {
                const result = event.results[i];
                if (result.isFinal) {
                    finalTranscript += result[0].transcript;
                } else {
                    interimTranscript += result[0].transcript;
                }
            }

            if (finalTranscript) {
                setTextInput((prev) => prev + finalTranscript);
                setInterimText("");
                if (textareaRef.current) {
                    setTimeout(() => {
                        if (textareaRef.current) {
                            textareaRef.current.style.height = "auto";
                            textareaRef.current.style.height =
                                Math.min(textareaRef.current.scrollHeight, 160) + "px";
                        }
                    }, 0);
                }
            }

            if (interimTranscript) {
                setInterimText(interimTranscript);
            }
        };

        recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
            // "no-speech" is expected when mic is on but user hasn't spoken
            if (event.error !== "no-speech") {
                console.warn("Speech recognition error:", event.error);
            }
            setIsRecording(false);
            setInterimText("");
        };

        recognition.onend = () => {
            setIsRecording(false);
            setInterimText("");
        };

        recognitionRef.current = recognition;
        recognition.start();
    }, [isRecording]);

    // Keyboard for tap steps
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const step = steps[currentStepIndex];
            if (step?.inputType !== "tap" || isAnimating || isCompleted) return;
            if (e.code === "Space" || e.code === "Enter") {
                e.preventDefault();
                advanceToNextStep();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [steps, currentStepIndex, isAnimating, isCompleted, advanceToNextStep]);

    const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextInput(e.target.value);
        const textarea = e.target;
        textarea.style.height = "auto";
        textarea.style.height = Math.min(textarea.scrollHeight, 160) + "px";
    };

    const currentStep = steps[currentStepIndex];
    const progress = ((currentStepIndex + 1) / steps.length) * 100;

    const renderMessageContent = (content: string) => {
        const parts = content.split(/(\/?starter-kit\/[a-zA-Z0-9-/]*)/g);
        return parts.map((part, i) => {
            if (part.match(/^\/?starter-kit\//)) {
                const path = part.startsWith("/") ? part : `/${part}`;
                const label =
                    path === "/starter-kit/letting-go"
                        ? "✨ 手放しワークシステムへ進む"
                        : path;
                return (
                    <a key={i} href={path} className="sk-chat-link">
                        {label}
                    </a>
                );
            }
            return <span key={i}>{part}</span>;
        });
    };

    // Compute the latest active side image from visible messages
    const activeSideImage = (() => {
        for (let i = visibleMessages.length - 1; i >= 0; i--) {
            if (visibleMessages[i].image) return visibleMessages[i].image;
        }
        return null;
    })();

    return (
        <div className="sk-chat-container">
            {/* Header */}
            <div className="sk-chat-header" style={{ borderBottomColor: accentColorLight }}>
                <div className="sk-chat-header-content">
                    <a href="/starter-kit" className="sk-chat-back">
                        ← 戻る
                    </a>
                    <span className="sk-chat-header-icon" style={{ color: accentColor }}>
                        {icon}
                    </span>
                    <h1>{systemName}</h1>
                </div>
                <div className="gw-progress-track" style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
                    <div
                        className="gw-progress-fill"
                        style={{ width: `${progress}%`, backgroundColor: accentColor }}
                    />
                </div>
            </div>

            {/* Main body: chat + side panel */}
            <div className="gc-body-layout">
                {/* Messages */}
                <div
                    className="sk-chat-messages"
                    onClick={handleTap}
                    style={{
                        cursor:
                            currentStep?.inputType === "tap" && !isCompleted
                                ? "pointer"
                                : "default",
                    }}
                >
                    {visibleMessages.map((msg, i) => (
                        <div key={i}>
                            <div
                                className={`sk-chat-bubble-wrapper ${msg.role === "user"
                                    ? "sk-chat-bubble-user"
                                    : "sk-chat-bubble-ai"
                                    }`}
                            >
                                {msg.role === "assistant" && (
                                    <div
                                        className="sk-chat-avatar"
                                        style={{
                                            backgroundColor: accentColorLight,
                                            color: accentColor,
                                        }}
                                    >
                                        {icon}
                                    </div>
                                )}
                                <div
                                    className={`sk-chat-bubble ${msg.role === "user" ? "sk-bubble-user" : "sk-bubble-ai"
                                        }`}
                                    style={
                                        msg.role === "user"
                                            ? { backgroundColor: accentColor, color: "#fff" }
                                            : {}
                                    }
                                >
                                    {msg.role === "assistant"
                                        ? renderMessageContent(msg.content)
                                        : msg.content}
                                </div>
                            </div>
                            {/* Mobile-only inline image */}
                            {msg.image && (
                                <div className="sk-guide-image-card sk-guide-image-mobile">
                                    <img
                                        src={msg.image.src}
                                        alt={msg.image.alt}
                                        className="sk-guide-image"
                                    />
                                    {msg.image.caption && (
                                        <p className="sk-guide-image-caption">
                                            {msg.image.caption}
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Typing indicator */}
                    {isAnimating && (
                        <div className="sk-chat-bubble-wrapper sk-chat-bubble-ai">
                            <div
                                className="sk-chat-avatar"
                                style={{
                                    backgroundColor: accentColorLight,
                                    color: accentColor,
                                }}
                            >
                                {icon}
                            </div>
                            <div className="sk-chat-bubble sk-bubble-ai">
                                <span className="sk-chat-typing">
                                    <span
                                        className="sk-dot"
                                        style={{ backgroundColor: accentColor }}
                                    ></span>
                                    <span
                                        className="sk-dot"
                                        style={{ backgroundColor: accentColor }}
                                    ></span>
                                    <span
                                        className="sk-dot"
                                        style={{ backgroundColor: accentColor }}
                                    ></span>
                                </span>
                            </div>
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>

                {/* Desktop side panel for images */}
                {activeSideImage && (
                    <div className="gc-side-panel">
                        <div className="gc-side-image-card">
                            <img
                                src={activeSideImage.src}
                                alt={activeSideImage.alt}
                                className="gc-side-image"
                            />
                            {activeSideImage.caption && (
                                <p className="gc-side-image-caption">
                                    {activeSideImage.caption}
                                </p>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Bottom action area */}
            {!isCompleted && currentStep && (
                <div className="sk-chat-input-area">
                    {currentStep.inputType === "tap" && (
                        <div
                            className="gc-tap-bar"
                            style={{ borderTopColor: accentColorLight }}
                            onClick={handleTap}
                        >
                            <span className="gc-tap-text" style={{ color: accentColor }}>
                                タップして次へ ✨
                            </span>
                        </div>
                    )}

                    {currentStep.inputType === "select" && currentStep.options && (
                        <div
                            className="gc-select-bar"
                            style={{ borderTopColor: accentColorLight }}
                        >
                            {currentStep.options.map((option) => (
                                <button
                                    key={option}
                                    className="gc-select-btn"
                                    style={{ borderColor: accentColor, color: accentColor }}
                                    onClick={() => handleSelect(option)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    )}

                    {currentStep.inputType === "text" && (
                        <>
                            {/* Voice recording indicator */}
                            {isRecording && (
                                <div className="sk-chat-voice-indicator">
                                    <div className="sk-wave-container">
                                        <span className="sk-wave" style={{ backgroundColor: accentColor }} />
                                        <span className="sk-wave" style={{ backgroundColor: accentColor }} />
                                        <span className="sk-wave" style={{ backgroundColor: accentColor }} />
                                        <span className="sk-wave" style={{ backgroundColor: accentColor }} />
                                        <span className="sk-wave" style={{ backgroundColor: accentColor }} />
                                    </div>
                                    <span className="sk-voice-label">
                                        {interimText || "聞いています..."}
                                    </span>
                                </div>
                            )}

                            <form
                                className="sk-chat-input-form"
                                style={{ borderTopColor: accentColorLight }}
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleTextSubmit();
                                }}
                            >
                                <div className="sk-chat-input-wrapper">
                                    <textarea
                                        ref={textareaRef}
                                        className="sk-chat-input"
                                        value={textInput}
                                        onChange={handleTextareaChange}
                                        placeholder={
                                            isRecording
                                                ? "音声入力中..."
                                                : currentStep.placeholder || "入力してください..."
                                        }
                                        rows={1}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" && !e.shiftKey) {
                                                e.preventDefault();
                                                handleTextSubmit();
                                            }
                                        }}
                                    />

                                    {/* Voice input button */}
                                    {voiceSupported && (
                                        <button
                                            type="button"
                                            onClick={toggleVoiceInput}
                                            className={`sk-chat-voice ${isRecording ? "sk-chat-voice-active" : ""}`}
                                            style={{
                                                backgroundColor: isRecording ? accentColor : undefined,
                                                color: isRecording ? "#fff" : accentColor,
                                            }}
                                            title={isRecording ? "音声入力を停止" : "音声入力"}
                                        >
                                            {isRecording ? (
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                                    <rect x="6" y="6" width="12" height="12" rx="2" />
                                                </svg>
                                            ) : (
                                                <svg
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                                                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                                                    <line x1="12" y1="19" x2="12" y2="23" />
                                                    <line x1="8" y1="23" x2="16" y2="23" />
                                                </svg>
                                            )}
                                        </button>
                                    )}

                                    {/* Send button */}
                                    <button
                                        type="submit"
                                        disabled={!textInput.trim()}
                                        className="sk-chat-send"
                                        style={{
                                            backgroundColor: textInput.trim() ? accentColor : undefined,
                                        }}
                                    >
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path d="M22 2L11 13" />
                                            <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            )}

            {/* Completion */}
            {isCompleted && (
                <div className="gc-complete-bar" style={{ borderTopColor: accentColorLight }}>
                    <button
                        className="gc-complete-btn"
                        style={{ backgroundColor: accentColor }}
                        onClick={() => window.location.reload()}
                    >
                        もう一度ワークする
                    </button>
                    <a href="/starter-kit" className="gc-back-link">
                        スターターキットに戻る
                    </a>
                </div>
            )}
        </div>
    );
}
