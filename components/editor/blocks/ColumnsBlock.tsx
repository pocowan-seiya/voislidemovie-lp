import React from "react";
import { LPBlock } from "../types";
import { BlockWrapper } from "../BlockWrapper";

interface BlockProps {
    block: LPBlock;
    onUpdate: (id: string, updates: Partial<LPBlock>) => void;
    onGenerateImage?: (id: string, prompt: string) => void; // Optional for now
}

export const ColumnsBlock: React.FC<BlockProps> = ({ block, onUpdate, onGenerateImage }) => {
    const { content, style } = block;
    const columns = content.columns || [{ blocks: [] }, { blocks: [] }]; // Default 2 cols

    const handleUpdateColumnBlock = (colIndex: number, blockId: string, updates: Partial<LPBlock>) => {
        const newColumns = [...columns];
        newColumns[colIndex].blocks = newColumns[colIndex].blocks.map(b => b.id === blockId ? { ...b, ...updates } : b);
        onUpdate(block.id, { content: { ...content, columns: newColumns } });
    };

    const handleAddColumnBlock = (colIndex: number, index: number, type: LPBlock["type"]) => {
        const newBlock: LPBlock = {
            id: `block-${Date.now()}-${Math.random()}`,
            type,
            content: { text: "New Item" },
            style: { color: "#ffffff" }
        };
        const newColumns = [...columns];
        newColumns[colIndex].blocks.splice(index, 0, newBlock);
        onUpdate(block.id, { content: { ...content, columns: newColumns } });
    };

    const handleDeleteColumnBlock = (colIndex: number, blockId: string) => {
        const newColumns = [...columns];
        newColumns[colIndex].blocks = newColumns[colIndex].blocks.filter(b => b.id !== blockId);
        onUpdate(block.id, { content: { ...content, columns: newColumns } });
    };

    const handleMoveColumnBlock = (colIndex: number, blockId: string, direction: "up" | "down") => {
        const newColumns = [...columns];
        const blocks = newColumns[colIndex].blocks;
        const index = blocks.findIndex(b => b.id === blockId);
        if (index === -1) return;
        if (direction === "up" && index === 0) return;
        if (direction === "down" && index === blocks.length - 1) return;

        const targetIndex = direction === "up" ? index - 1 : index + 1;
        [blocks[index], blocks[targetIndex]] = [blocks[targetIndex], blocks[index]];
        onUpdate(block.id, { content: { ...content, columns: newColumns } });
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {columns.map((col, colIdx) => (
                <div key={colIdx} className="border border-dashed border-white/10 rounded p-4 min-h-[100px]">
                    {col.blocks.map((b, bIdx) => (
                        <BlockWrapper
                            key={b.id}
                            block={b}
                            index={bIdx}
                            isFirst={bIdx === 0}
                            isLast={bIdx === col.blocks.length - 1}
                            isSelected={false} // Nested selection logic is complex, simplified for now
                            onSelect={() => { }} // No-op for nested selection for now
                            onUpdate={(id, u) => handleUpdateColumnBlock(colIdx, id, u)}
                            onDelete={(id) => handleDeleteColumnBlock(colIdx, id)}
                            onMove={(id, dir) => handleMoveColumnBlock(colIdx, id, dir)}
                            onAddAfter={(idx, type) => handleAddColumnBlock(colIdx, idx, type)}
                            onGenerateImage={onGenerateImage || (() => { })}
                            isGeneratingImage={false}
                        />
                    ))}
                    {col.blocks.length === 0 && (
                        <div className="text-center py-4">
                            <button onClick={() => handleAddColumnBlock(colIdx, 0, "Text")} className="text-xs bg-white/10 px-2 py-1 rounded">+ Add Text</button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
