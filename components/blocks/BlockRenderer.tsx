import React from "react";
import { HeroBlock } from "./HeroBlock";
import { FeatureGridBlock } from "./FeatureGridBlock";
import { ContentBlock } from "./ContentBlock";
import { CTABlock } from "./CTABlock";

export interface LPBlock {
    id: string;
    type: "Hero" | "FeatureGrid" | "Content" | "CTA" | "Testimonials";
    content: {
        title?: string;
        subtitle?: string;
        body?: string;
        items?: any[];
        image_prompt?: string;
        image_url?: string;
    };
    style: {
        background_color?: string;
        text_align?: "left" | "center" | "right";
        layout_variant?: string;
        padding?: string;
    };
}

interface BlockRendererProps {
    block: LPBlock;
    designLayout: any; // Passed down for global styles
    onUpdate: (id: string, newContent: any) => void;
    onGenerateImage: (id: string, prompt: string) => void;
    isGeneratingImage?: boolean;
}

export const BlockRenderer: React.FC<BlockRendererProps> = (props) => {
    const { block } = props;

    switch (block.type) {
        case "Hero":
            return <HeroBlock {...props} />;
        case "FeatureGrid":
            return <FeatureGridBlock {...props} />;
        case "Content":
            return <ContentBlock {...props} />;
        case "CTA":
            return <CTABlock {...props} />;
        default:
            return (
                <div className="p-8 border border-dashed border-zinc-700 text-zinc-500 text-center">
                    Unknown Block Type: {block.type}
                </div>
            );
    }
};
