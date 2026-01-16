import React from "react";
import { LPBlock } from "./types";
import { HeadingBlock } from "./blocks/HeadingBlock";
import { TextBlock } from "./blocks/TextBlock";
import { ImageBlock } from "./blocks/ImageBlock";
import { ButtonBlock } from "./blocks/ButtonBlock";
import { SpacerBlock } from "./blocks/SpacerBlock";
import { FeatureGridBlock } from "../blocks/FeatureGridBlock"; // Legacy adapter
import { ColumnsBlock } from "./blocks/ColumnsBlock"; // Circular dependency handled by import order usually, or pass as prop if needed. 
// Actually, for recursion, ColumnsBlock will import BlockDispatcher. 
// To avoid circular dependency issues in some bundlers, we might need to pass the renderer to ColumnsBlock or use a context.
// For now, let's try direct import. If it fails, we'll refactor.

interface DispatcherProps {
    block: LPBlock;
    onUpdate: (id: string, updates: Partial<LPBlock>) => void;
    onGenerateImage: (id: string, prompt: string) => void;
    isGeneratingImage: boolean;
}

export const BlockDispatcher: React.FC<DispatcherProps> = ({ block, onUpdate, onGenerateImage, isGeneratingImage }) => {
    switch (block.type) {
        case "Heading":
            return <HeadingBlock block={block} onUpdate={onUpdate} />;
        case "Text":
            return <TextBlock block={block} onUpdate={onUpdate} />;
        case "Image":
            return <ImageBlock block={block} onUpdate={onUpdate} onGenerateImage={onGenerateImage} isGenerating={isGeneratingImage} />;
        case "Button":
            return <ButtonBlock block={block} onUpdate={onUpdate} />;
        case "Spacer":
            return <SpacerBlock block={block} onUpdate={onUpdate} />;
        case "FeatureGrid":
            return (
                <FeatureGridBlock
                    block={{ ...block, type: "FeatureGrid" } as any}
                    designLayout={{ color_palette: { primary: "#3b82f6" } }}
                    onUpdate={(id, newContent) => onUpdate(id, { content: newContent })}
                />
            );
        case "Hero":
            return (
                <div className="text-center space-y-6">
                    <HeadingBlock block={{ ...block, type: "Heading", style: { ...block.style, fontSize: "3.5rem" } } as any} onUpdate={onUpdate} />
                    <TextBlock block={{ ...block, type: "Text", style: { ...block.style, fontSize: "1.25rem", color: "#cccccc" } } as any} onUpdate={onUpdate} />
                    <ButtonBlock block={{ ...block, type: "Button" } as any} onUpdate={onUpdate} />
                </div>
            );
        case "Content":
            return (
                <div className="space-y-4">
                    <HeadingBlock block={{ ...block, type: "Heading", style: { ...block.style, fontSize: "2rem" } } as any} onUpdate={onUpdate} />
                    <TextBlock block={{ ...block, type: "Text" } as any} onUpdate={onUpdate} />
                </div>
            );
        case "Offer":
            return (
                <div className="p-8 border border-white/20 rounded-2xl bg-white/5 text-center space-y-6">
                    <HeadingBlock block={{ ...block, type: "Heading", style: { ...block.style, fontSize: "2.5rem", color: "#f472b6" } } as any} onUpdate={onUpdate} />
                    <TextBlock block={{ ...block, type: "Text", style: { ...block.style, fontSize: "1.25rem" } } as any} onUpdate={onUpdate} />
                    <ButtonBlock block={{ ...block, type: "Button", style: { ...block.style, padding: "1rem 2rem", fontSize: "1.25rem" } } as any} onUpdate={onUpdate} />
                </div>
            );
        case "CTA":
            return (
                <div className="text-center space-y-8 py-12">
                    <HeadingBlock block={{ ...block, type: "Heading", style: { ...block.style, fontSize: "3rem" } } as any} onUpdate={onUpdate} />
                    <ButtonBlock block={{ ...block, type: "Button", style: { ...block.style, padding: "1.5rem 3rem", fontSize: "1.5rem" } } as any} onUpdate={onUpdate} />
                </div>
            );
        case "Testimonials":
            return (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Placeholder for Testimonials - rendering as simple cards for now */}
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="p-6 bg-white/5 rounded-xl border border-white/10">
                            <p className="text-lg mb-4">"Amazing service! changed my life."</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-zinc-700 rounded-full"></div>
                                <div>
                                    <div className="font-bold">User {i}</div>
                                    <div className="text-xs text-zinc-500">CEO, Company</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            );
        case "Columns":
            // We need to pass the dispatcher itself to ColumnsBlock to avoid circular import issues at runtime if possible, 
            // but React usually handles component references fine. 
            // Let's defer ColumnsBlock import to the component file to be safe? 
            // No, let's assume ColumnsBlock is implemented and imported.
            return <ColumnsBlock block={block} onUpdate={onUpdate} onGenerateImage={onGenerateImage} />;
        default:
            return <div className="text-red-500">Unknown Block: {block.type}</div>;
    }
};
