import React from "react";
import { LPBlock } from "./types";

interface BlockPickerProps {
    onSelect: (type: LPBlock["type"]) => void;
    onClose: () => void;
}

export const BlockPicker: React.FC<BlockPickerProps> = ({ onSelect, onClose }) => {
    const categories = [
        {
            name: "Basic",
            blocks: [
                { type: "Heading", icon: "H", label: "Heading" },
                { type: "Text", icon: "T", label: "Text" },
                { type: "Button", icon: "B", label: "Button" },
            ]
        },
        {
            name: "Media",
            blocks: [
                { type: "Image", icon: "🖼️", label: "Image" },
            ]
        },
        {
            name: "Layout",
            blocks: [
                { type: "Columns", icon: "columns", label: "2 Columns" }, // Simplified for now
                { type: "Spacer", icon: "⬍", label: "Spacer" },
                { type: "FeatureGrid", icon: "✨", label: "Feature Grid" },
            ]
        }
    ];

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClose}>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 w-[400px] shadow-2xl animate-scale-in" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold text-white">Add Block</h3>
                    <button onClick={onClose} className="text-zinc-500 hover:text-white">×</button>
                </div>

                <div className="space-y-6">
                    {categories.map(cat => (
                        <div key={cat.name}>
                            <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">{cat.name}</h4>
                            <div className="grid grid-cols-3 gap-3">
                                {cat.blocks.map(b => (
                                    <button
                                        key={b.type}
                                        onClick={() => onSelect(b.type as LPBlock["type"])}
                                        className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all group"
                                    >
                                        <span className="text-2xl group-hover:scale-110 transition-transform">{b.icon}</span>
                                        <span className="text-xs text-zinc-300">{b.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
