import React from "react";
import { LPBlock } from "./BlockRenderer";

interface BlockProps {
    block: LPBlock;
    designLayout: any;
    onUpdate: (id: string, newContent: any) => void;
}

export const CTABlock: React.FC<BlockProps> = ({ block, designLayout, onUpdate }) => {
    const { content, style, id } = block;
    const { color_palette } = designLayout;

    const handleContentChange = (field: string, value: string) => {
        onUpdate(id, { ...content, [field]: value });
    };

    return (
        <div
            className="py-24 px-8 md:px-20 text-center"
            style={{
                backgroundColor: style.background_color || color_palette?.background || "#1a1a1a",
                color: color_palette?.text || "#ffffff"
            }}
        >
            <div className="max-w-3xl mx-auto space-y-8">
                {content.title && (
                    <h2
                        className="text-4xl md:text-5xl font-bold outline-none focus:ring-2 focus:ring-blue-500/50 rounded p-2"
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) => handleContentChange("title", e.currentTarget.innerText)}
                    >
                        {content.title}
                    </h2>
                )}

                {content.subtitle && (
                    <p
                        className="text-xl opacity-80 outline-none focus:ring-2 focus:ring-blue-500/50 rounded p-2"
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) => handleContentChange("subtitle", e.currentTarget.innerText)}
                    >
                        {content.subtitle}
                    </p>
                )}

                <button
                    className="px-8 py-4 text-lg font-bold rounded-full transition-transform hover:scale-105 shadow-xl"
                    style={{
                        backgroundColor: color_palette?.accent || "#3b82f6",
                        color: "#000" // Assuming accent is bright, text should be dark. Can be dynamic later.
                    }}
                >
                    Get Started Now
                </button>
            </div>
        </div>
    );
};
