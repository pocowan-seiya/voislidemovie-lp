import React from "react";
import { LPBlock } from "./BlockRenderer";

interface BlockProps {
    block: LPBlock;
    designLayout: any;
    onUpdate: (id: string, newContent: any) => void;
}

export const ContentBlock: React.FC<BlockProps> = ({ block, designLayout, onUpdate }) => {
    const { content, style, id } = block;
    const { color_palette } = designLayout;

    const handleContentChange = (field: string, value: string) => {
        onUpdate(id, { ...content, [field]: value });
    };

    return (
        <div
            className="py-20 px-8 md:px-20"
            style={{
                backgroundColor: style.background_color || color_palette?.background || "#1a1a1a",
                color: color_palette?.text || "#ffffff",
                textAlign: style.text_align || "left"
            }}
        >
            <div className="max-w-4xl mx-auto">
                {content.title && (
                    <h2
                        className="text-3xl md:text-4xl font-bold mb-8 outline-none focus:ring-2 focus:ring-blue-500/50 rounded p-2"
                        style={{ color: color_palette?.primary }}
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) => handleContentChange("title", e.currentTarget.innerText)}
                    >
                        {content.title}
                    </h2>
                )}

                {content.body && (
                    <div
                        className="prose prose-invert max-w-none text-lg leading-relaxed outline-none focus:ring-2 focus:ring-blue-500/50 rounded p-2"
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) => handleContentChange("body", e.currentTarget.innerText)}
                    >
                        {content.body}
                    </div>
                )}
            </div>
        </div>
    );
};
