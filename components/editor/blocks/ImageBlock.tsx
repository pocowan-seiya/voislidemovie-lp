import React from "react";
import { LPBlock } from "../types";

interface BlockProps {
    block: LPBlock;
    onUpdate: (id: string, updates: Partial<LPBlock>) => void;
    onGenerateImage: (id: string, prompt: string) => void;
    isGenerating?: boolean;
}

export const ImageBlock: React.FC<BlockProps> = ({ block, onUpdate, onGenerateImage, isGenerating }) => {
    const { content, style } = block;

    return (
        <div className="relative group w-full" style={{ textAlign: style.textAlign || "center" }}>
            {content.src ? (
                <img
                    src={content.src}
                    alt="Block Image"
                    className="max-w-full h-auto rounded-lg shadow-lg inline-block"
                />
            ) : (
                <div className="w-full h-64 bg-white/5 border-2 border-dashed border-white/10 rounded-lg flex items-center justify-center text-zinc-500">
                    No Image
                </div>
            )}

            {/* Controls */}
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                {content.image_prompt && (
                    <button
                        onClick={() => onGenerateImage(block.id, content.image_prompt!)}
                        disabled={isGenerating}
                        className="bg-black/60 hover:bg-black/80 backdrop-blur text-white text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-2 border border-white/10"
                    >
                        {isGenerating ? "Generating..." : "🎨 Regenerate"}
                    </button>
                )}
            </div>
        </div>
    );
};
