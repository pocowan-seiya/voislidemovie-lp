import React from "react";

interface LPDocumentViewProps {
  lpStructure: any[];
  copywritingStep: "structure" | "writing" | "complete";
  copyEvaluation: { score: number; good_points: string[]; improvements: string[] } | null;
  onProceedToDesign: () => void;
}

export const LPDocumentView: React.FC<LPDocumentViewProps> = ({
  lpStructure,
  copywritingStep,
  copyEvaluation,
  onProceedToDesign,
}) => {
  return (
    <div className="w-full h-full flex flex-col bg-[#1a1a1a] font-sans">
      {/* Toolbar / Header */}
      <div className="h-14 border-b border-white/10 flex items-center justify-between px-6 bg-[#1a1a1a] shrink-0 z-40">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center border border-white/10">
            <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          </div>
          <div>
            <h2 className="text-sm font-bold text-zinc-200 tracking-tight">
              LP Draft.md
            </h2>
            <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">
              {copywritingStep === "structure" ? "Step 1: Structure" : "Step 2: Full Copy"}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-black/30 rounded-full border border-white/5">
            <div className={`w-2 h-2 rounded-full ${copywritingStep === "complete" ? "bg-emerald-500" : "bg-yellow-500 animate-pulse"}`}></div>
            <span className="text-xs font-medium text-zinc-400">
              {copywritingStep === "structure"
                ? "Waiting for Approval..."
                : copywritingStep === "writing"
                  ? "Writing in progress..."
                  : "Draft Complete"}
            </span>
          </div>

          {copywritingStep === "complete" && (
            <button
              onClick={onProceedToDesign}
              className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold rounded-lg transition-all flex items-center gap-2 shadow-lg shadow-emerald-900/20 border border-white/10"
            >
              <span>🎨</span> Proceed to Design
            </button>
          )}
        </div>
      </div>

      {/* Document Canvas */}
      <div className="flex-1 overflow-y-auto p-8 md:p-12 bg-[#1a1a1a]">
        <div className="max-w-3xl mx-auto space-y-8">

          {/* Main Document */}
          <div className="bg-white/5 rounded-xl border border-white/5 min-h-[800px] shadow-2xl relative overflow-hidden">
            {/* Paper Texture/Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

            <div className="relative p-12 space-y-12">
              {lpStructure.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-32 text-zinc-600 space-y-6">
                  <div className="w-16 h-16 border-2 border-zinc-800 border-t-zinc-600 rounded-full animate-spin"></div>
                  <p className="font-mono text-sm">Initializing Copywriter Agent...</p>
                </div>
              ) : (
                lpStructure.map((section, idx) => (
                  <div
                    key={idx}
                    className={`group relative transition-all duration-700 ${section.status === "final" ? "opacity-100 translate-y-0" : "opacity-80"
                      }`}
                  >
                    {/* Section Label */}
                    <div className="absolute -left-16 top-1 hidden md:flex flex-col items-end gap-1">
                      <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest rotate-0">
                        {section.section}
                      </span>
                      <div className="w-8 h-px bg-zinc-800"></div>
                    </div>

                    {/* Content Block */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold text-zinc-300 border-b border-white/5 pb-2 inline-block">
                        {section.title}
                      </h3>

                      <div className="prose prose-invert prose-p:text-zinc-400 prose-headings:text-zinc-200 max-w-none">
                        {section.content ? (
                          <div className="whitespace-pre-wrap leading-relaxed text-base font-serif tracking-wide text-zinc-300">
                            {section.content}
                          </div>
                        ) : (
                          <div className="space-y-2 animate-pulse opacity-30">
                            <div className="h-4 bg-zinc-700 rounded w-3/4"></div>
                            <div className="h-4 bg-zinc-700 rounded w-full"></div>
                            <div className="h-4 bg-zinc-700 rounded w-5/6"></div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Copy Evaluation Report */}
          {copyEvaluation && (
            <div className="bg-zinc-900/80 border border-white/10 rounded-xl p-6 backdrop-blur-sm animate-fade-in-up">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                  <span className="text-lg">📊</span> Copy Quality Report
                </h3>
                <div className="flex items-center gap-3">
                  <div className="text-xs text-zinc-500">Total Score</div>
                  <div className={`text-2xl font-bold ${copyEvaluation.score >= 80 ? "text-emerald-400" : "text-yellow-400"}`}>
                    {copyEvaluation.score}<span className="text-sm text-zinc-600">/100</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Good Points */}
                <div className="space-y-3">
                  <div className="text-xs font-bold text-emerald-500 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Strong Points
                  </div>
                  <ul className="space-y-2">
                    {copyEvaluation.good_points.map((point, i) => (
                      <li key={i} className="text-sm text-zinc-300 flex items-start gap-2">
                        <span className="text-emerald-500/50 mt-1">✓</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Improvements */}
                <div className="space-y-3">
                  <div className="text-xs font-bold text-purple-400 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                    Suggestions
                  </div>
                  <ul className="space-y-2">
                    {copyEvaluation.improvements.map((point, i) => (
                      <li key={i} className="text-sm text-zinc-300 flex items-start gap-2">
                        <span className="text-purple-400/50 mt-1">→</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
