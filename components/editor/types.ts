export interface LPDesignLayout {
    theme: string;
    color_palette: {
        primary: string;
        secondary?: string;
        background: string;
        text: string;
        accent: string;
    };
    typography: {
        font_family: string;
        heading_style: "bold" | "normal" | "italic";
    };
    sections: LPSection[];
}

export interface LPSection {
    id: string;
    type: "Section";
    style: {
        background_type: "color" | "image" | "gradient";
        background_value: string;
        padding: string;
        layout: "single-column" | "two-column" | "grid";
    };
    blocks: LPBlock[];
}

export interface LPBlock {
    id: string;
    type: "Heading" | "Text" | "Image" | "Button" | "FeatureGrid" | "Columns" | "Spacer" | "Hero" | "Content" | "Offer" | "CTA" | "Testimonials";
    content: {
        text?: string;
        src?: string;
        link?: string;
        items?: any[]; // For FeatureGrid
        image_prompt?: string;
        columns?: { blocks: LPBlock[] }[]; // For Columns
    };
    style: {
        color?: string;
        fontSize?: string;
        textAlign?: "left" | "center" | "right";
        fontWeight?: "normal" | "bold";
        height?: string; // For Spacer
        padding?: string; // For Spacing
        margin?: string; // For Spacing
    };
}
