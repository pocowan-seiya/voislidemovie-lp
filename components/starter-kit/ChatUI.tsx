"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface Message {
    role: "user" | "assistant";
    content: string;
}

interface ChatUIProps {
    systemName: string;
    apiEndpoint: string;
    accentColor: string;
    accentColorLight: string;
    initialGreeting: string;
    icon: React.ReactNode;
    phaseLabels?: string[];
    guideImage?: {
        src: string;
        alt: string;
        caption?: string;
    };
}

// Extend Window for SpeechRecognition
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

export default function ChatUI({
    systemName,
    apiEndpoint,
    accentColor,
    accentColorLight,
    initialGreeting,
    icon,
    guideImage,
}: ChatUIProps) {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isGreetingDone, setIsGreetingDone] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [interimText, setInterimText] = useState("");
    const [voiceSupported, setVoiceSupported] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const recognitionRef = useRef<SpeechRecognition | null>(null);

    const scrollToBottom = useCallback(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages, scrollToBottom]);

    // Check voice support
    useEffect(() => {
        const supported = typeof window !== "undefined" &&
            ("SpeechRecognition" in window || "webkitSpeechRecognition" in window);
        setVoiceSupported(supported);
    }, []);

    // Send initial greeting on mount
    useEffect(() => {
        if (isGreetingDone) return;
        setIsGreetingDone(true);

        const fetchGreeting = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(apiEndpoint, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        messages: [{ role: "user", content: initialGreeting }],
                    }),
                });

                if (!response.ok) {
                    if (response.status === 429) {
                        throw new Error("rate_limit");
                    }
                    throw new Error(`API error: ${response.status}`);
                }

                const reader = response.body?.getReader();
                if (!reader) throw new Error("No reader");

                const decoder = new TextDecoder();
                let fullText = "";

                setMessages([{ role: "assistant", content: "" }]);

                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;
                    const chunk = decoder.decode(value, { stream: true });
                    fullText += chunk;
                    setMessages([{ role: "assistant", content: fullText }]);
                }
            } catch (error) {
                console.error("Greeting error:", error);
                const fallback = error instanceof Error && error.message === "rate_limit"
                    ? "現在APIの利用制限に達しています。しばらくお待ちいただくか、APIキーの設定をご確認ください。"
                    : "こんにちは。対話を始めましょう。今、あなたが一番気になっていることは何ですか？";
                setMessages([
                    {
                        role: "assistant",
                        content: fallback,
                    },
                ]);
            }
            setIsLoading(false);
        };

        fetchGreeting();
    }, [apiEndpoint, initialGreeting, isGreetingDone]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { role: "user", content: input.trim() };
        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);
        setInput("");
        setIsLoading(true);

        // Reset textarea height
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
        }

        try {
            const response = await fetch(apiEndpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: updatedMessages.map((m) => ({
                        role: m.role,
                        content: m.content,
                    })),
                }),
            });

            if (!response.ok) {
                if (response.status === 429) {
                    throw new Error("rate_limit");
                }
                throw new Error(`API error: ${response.status}`);
            }

            const reader = response.body?.getReader();
            if (!reader) throw new Error("No reader");

            const decoder = new TextDecoder();
            let fullText = "";

            setMessages([...updatedMessages, { role: "assistant", content: "" }]);

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                const chunk = decoder.decode(value, { stream: true });
                fullText += chunk;
                setMessages([
                    ...updatedMessages,
                    { role: "assistant", content: fullText },
                ]);
            }
        } catch (error) {
            console.error("Chat error:", error);
            const errMsg = error instanceof Error && error.message === "rate_limit"
                ? "APIの利用制限に達しています。しばらくお待ちいただいてから再度お試しください。"
                : "申し訳ございません。エラーが発生しました。もう一度お試しください。";
            setMessages([
                ...updatedMessages,
                {
                    role: "assistant",
                    content: errMsg,
                },
            ]);
        }

        setIsLoading(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInput(e.target.value);
        // Auto-resize
        const textarea = e.target;
        textarea.style.height = "auto";
        textarea.style.height = Math.min(textarea.scrollHeight, 160) + "px";
    };

    // Voice input
    const toggleVoiceInput = useCallback(() => {
        if (isRecording) {
            // Stop recording
            recognitionRef.current?.stop();
            setIsRecording(false);
            setInterimText("");
            return;
        }

        // Start recording
        const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
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
                setInput(prev => prev + finalTranscript);
                setInterimText("");
                // Auto-resize textarea
                if (textareaRef.current) {
                    setTimeout(() => {
                        if (textareaRef.current) {
                            textareaRef.current.style.height = "auto";
                            textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 160) + "px";
                        }
                    }, 0);
                }
            }

            if (interimTranscript) {
                setInterimText(interimTranscript);
            }
        };

        recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
            console.error("Speech recognition error:", event.error);
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

    // Cleanup recognition on unmount
    useEffect(() => {
        return () => {
            recognitionRef.current?.abort();
        };
    }, []);

    // Render message content with clickable links for /starter-kit/* paths
    const renderMessageContent = (content: string) => {
        const linkRegex = /(\/starter-kit\/[a-z-]+)/g;
        const parts = content.split(linkRegex);
        if (parts.length === 1) return content;
        return parts.map((part, idx) => {
            if (linkRegex.test(part)) {
                linkRegex.lastIndex = 0;
                const label = part === "/starter-kit/letting-go"
                    ? "\u2728 \u624B\u653E\u3057\u30EF\u30FC\u30AF\u30B7\u30B9\u30C6\u30E0\u3078\u9032\u3080"
                    : part;
                return (
                    <a
                        key={idx}
                        href={part}
                        className="sk-chat-link"
                        style={{ color: accentColor }}
                    >
                        {label}
                    </a>
                );
            }
            return part;
        });
    };

    return (
        <div className="sk-chat-container">
            {/* Header */}
            <div className="sk-chat-header" style={{ borderBottomColor: accentColorLight }}>
                <a href="/starter-kit" className="sk-chat-back">
                    ← 戻る
                </a>
                <div className="sk-chat-header-title">
                    <span className="sk-chat-header-icon" style={{ color: accentColor }}>
                        {icon}
                    </span>
                    <h1>{systemName}</h1>
                </div>
            </div>

            {/* Messages */}
            <div className="sk-chat-messages">
                {messages.map((msg, i) => (
                    <div key={i}>
                        <div
                            className={`sk-chat-bubble-wrapper ${msg.role === "user" ? "sk-chat-bubble-user" : "sk-chat-bubble-ai"
                                }`}
                        >
                            {msg.role === "assistant" && (
                                <div
                                    className="sk-chat-avatar"
                                    style={{ backgroundColor: accentColorLight, color: accentColor }}
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
                                {msg.content ? (
                                    msg.role === "assistant" ? renderMessageContent(msg.content) : msg.content
                                ) : (
                                    <span className="sk-chat-typing">
                                        <span className="sk-dot" style={{ backgroundColor: accentColor }}></span>
                                        <span className="sk-dot" style={{ backgroundColor: accentColor }}></span>
                                        <span className="sk-dot" style={{ backgroundColor: accentColor }}></span>
                                    </span>
                                )}
                            </div>
                        </div>
                        {/* Show guide image after the first AI message */}
                        {i === 0 && msg.role === "assistant" && guideImage && (
                            <div className="sk-guide-image-card">
                                <img src={guideImage.src} alt={guideImage.alt} className="sk-guide-image" />
                                {guideImage.caption && (
                                    <p className="sk-guide-image-caption">{guideImage.caption}</p>
                                )}
                            </div>
                        )}
                    </div>
                ))}
                {isLoading && messages.length > 0 && messages[messages.length - 1].role === "user" && (
                    <div className="sk-chat-bubble-wrapper sk-chat-bubble-ai">
                        <div
                            className="sk-chat-avatar"
                            style={{ backgroundColor: accentColorLight, color: accentColor }}
                        >
                            {icon}
                        </div>
                        <div className="sk-chat-bubble sk-bubble-ai">
                            <span className="sk-chat-typing">
                                <span className="sk-dot" style={{ backgroundColor: accentColor }}></span>
                                <span className="sk-dot" style={{ backgroundColor: accentColor }}></span>
                                <span className="sk-dot" style={{ backgroundColor: accentColor }}></span>
                            </span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Recording overlay indicator */}
            {isRecording && (
                <div className="sk-voice-indicator" style={{ borderTopColor: accentColorLight }}>
                    <div className="sk-voice-waves">
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

            {/* Input */}
            <form onSubmit={handleSubmit} className="sk-chat-input-form">
                <div className="sk-chat-input-wrapper">
                    <textarea
                        ref={textareaRef}
                        value={input}
                        onChange={handleTextareaChange}
                        onKeyDown={handleKeyDown}
                        placeholder={isRecording ? "音声入力中..." : "メッセージを入力..."}
                        className="sk-chat-input"
                        rows={1}
                        disabled={isLoading}
                    />

                    {/* Voice input button */}
                    {voiceSupported && (
                        <button
                            type="button"
                            onClick={toggleVoiceInput}
                            disabled={isLoading}
                            className={`sk-chat-voice ${isRecording ? "sk-chat-voice-active" : ""}`}
                            style={{
                                backgroundColor: isRecording ? accentColor : undefined,
                                color: isRecording ? "#fff" : accentColor,
                            }}
                            title={isRecording ? "音声入力を停止" : "音声入力"}
                        >
                            {isRecording ? (
                                // Stop icon
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <rect x="6" y="6" width="12" height="12" rx="2" />
                                </svg>
                            ) : (
                                // Microphone icon
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                        disabled={isLoading || !input.trim()}
                        className="sk-chat-send"
                        style={{
                            backgroundColor: input.trim() && !isLoading ? accentColor : undefined,
                        }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 2L11 13" />
                            <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    );
}
