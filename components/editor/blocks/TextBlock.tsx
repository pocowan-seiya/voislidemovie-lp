import React from "react";
import { LPBlock } from "../types";

interface BlockProps {
    block: LPBlock;
    onUpdate: (id: string, updates: Partial<LPBlock>) => void;
}

export const TextBlock: React.FC<BlockProps> = ({ block, onUpdate }) => {
    const { content, style } = block;

    return (
        <p
            className={`outline-none focus:ring-2 focus:ring-blue-500/50 rounded p-2 transition-all ${!content.text ? "min-h-[1em] bg-white/5 border border-dashed border-white/20" : ""}`}
            style={{
                color: style.color || "inherit",
                fontSize: style.fontSize || "1rem",
                textAlign: style.textAlign || "left",
                lineHeight: 1.6
            }}
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => onUpdate(block.id, { content: { ...content, text: e.currentTarget.innerText } })}
            data-placeholder="Type something..."
        >
            {content.text}
        </p>
    );
};
