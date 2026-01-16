import React from "react";

interface StyleControlsProps {
    style: any;
    onUpdate: (newStyle: any) => void;
}

export const StyleControls: React.FC<StyleControlsProps> = ({ style, onUpdate }) => {
    return (
        <div className="flex items-center gap-3 bg-zinc-900/90 backdrop-blur-xl p-2 rounded-xl border border-white/10 shadow-2xl">
            {/* Font Size */}
            <div className="flex items-center gap-2 group relative">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Size</span>
                <select
                    value={style.fontSize || "1rem"}
                    onChange={(e) => onUpdate({ ...style, fontSize: e.target.value })}
                    className="bg-black/40 text-white text-xs rounded-lg px-2 py-1.5 border border-white/5 outline-none focus:border-blue-500/50 hover:bg-black/60 transition-colors appearance-none cursor-pointer min-w-[60px]"
                >
                    <option value="0.875rem">Small</option>
                    <option value="1rem">Medium</option>
                    <option value="1.25rem">Large</option>
                    <option value="1.5rem">XL</option>
                    <option value="2.25rem">2XL</option>
                    <option value="3rem">3XL</option>
                    <option value="4.5rem">Display</option>
                </select>
            </div>

            <div className="w-px h-4 bg-white/10"></div>

            {/* Color */}
            <div className="flex items-center gap-2">
                <div className="relative w-6 h-6 rounded-full overflow-hidden border border-white/10 hover:scale-110 transition-transform cursor-pointer shadow-inner">
                    <input
                        type="color"
                        value={style.color || "#ffffff"}
                        onChange={(e) => onUpdate({ ...style, color: e.target.value })}
                        className="absolute -top-2 -left-2 w-10 h-10 cursor-pointer p-0 border-0"
                    />
                </div>
            </div>

            <div className="w-px h-4 bg-white/10"></div>

            {/* Alignment */}
            <div className="flex bg-black/40 rounded-lg p-0.5 border border-white/5">
                {[
                    { align: "left", icon: "⇠" },
                    { align: "center", icon: "⇼" },
                    { align: "right", icon: "⇢" }
                ].map((opt) => (
                    <button
                        key={opt.align}
                        onClick={() => onUpdate({ ...style, textAlign: opt.align })}
                        className={`w-7 h-6 rounded flex items-center justify-center text-sm transition-all ${style.textAlign === opt.align
                                ? "bg-white/10 text-white shadow-sm"
                                : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
                            }`}
                    >
                        {opt.icon}
                    </button>
                ))}
            </div>

            <div className="w-px h-4 bg-white/10"></div>

            {/* Spacing */}
            <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Space</span>
                <select
                    value={style.height || style.padding || "auto"}
                    onChange={(e) => onUpdate({ ...style, height: e.target.value, padding: e.target.value })}
                    className="bg-black/40 text-white text-xs rounded-lg px-2 py-1.5 border border-white/5 outline-none focus:border-blue-500/50 hover:bg-black/60 transition-colors appearance-none cursor-pointer min-w-[60px]"
                >
                    <option value="auto">Auto</option>
                    <option value="16px">XS</option>
                    <option value="32px">S</option>
                    <option value="64px">M</option>
                    <option value="128px">L</option>
                    <option value="256px">XL</option>
                </select>
            </div>
        </div>
    );
};
