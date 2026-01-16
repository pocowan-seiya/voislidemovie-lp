"use client";

import React, { useState, useEffect, useRef } from "react";

// ===== TYPES =====
interface Block {
    id: string;
    type: "heading" | "text" | "image" | "button" | "spacer" | "divider";
    content: {
        text?: string;
        src?: string;
        alt?: string;
        href?: string;
    };
    style: {
        fontSize?: string;
        color?: string;
        textAlign?: "left" | "center" | "right";
        fontWeight?: string;
    };
}

interface Section {
    id: string;
    blocks: Block[];
    style: {
        backgroundColor?: string;
        backgroundImage?: string;
        padding?: string;
    };
}

interface LPDesignEditorProps {
    lpStructure: any[];
    designLayout: any;
    onUpdateContent: (index: number, newContent: string) => void;
}

// ===== FLOATING AI CHAT =====
const AIChat: React.FC<{ isMinimized: boolean; onToggle: () => void }> = ({ isMinimized, onToggle }) => {
    const [messages, setMessages] = useState<{ role: string; content: string }[]>([
        { role: "assistant", content: "デザインについて何かお手伝いしましょうか？「もっと派手にして」「色を青系に変えて」など、何でも聞いてください！" }
    ]);
    const [input, setInput] = useState("");

    if (isMinimized) {
        return (
            <button
                onClick={onToggle}
                className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg flex items-center justify-center text-2xl hover:scale-110 transition-transform z-50"
            >
                💬
            </button>
        );
    }

    return (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden">
            {/* Header */}
            <div className="h-12 bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-between px-4">
                <span className="font-bold text-white text-sm">💬 AIアシスタント</span>
                <button onClick={onToggle} className="text-white/80 hover:text-white text-lg">−</button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3">
                {messages.map((msg, i) => (
                    <div key={i} className={`text-sm p-2 rounded-lg ${msg.role === "assistant" ? "bg-zinc-800 text-zinc-200" : "bg-purple-600 text-white ml-8"}`}>
                        {msg.content}
                    </div>
                ))}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-zinc-800">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="質問を入力..."
                        className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white placeholder-zinc-500 outline-none focus:border-purple-500"
                    />
                    <button
                        onClick={() => {
                            if (input.trim()) {
                                setMessages(prev => [...prev, { role: "user", content: input }, { role: "assistant", content: "了解しました！デザインを調整しています..." }]);
                                setInput("");
                            }
                        }}
                        className="px-3 py-2 bg-purple-600 rounded-lg text-white text-sm font-medium hover:bg-purple-500 transition-colors"
                    >
                        送信
                    </button>
                </div>
            </div>
        </div>
    );
};

