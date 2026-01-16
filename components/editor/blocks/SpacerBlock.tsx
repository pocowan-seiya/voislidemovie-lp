import React from "react";
import { LPBlock } from "../types";

interface BlockProps {
    block: LPBlock;
    onUpdate: (id: string, updates: Partial<LPBlock>) => void;
}

export const SpacerBlock: React.FC<BlockProps> = ({ block, onUpdate }) => {
    const { style } = block;
    const height = style.height || "32px";

    return (
        <div className="relative group w-full" style={{ height }}>
            <div className="absolute inset-0 border border-dashed border-white/5 group-hover:border-white/20 rounded flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-black/50 text-[10px] text-zinc-400 px-2 rounded">Spacer: {height}</div>
            </div>
            {/* Resizer handle could go here */}
        </div>
    );
};
