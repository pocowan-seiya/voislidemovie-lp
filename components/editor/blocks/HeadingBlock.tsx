import React from "react";
import { LPBlock } from "../types";

interface BlockProps {
    block: LPBlock;
    onUpdate: (id: string, updates: Partial<LPBlock>) => void;
}

export const HeadingBlock: React.FC<BlockProps> = ({ block, onUpdate }) => {
    const { content, style } = block;

    return (
        <h2
            className={`outline-none focus:ring-2 focus:ring-blue-500/50 rounded p-2 transition-all ${!content.text ? "min-h-[1em] bg-white/5 border border-dashed border-white/20" : ""}`}
            style={{
                color: style.color || "inherit",
                fontSize: style.fontSize || "2.25rem", // Default 4xl equivalent
                textAlign: style.textAlign || "left",
                fontWeight: style.fontWeight || "bold",
                lineHeight: 1.2
            }}
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => onUpdate(block.id, { content: { ...content, text: e.currentTarget.innerText } })}
            data-placeholder="Heading"
        >
            {content.text}
        </h2>
    );
};
