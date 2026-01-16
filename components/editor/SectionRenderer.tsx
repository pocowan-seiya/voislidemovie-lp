import React from "react";
import { LPSection, LPBlock } from "./types";
import { BlockWrapper } from "./BlockWrapper";
import { HeadingBlock } from "./blocks/HeadingBlock";
import { TextBlock } from "./blocks/TextBlock";
import { ImageBlock } from "./blocks/ImageBlock";
import { ButtonBlock } from "./blocks/ButtonBlock";
import { FeatureGridBlock } from "../blocks/FeatureGridBlock"; // Reuse existing, wrap if needed

interface SectionProps {
    section: LPSection;
    index: number;
    onUpdateSection: (id: string, updates: Partial<LPSection>) => void;
    onAddBlock: (sectionId: string, index: number, type: LPBlock["type"]) => void;
    onUpdateBlock: (sectionId: string, blockId: string, updates: Partial<LPBlock>) => void;
    onDeleteBlock: (sectionId: string, blockId: string) => void;
    onMoveBlock: (sectionId: string, blockId: string, direction: "up" | "down") => void;
    onGenerateImage: (id: string, prompt: string) => void;
    isGeneratingImage: (id: string) => boolean;
    onSelectBlock: (blockId: string | null) => void;
    selectedBlockId: string | null;
}

export const SectionRenderer: React.FC<SectionProps> = ({
    section,
    index,
    onUpdateSection,
    onAddBlock,
    onUpdateBlock,
    onDeleteBlock,
    onMoveBlock,
    onGenerateImage,
    isGeneratingImage,
    onSelectBlock,
    selectedBlockId
}) => {
    const { style, blocks } = section;

    // Background Logic
    const bgStyle = style.background_type === "image"
        ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${style.background_value})`
        : style.background_value;

    return (
        <div
            className="relative group/section min-h-[300px] p-8 md:p-16 transition-all border-b border-white/5"
            style={{
                background: bgStyle,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            onClick={(e) => {
                // Deselect block if clicking on section background
                if (e.target === e.currentTarget) onSelectBlock(null);
            }}
        >
            {/* Section Controls (Hover) */}
            <div className="absolute top-4 right-4 opacity-0 group-hover/section:opacity-100 transition-opacity flex gap-2 z-20">
                <div className="bg-black/60 backdrop-blur rounded-lg p-1 border border-white/10 flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase text-zinc-400 px-2">Section {index + 1}</span>
                    <input
                        type="color"
                        value={style.background_type === "color" ? style.background_value : "#000000"}
                        onChange={(e) => onUpdateSection(section.id, {
                            style: { ...style, background_type: "color", background_value: e.target.value }
                        })}
                        className="w-4 h-4 rounded cursor-pointer border-none bg-transparent"
                        title="Background Color"
                    />
                    {/* Add more section controls here (Image BG, etc) */}
                </div>
            </div>

            {/* Blocks Container */}
            <div className={`max-w-5xl mx-auto ${style.layout === "grid" ? "grid grid-cols-1 md:grid-cols-3 gap-8" : "flex flex-col gap-6"}`}>
                {blocks.map((block, bIdx) => (
                    <BlockWrapper
                        key={block.id}
                        block={block}
                        index={bIdx}
                        isFirst={bIdx === 0}
                        isLast={bIdx === blocks.length - 1}
                        isSelected={selectedBlockId === block.id}
                        onSelect={onSelectBlock}
                        onUpdate={(id, u) => onUpdateBlock(section.id, id, u)}
                        onDelete={(id) => onDeleteBlock(section.id, id)}
                        onMove={(id, dir) => onMoveBlock(section.id, id, dir)}
                        onAddAfter={(idx, type) => onAddBlock(section.id, idx, type)}
                        onGenerateImage={onGenerateImage}
                        isGeneratingImage={isGeneratingImage(block.id)}
                    />
                ))}

                {/* Empty Section State */}
                {blocks.length === 0 && (
                    <div className="py-12 text-center border-2 border-dashed border-white/10 rounded-xl">
                        <p className="text-zinc-500 mb-4 text-sm">Empty Section</p>
                        <div className="flex justify-center gap-2">
                            <button onClick={() => onAddBlock(section.id, 0, "Heading")} className="px-3 py-1 bg-white/10 rounded text-xs">Add Heading</button>
                            <button onClick={() => onAddBlock(section.id, 0, "Text")} className="px-3 py-1 bg-white/10 rounded text-xs">Add Text</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