// ===== PARTS SIDEBAR =====
const PartsSidebar: React.FC<{ onDragStart: (type: Block["type"]) => void }> = ({ onDragStart }) => {
    const parts = [
        { type: "heading" as const, icon: "H", label: "見出し", color: "bg-blue-500" },
        { type: "text" as const, icon: "T", label: "テキスト", color: "bg-green-500" },
        { type: "image" as const, icon: "🖼️", label: "画像", color: "bg-pink-500" },
        { type: "button" as const, icon: "▶", label: "ボタン", color: "bg-purple-500" },
        { type: "spacer" as const, icon: "⬍", label: "余白", color: "bg-gray-500" },
        { type: "divider" as const, icon: "—", label: "区切り線", color: "bg-zinc-500" },
    ];

    return (
        <div className="w-56 bg-zinc-900 border-r border-zinc-800 flex flex-col">
            <div className="h-14 flex items-center px-4 border-b border-zinc-800">
                <span className="font-bold text-sm text-white">📦 パーツ</span>
            </div>
            <div className="flex-1 overflow-y-auto p-3">
                <div className="space-y-2">
                    {parts.map((part) => (
                        <div
                            key={part.type}
                            draggable
                            onDragStart={(e) => {
                                e.dataTransfer.setData("blockType", part.type);
                                e.dataTransfer.effectAllowed = "copy";
                                onDragStart(part.type);
                            }}
                            className="flex items-center gap-3 p-3 bg-zinc-800 rounded-lg cursor-grab active:cursor-grabbing hover:bg-zinc-700 transition-colors group"
                        >
                            <div className={`w-8 h-8 ${part.color} rounded-lg flex items-center justify-center text-white font-bold text-sm`}>
                                {part.icon}
                            </div>
                            <span className="text-sm text-zinc-300 group-hover:text-white">{part.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// ===== STYLES SIDEBAR =====
const StylesSidebar: React.FC<{
    selectedItem: { type: "section" | "block"; data: Section | Block } | null;
    onUpdateSection: (updates: Partial<Section["style"]>) => void;
    onUpdateBlock: (updates: Partial<Block["style"]>) => void;
}> = ({ selectedItem, onUpdateSection, onUpdateBlock }) => {
    if (!selectedItem) {
        return (
            <div className="w-64 bg-zinc-900 border-l border-zinc-800 flex flex-col">
                <div className="h-14 flex items-center px-4 border-b border-zinc-800">
                    <span className="font-bold text-sm text-white">🎨 スタイル</span>
                </div>
                <div className="flex-1 flex items-center justify-center p-4">
                    <p className="text-sm text-zinc-500 text-center">セクションまたはパーツを選択してスタイルを編集</p>
                </div>
            </div>
        );
    }

    const isSection = selectedItem.type === "section";

    return (
        <div className="w-64 bg-zinc-900 border-l border-zinc-800 flex flex-col">
            <div className="h-14 flex items-center px-4 border-b border-zinc-800">
                <span className="font-bold text-sm text-white">🎨 {isSection ? "セクション" : "パーツ"}スタイル</span>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {isSection ? (
                    <>
                        <div>
                            <label className="text-xs text-zinc-400 block mb-2">背景色</label>
                            <input
                                type="color"
                                value={(selectedItem.data as Section).style?.backgroundColor || "#1a1a1a"}
                                onChange={(e) => onUpdateSection({ backgroundColor: e.target.value })}
                                className="w-full h-10 rounded cursor-pointer"
                            />
                        </div>
                        <div>
                            <label className="text-xs text-zinc-400 block mb-2">余白</label>
                            <select
                                value={(selectedItem.data as Section).style?.padding || "4rem"}
                                onChange={(e) => onUpdateSection({ padding: e.target.value })}
                                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white"
                            >
                                <option value="2rem">小</option>
                                <option value="4rem">中</option>
                                <option value="6rem">大</option>
                            </select>
                        </div>
                    </>
                ) : (
                    <>
                        <div>
                            <label className="text-xs text-zinc-400 block mb-2">文字色</label>
                            <input
                                type="color"
                                value={(selectedItem.data as Block).style?.color || "#ffffff"}
                                onChange={(e) => onUpdateBlock({ color: e.target.value })}
                                className="w-full h-10 rounded cursor-pointer"
                            />
                        </div>
                        <div>
                            <label className="text-xs text-zinc-400 block mb-2">文字サイズ</label>
                            <select
                                value={(selectedItem.data as Block).style?.fontSize || "1rem"}
                                onChange={(e) => onUpdateBlock({ fontSize: e.target.value })}
                                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white"
                            >
                                <option value="0.875rem">小</option>
                                <option value="1rem">中</option>
                                <option value="1.25rem">大</option>
                                <option value="2rem">特大</option>
                                <option value="3rem">見出し</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-xs text-zinc-400 block mb-2">配置</label>
                            <div className="flex gap-1">
                                {["left", "center", "right"].map((align) => (
                                    <button
                                        key={align}
                                        onClick={() => onUpdateBlock({ textAlign: align as any })}
                                        className={`flex-1 py-2 rounded text-sm ${(selectedItem.data as Block).style?.textAlign === align ? "bg-purple-600 text-white" : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"}`}
                                    >
                                        {align === "left" ? "←" : align === "center" ? "↔" : "→"}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

// ===== BLOCK RENDERER =====
const BlockRenderer: React.FC<{
    block: Block;
    isSelected: boolean;
    onSelect: () => void;
    onUpdate: (content: Partial<Block["content"]>) => void;
    onDelete: () => void;
}> = ({ block, isSelected, onSelect, onUpdate, onDelete }) => {
    const renderContent = () => {
        switch (block.type) {
            case "heading":
                return (
                    <h2
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) => onUpdate({ text: e.currentTarget.innerText })}
                        className="outline-none"
                        style={{
                            fontSize: block.style?.fontSize || "2rem",
                            color: block.style?.color || "#fff",
                            textAlign: block.style?.textAlign || "center",
                            fontWeight: "bold"
                        }}
                    >
                        {block.content.text || "見出しを入力"}
                    </h2>
                );
            case "text":
                return (
                    <p
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) => onUpdate({ text: e.currentTarget.innerText })}
                        className="outline-none"
                        style={{
                            fontSize: block.style?.fontSize || "1rem",
                            color: block.style?.color || "#ccc",
                            textAlign: block.style?.textAlign || "center"
                        }}
                    >
                        {block.content.text || "テキストを入力"}
                    </p>
                );
            case "image":
                return block.content.src ? (
                    <img src={block.content.src} alt={block.content.alt || ""} className="max-w-full rounded-lg mx-auto" />
                ) : (
                    <div className="border-2 border-dashed border-zinc-600 rounded-lg p-8 text-center text-zinc-500">
                        🖼️ 画像をアップロード
                    </div>
                );
            case "button":
                return (
                    <div style={{ textAlign: block.style?.textAlign || "center" }}>
                        <button
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={(e) => onUpdate({ text: e.currentTarget.innerText })}
                            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full outline-none"
                        >
                            {block.content.text || "ボタン"}
                        </button>
                    </div>
                );
            case "spacer":
                return <div className="h-12" />;
            case "divider":
                return <hr className="border-zinc-700 my-4" />;
            default:
                return null;
        }
    };

    return (
        <div
            onClick={(e) => { e.stopPropagation(); onSelect(); }}
            className={`relative group py-2 px-4 rounded-lg transition-all ${isSelected ? "ring-2 ring-purple-500 bg-purple-500/10" : "hover:bg-white/5"}`}
        >
            {/* Controls */}
            <div className={`absolute -left-10 top-1/2 -translate-y-1/2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity`}>
                <button className="p-1 bg-zinc-800 rounded text-zinc-400 hover:text-white cursor-grab">⋮⋮</button>
            </div>
            {isSelected && (
                <button
                    onClick={(e) => { e.stopPropagation(); onDelete(); }}
                    className="absolute -right-2 -top-2 w-6 h-6 bg-red-500 rounded-full text-white text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                    ×
                </button>
            )}
            {renderContent()}
        </div>
    );
};

// ===== SECTION EDITOR =====
const SectionEditor: React.FC<{
    section: Section;
    isSelected: boolean;
    selectedBlockId: string | null;
    onSelectSection: () => void;
    onSelectBlock: (blockId: string) => void;
    onUpdateBlock: (blockId: string, content: Partial<Block["content"]>) => void;
    onDeleteBlock: (blockId: string) => void;
    onAddBlock: (type: Block["type"]) => void;
    onDrop: (type: Block["type"]) => void;
    onDeleteSection: () => void;
    onMoveSection: (direction: "up" | "down") => void;
}> = ({ section, isSelected, selectedBlockId, onSelectSection, onSelectBlock, onUpdateBlock, onDeleteBlock, onAddBlock, onDrop, onDeleteSection, onMoveSection }) => {
    const [isDragOver, setIsDragOver] = useState(false);

    return (
        <div
            onClick={onSelectSection}
            onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
            onDragLeave={() => setIsDragOver(false)}
            onDrop={(e) => {
                e.preventDefault();
                setIsDragOver(false);
                const type = e.dataTransfer.getData("blockType") as Block["type"];
                if (type) onDrop(type);
            }}
            className={`relative group transition-all rounded-xl ${isSelected ? "ring-2 ring-blue-500" : ""} ${isDragOver ? "ring-2 ring-purple-400 bg-purple-500/10" : ""}`}
            style={{
                backgroundColor: section.style?.backgroundColor || "#1a1a1a",
                backgroundImage: section.style?.backgroundImage ? `url(${section.style.backgroundImage})` : undefined,
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: section.style?.padding || "4rem"
            }}
        >
            {/* Section Controls */}
            <div className="absolute -right-2 top-2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={() => onMoveSection("up")} className="w-6 h-6 bg-zinc-800 rounded text-zinc-400 hover:text-white text-xs">↑</button>
                <button onClick={() => onMoveSection("down")} className="w-6 h-6 bg-zinc-800 rounded text-zinc-400 hover:text-white text-xs">↓</button>
                <button onClick={onDeleteSection} className="w-6 h-6 bg-red-600 rounded text-white text-xs">×</button>
            </div>

            {/* Blocks */}
            <div className="max-w-4xl mx-auto space-y-4">
                {section.blocks.length === 0 ? (
                    <div className="text-center py-8 text-zinc-500 border-2 border-dashed border-zinc-700 rounded-lg">
                        パーツをドラッグ&ドロップ
                    </div>
                ) : (
                    section.blocks.map((block) => (
                        <BlockRenderer
                            key={block.id}
                            block={block}
                            isSelected={selectedBlockId === block.id}
                            onSelect={() => onSelectBlock(block.id)}
                            onUpdate={(content) => onUpdateBlock(block.id, content)}
                            onDelete={() => onDeleteBlock(block.id)}
                        />
                    ))
                )}
            </div>

            {/* Add Block Button */}
            <div className="flex justify-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                    onClick={(e) => { e.stopPropagation(); onAddBlock("text"); }}
                    className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-lg text-sm transition-colors"
                >
                    + パーツを追加
                </button>
            </div>
        </div>
    );
};

// ===== MAIN EDITOR =====
export const LPDesignEditor: React.FC<LPDesignEditorProps> = ({
    designLayout,
}) => {
    const [sections, setSections] = useState<Section[]>([]);
    const [selectedSectionId, setSelectedSectionId] = useState<string | null>(null);
    const [selectedBlockId, setSelectedBlockId] = useState<string | null>(null);
    const [draggedBlockType, setDraggedBlockType] = useState<Block["type"] | null>(null);
    const [isAIChatMinimized, setIsAIChatMinimized] = useState(true);
    const [isPreviewMode, setIsPreviewMode] = useState(false);

    // Initialize from designLayout
    useEffect(() => {
        console.log("[LPDesignEditor] Received designLayout:", designLayout);

        if (designLayout?.sections && designLayout.sections.length > 0) {
            const parsedSections = designLayout.sections.map((s: any, i: number) => {
                // Parse background
                let backgroundColor = "#1a1a1a";
                if (s.style?.background_value) {
                    backgroundColor = s.style.background_value;
                } else if (s.style?.backgroundColor) {
                    backgroundColor = s.style.backgroundColor;
                }

                // Parse blocks - handle different types
                const parsedBlocks = (s.blocks || []).map((b: any, j: number) => {
                    const blockType = (b.type || "text").toLowerCase();
                    let content = { text: "" };

                    // Handle different content formats
                    if (b.content?.text) {
                        content.text = b.content.text;
                    } else if (b.content?.title) {
                        content.text = b.content.title;
                    } else if (b.content?.items && Array.isArray(b.content.items)) {
                        // FeatureGrid - convert to text for now
                        content.text = b.content.items.map((item: any) => item.title || item).join(" • ");
                    }

                    return {
                        id: b.id || `block-${i}-${j}`,
                        type: blockType === "featuregrid" ? "text" : (blockType as Block["type"]),
                        content,
                        style: {
                            fontSize: b.style?.fontSize || (blockType === "heading" ? "2rem" : "1rem"),
                            color: b.style?.color || "#ffffff",
                            textAlign: (b.style?.textAlign as any) || "center",
                            fontWeight: b.style?.fontWeight
                        }
                    };
                });

                return {
                    id: s.id || `section-${i}`,
                    blocks: parsedBlocks,
                    style: {
                        backgroundColor,
                        backgroundImage: s.style?.backgroundImage,
                        padding: s.style?.padding || "4rem"
                    }
                };
            });

            console.log("[LPDesignEditor] Parsed sections:", parsedSections);
            setSections(parsedSections);
        } else {
            // Default sections
            setSections([{
                id: "section-hero",
                blocks: [
                    { id: "b1", type: "heading", content: { text: "あなたのビジョンをここに" }, style: { fontSize: "3rem", color: "#fff", textAlign: "center" } },
                    { id: "b2", type: "text", content: { text: "サブテキストを追加してください" }, style: { fontSize: "1.25rem", color: "#aaa", textAlign: "center" } },
                    { id: "b3", type: "button", content: { text: "今すぐ始める" }, style: { textAlign: "center" } }
                ],
                style: { backgroundColor: "#0f0f0f", padding: "6rem" }
            }]);
        }
    }, [designLayout]);

    const selectedSection = sections.find(s => s.id === selectedSectionId);
    const selectedBlock = selectedSection?.blocks.find(b => b.id === selectedBlockId);

    const handleAddSection = () => {
        const newSection: Section = {
            id: `section-${Date.now()}`,
            blocks: [],
            style: { backgroundColor: "#1a1a1a", padding: "4rem" }
        };
        setSections([...sections, newSection]);
    };

    const handleDeleteSection = (sectionId: string) => {
        setSections(sections.filter(s => s.id !== sectionId));
        if (selectedSectionId === sectionId) {
            setSelectedSectionId(null);
            setSelectedBlockId(null);
        }
    };

    const handleMoveSection = (sectionId: string, direction: "up" | "down") => {
        const idx = sections.findIndex(s => s.id === sectionId);
        if ((direction === "up" && idx === 0) || (direction === "down" && idx === sections.length - 1)) return;
        const newSections = [...sections];
        const targetIdx = direction === "up" ? idx - 1 : idx + 1;
        [newSections[idx], newSections[targetIdx]] = [newSections[targetIdx], newSections[idx]];
        setSections(newSections);
    };

    const handleAddBlock = (sectionId: string, type: Block["type"]) => {
        const newBlock: Block = {
            id: `block-${Date.now()}`,
            type,
            content: { text: type === "heading" ? "新しい見出し" : type === "text" ? "テキストを入力" : type === "button" ? "ボタン" : "" },
            style: { fontSize: type === "heading" ? "2rem" : "1rem", color: "#fff", textAlign: "center" }
        };
        setSections(sections.map(s => s.id === sectionId ? { ...s, blocks: [...s.blocks, newBlock] } : s));
    };

    const handleDeleteBlock = (sectionId: string, blockId: string) => {
        setSections(sections.map(s => s.id === sectionId ? { ...s, blocks: s.blocks.filter(b => b.id !== blockId) } : s));
        if (selectedBlockId === blockId) setSelectedBlockId(null);
    };

    const handleUpdateBlockContent = (sectionId: string, blockId: string, content: Partial<Block["content"]>) => {
        setSections(sections.map(s => s.id === sectionId ? {
            ...s,
            blocks: s.blocks.map(b => b.id === blockId ? { ...b, content: { ...b.content, ...content } } : b)
        } : s));
    };

    const handleUpdateSectionStyle = (updates: Partial<Section["style"]>) => {
        if (!selectedSectionId) return;
        setSections(sections.map(s => s.id === selectedSectionId ? { ...s, style: { ...s.style, ...updates } } : s));
    };

    const handleUpdateBlockStyle = (updates: Partial<Block["style"]>) => {
        if (!selectedSectionId || !selectedBlockId) return;
        setSections(sections.map(s => s.id === selectedSectionId ? {
            ...s,
            blocks: s.blocks.map(b => b.id === selectedBlockId ? { ...b, style: { ...b.style, ...updates } } : b)
        } : s));
    };

    if (!designLayout) {
        return (
            <div className="w-full h-full flex items-center justify-center bg-zinc-950 text-zinc-500">
                <div className="text-center">
                    <div className="text-5xl mb-4 animate-pulse">🎨</div>
                    <p className="text-lg font-medium">デザインを準備中...</p>
                </div>
            </div>
        );
    }

    // ===== PREVIEW MODE =====
    if (isPreviewMode) {
        return (
            <div className="w-full h-full bg-zinc-950 overflow-auto">
                <button
                    onClick={() => setIsPreviewMode(false)}
                    className="fixed top-4 right-4 z-50 px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700"
                >
                    ← 編集に戻る
                </button>
                {sections.map(section => (
                    <div key={section.id} style={{ backgroundColor: section.style?.backgroundColor, padding: section.style?.padding }}>
                        <div className="max-w-4xl mx-auto space-y-4">
                            {section.blocks.map(block => (
                                <div key={block.id} style={{ textAlign: block.style?.textAlign, color: block.style?.color, fontSize: block.style?.fontSize }}>
                                    {block.type === "heading" && <h2 className="font-bold">{block.content.text}</h2>}
                                    {block.type === "text" && <p>{block.content.text}</p>}
                                    {block.type === "button" && <button className="px-6 py-3 bg-purple-600 text-white rounded-full font-bold">{block.content.text}</button>}
                                    {block.type === "divider" && <hr className="border-zinc-700" />}
                                    {block.type === "spacer" && <div className="h-12" />}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    // ===== EDIT MODE =====
    return (
        <div className="flex h-screen w-full bg-zinc-950 text-white font-sans overflow-hidden">
            {/* LEFT: Parts Sidebar */}
            <PartsSidebar onDragStart={(type) => setDraggedBlockType(type)} />

            {/* CENTER: Canvas */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Bar */}
                <div className="h-14 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between px-6 shrink-0">
                    <div className="flex items-center gap-4">
                        <span className="font-bold text-white">LPエディタ</span>
                        <span className="text-xs text-zinc-500">セクション: {sections.length} | パーツをドラッグして追加</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <button onClick={() => setIsPreviewMode(true)} className="px-4 py-1.5 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm transition-colors">
                            👁️ プレビュー
                        </button>
                        <button className="px-5 py-1.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-sm font-bold rounded-full shadow-lg">
                            公開
                        </button>
                    </div>
                </div>

                {/* Canvas Scroll Area */}
                <div className="flex-1 overflow-y-auto bg-zinc-950 p-8">
                    <div className="max-w-5xl mx-auto space-y-4">
                        {sections.map((section) => (
                            <SectionEditor
                                key={section.id}
                                section={section}
                                isSelected={selectedSectionId === section.id}
                                selectedBlockId={selectedBlockId}
                                onSelectSection={() => { setSelectedSectionId(section.id); setSelectedBlockId(null); }}
                                onSelectBlock={(blockId) => { setSelectedSectionId(section.id); setSelectedBlockId(blockId); }}
                                onUpdateBlock={(blockId, content) => handleUpdateBlockContent(section.id, blockId, content)}
                                onDeleteBlock={(blockId) => handleDeleteBlock(section.id, blockId)}
                                onAddBlock={(type) => handleAddBlock(section.id, type)}
                                onDrop={(type) => handleAddBlock(section.id, type)}
                                onDeleteSection={() => handleDeleteSection(section.id)}
                                onMoveSection={(dir) => handleMoveSection(section.id, dir)}
                            />
                        ))}

                        {/* Add Section Button */}
                        <button
                            onClick={handleAddSection}
                            className="w-full py-6 border-2 border-dashed border-zinc-700 rounded-xl text-zinc-500 hover:border-purple-500 hover:text-purple-400 transition-all font-medium text-lg"
                        >
                            + 新しいセクションを追加
                        </button>
                    </div>
                </div>
            </div>

            {/* RIGHT: Styles Sidebar */}
            <StylesSidebar
                selectedItem={selectedBlockId && selectedSection
                    ? { type: "block", data: selectedBlock! }
                    : selectedSectionId
                        ? { type: "section", data: selectedSection! }
                        : null
                }
                onUpdateSection={handleUpdateSectionStyle}
                onUpdateBlock={handleUpdateBlockStyle}
            />

            {/* FLOATING: AI Chat */}
            <AIChat isMinimized={isAIChatMinimized} onToggle={() => setIsAIChatMinimized(!isAIChatMinimized)} />
        </div>
    );
};
