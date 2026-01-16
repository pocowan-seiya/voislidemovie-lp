import React from "react";
import { LPBlock } from "./BlockRenderer";

interface BlockProps {
    block: LPBlock;
    designLayout: any;
    onUpdate: (id: string, newContent: any) => void;
    onGenerateImage: (id: string, prompt: string) => void;
    isGeneratingImage?: boolean;
}

export const HeroBlock: React.FC<BlockProps> = ({ block, designLayout, onUpdate, onGenerateImage, isGeneratingImage }) => {
    const { content, style, id } = block;
    const { color_palette } = designLayout;

    const handleContentChange = (field: string, value: string) => {
        onUpdate(id, { ...content, [field]: value });
    };

    const bgImage = content.image_url
        ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${content.image_url})`
        : style.background_color || "#1a1a1a";

    return (
        <div
            className="relative group min-h-[80vh] flex items-center justify-center p-8 md:p-20 overflow-hidden"
            style={{
                background: bgImage,
                backgroundSize: "cover",
                backgroundPosition: "center",
                textAlign: style.text_align || "center"
            }}
        >
            {/* Image Generation Control */}
            {content.image_prompt && (
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                    <button
                        onClick={() => onGenerateImage(id, content.image_prompt!)}
                        disabled={isGeneratingImage}
                        className="bg-black/60 hover:bg-black/80 backdrop-blur text-white text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-2 border border-white/10 transition-all"
                    >
                        {isGeneratingImage ? (
                            <>
                                <span className="animate-spin">↻</span> Generating...
                            </>
                        ) : (
                            <>
                                <span>🎨</span> Regenerate Background
                            </>
                        )}
                    </button>
                </div>
            )}

            <div className={`relative z-10 max-w-4xl w-full ${style.layout_variant === "split_left" ? "mr-auto" : style.layout_variant === "split_right" ? "ml-auto" : "mx-auto"}`}>
                <h1
                    className="text-5xl md:text-7xl font-bold mb-6 outline-none focus:ring-2 focus:ring-blue-500/50 rounded p-2 transition-all"
                    style={{ color: "#ffffff" }}
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => handleContentChange("title", e.currentTarget.innerText)}
                >
                    {content.title}
                </h1>

                {content.subtitle && (
                    <p
                        className="text-xl md:text-2xl opacity-90 outline-none focus:ring-2 focus:ring-blue-500/50 rounded p-2 transition-all"
                        style={{ color: "#ffffff" }}
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) => handleContentChange("subtitle", e.currentTarget.innerText)}
                    >
                        {content.subtitle}
                    </p>
                )}
            </div>
        </div>
    );
};
