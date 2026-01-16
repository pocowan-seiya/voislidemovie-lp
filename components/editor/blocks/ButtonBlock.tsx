import React from "react";
import { LPBlock } from "../types";

interface BlockProps {
    block: LPBlock;
    onUpdate: (id: string, updates: Partial<LPBlock>) => void;
}

export const ButtonBlock: React.FC<BlockProps> = ({ block, onUpdate }) => {
    const { content, style } = block;

    return (
        <div style={{ textAlign: style.textAlign || "center" }}>
            <button
                className="px-8 py-4 text-lg font-bold rounded-full transition-transform hover:scale-105 shadow-xl outline-none focus:ring-2 focus:ring-white/50"
                style={{
                    backgroundColor: style.color || "#3b82f6", // Use style.color as bg for button
                    color: "#ffffff", // Force white text for now, or add text color prop
                    fontSize: style.fontSize || "1.125rem"
                }}
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => onUpdate(block.id, { content: { ...content, text: e.currentTarget.innerText } })}
            >
                {content.text}
            </button>
        </div>
    );
};
