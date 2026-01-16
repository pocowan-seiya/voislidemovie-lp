import React from "react";
import { LPBlock } from "./BlockRenderer";

interface BlockProps {
    block: LPBlock;
    designLayout: any;
    onUpdate: (id: string, newContent: any) => void;
}

export const FeatureGridBlock: React.FC<BlockProps> = ({ block, designLayout, onUpdate }) => {
    const { content, style, id } = block;
    const { color_palette } = designLayout;

    const handleTitleChange = (value: string) => {
        onUpdate(id, { ...content, title: value });
    };

    const handleItemChange = (index: number, field: string, value: string) => {
        const newItems = [...(content.items || [])];
        newItems[index] = { ...newItems[index], [field]: value };
        onUpdate(id, { ...content, items: newItems });
    };

    return (
        <div
            className="py-8 px-2 w-full"
            style={{
                backgroundColor: style.background_color || color_palette?.background || "transparent",
                color: (style as any).color || color_palette?.text || "#ffffff"
            }}
        >
            <div className="w-full">
                {content.title && (
                    <h2
                        className="text-3xl md:text-4xl font-bold mb-12 text-center outline-none focus:ring-2 focus:ring-blue-500/50 rounded p-2"
                        style={{ color: color_palette?.primary }}
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) => handleTitleChange(e.currentTarget.innerText)}
                    >
                        {content.title}
                    </h2>
                )}

                <div className="flex flex-col md:flex-row gap-8 justify-center items-start">
                    {content.items?.map((item: any, idx: number) => (
                        <div
                            key={idx}
                            className="flex-1 p-6 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors w-full"
                        >
                            <div className="text-4xl mb-4 text-center">{item.icon || "✨"}</div>
                            <h3
                                className="text-xl font-bold mb-2 outline-none focus:ring-2 focus:ring-blue-500/50 rounded p-1 text-center"
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => handleItemChange(idx, "title", e.currentTarget.innerText)}
                            >
                                {item.title}
                            </h3>
                            <p
                                className="text-sm opacity-80 leading-relaxed outline-none focus:ring-2 focus:ring-blue-500/50 rounded p-1 text-center"
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => handleItemChange(idx, "description", e.currentTarget.innerText)}
                            >
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
