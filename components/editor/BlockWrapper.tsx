import React from "react";
import { LPBlock } from "./types";
import { BlockDispatcher } from "./BlockDispatcher";

interface BlockWrapperProps {
    block: LPBlock;
    index: number;
    isFirst: boolean;
    isLast: boolean;
    isSelected: boolean;
    onSelect: (id: string | null) => void;
    onUpdate: (id: string, updates: Partial<LPBlock>) => void;
    onDelete: (id: string) => void;
    onMove: (id: string, direction: "up" | "down") => void;
    onAddAfter: (index: number, type: LPBlock["type"]) => void;
    onGenerateImage: (id: string, prompt: string) => void;
    isGeneratingImage: boolean;
}

export const BlockWrapper: React.FC<BlockWrapperProps> = ({
    block,
    index,
    isFirst,
    isLast,
    isSelected,
    onSelect,
    onUpdate,
    onDelete,
    onMove,
    onAddAfter,
    onGenerateImage,
    isGeneratingImage
}) => {
    return (
        <div
            className={`relative group/block ${isSelected ? "ring-2 ring-blue-500/50 rounded-lg" : ""}`}
            onClick={(e) => {
                e.stopPropagation();
                onSelect(block.id);
            }}
        >
            {/* Block Controls (Hover + Selected) */}
            <div className={`absolute -left-10 top-0 opacity-0 group-hover/block:opacity-100 ${isSelected ? "opacity-100" : ""} transition-opacity flex flex-col gap-1 z-30`}>
                <button
                    onClick={(e) => { e.stopPropagation(); onMove(block.id, "up"); }}
                    disabled={isFirst}
                    className="p-1 bg-black/50 rounded text-zinc-400 hover:text-white disabled:opacity-30"
                >
                    ↑
                </button>
                <button
                    onClick={(e) => { e.stopPropagation(); onMove(block.id, "down"); }}
                    disabled={isLast}
                    className="p-1 bg-black/50 rounded text-zinc-400 hover:text-white disabled:opacity-30"
                >
                    ↓
                </button>
                <button
                    onClick={(e) => { e.stopPropagation(); onDelete(block.id); }}
                    className="p-1 bg-red-500/20 rounded text-red-400 hover:text-red-300"
                >
                    ×
                </button>
            </div>

            {/* Render Specific Block Content */}
            <BlockDispatcher
                block={block}
                onUpdate={onUpdate}
                onGenerateImage={onGenerateImage}
                isGeneratingImage={isGeneratingImage}
            />

            {/* Add Block Divider (After) */}
            <div className="h-4 -mb-2 relative z-20 opacity-0 group-hover/block:opacity-100 transition-opacity flex items-center justify-center">
                <div className="flex gap-1 bg-black/80 backdrop-blur rounded-full p-1 border border-white/10 scale-75 hover:scale-100 transition-transform">
                    {/* Simplified Quick Add - Full picker triggers from parent usually, but we can have shortcuts here */}
                    <button onClick={(e) => { e.stopPropagation(); onAddAfter(index + 1, "Heading"); }} className="px-2 py-1 text-[10px] text-white hover:bg-white/10 rounded">H</button>
                    <button onClick={(e) => { e.stopPropagation(); onAddAfter(index + 1, "Text"); }} className="px-2 py-1 text-[10px] text-white hover:bg-white/10 rounded">T</button>
                    <button onClick={(e) => { e.stopPropagation(); onAddAfter(index + 1, "Image"); }} className="px-2 py-1 text-[10px] text-white hover:bg-white/10 rounded">IMG</button>
                    {/* Trigger full picker? We might need a prop for onOpenPicker */}
                </div>
            </div>
        </div>
    );
};
