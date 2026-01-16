"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { LPDocumentView } from "../components/LPDocumentView";
import { LPDesignEditor } from "@/components/LPDesignEditor";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function Home() {
  // SAMPLE DATA FOR TESTING PHASE 3 (AI活用ビジネスコーチング)
  const SAMPLE_BOARD_STATE = {
    specific_scene: "クライアントが初めて月収100万円を達成した報告のLINEを見ている瞬間。画面越しに喜びを共有している。",
    actual_phenomenon: "毎朝5時に起きて学んだAI活用の知識が、クライアントのビジネスを変えていく。彼らは自分の可能性を信じられるようになる。",
    state_of_the_world: "AIが急速に進化する中、多くの起業家がどう活用すればいいかわからず途方に暮れている。正しい知識があれば人生を変えられる時代。",
    my_existence: "迷える起業家の道標。AIを味方につけた最初の一歩を一緒に歩む伴走者。",
    service_identity: "AI起業アカデミー",
    origin_story: "私自身がAIで売上を3倍にした経験。失敗も成功も全てを体系化した実践プログラム。",
    target_pain: "SNS発信、LP作成、セールスライティング...全て自分でやらなければならず、時間が足りない個人起業家。",
    mechanism: "3ヶ月間のマンツーマンコーチングで、AIツールの使い方から実際のビジネス活用まで完全サポート。",
    specific_features: "週1回の個別セッション、24時間LINEサポート、AIプロンプト集200個、実践ワークシート、卒業後コミュニティ参加権",
    roadmap: "1ヶ月目: AI基礎習得、2ヶ月目: 自分のビジネスに適用、3ヶ月目: 自動化と拡大",
    offer_price: "3ヶ月コース 498,000円（税込）",
    creator_stance: "一人で悩む時間は終わりです。一緒にAI時代を生き抜きましょう。",
    catch_copy: "AIを味方に、あなたのビジネスを加速する",
    scene_description: "Professional coaching session, modern office setup, laptop with AI interface, warm ambient lighting, successful business person, motivational atmosphere, clean aesthetic",
    use_user_image: false,
    sub_copy: "3ヶ月で月収100万円を目指す、AI活用マンツーマンコーチング"
  };

  // Initialize with empty state for Vision Architect Phase
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const [boardState, setBoardState] = useState<any>({});
  const [currentPhase, setCurrentPhase] = useState<string>("Vision Architect"); // Start at Vision Architect
  const [showPhaseTransition, setShowPhaseTransition] = useState(false);
  const [creationMode, setCreationMode] = useState<"Visual First" | "Copy First" | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [generatedCopy, setGeneratedCopy] = useState<string | null>(null);
  const [generatedPrompt, setGeneratedPrompt] = useState<string | null>(null);
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [imageError, setImageError] = useState<string | null>(null);

  // Phase 3 Workflow State
  const [creationPath, setCreationPath] = useState<"Visual First" | "Copy First" | null>(null);
  const [layoutStrategy, setLayoutStrategy] = useState<"Type A" | "Type B" | "Type C" | null>(null);

  // New State for Gap Analysis & Linear Flow
  const [densityScore, setDensityScore] = useState<number>(0);
  const [missingInfo, setMissingInfo] = useState<string[]>([]);
  const [showCopyConfirmation, setShowCopyConfirmation] = useState(false);

  // Phase 3: Copywriting State
  const [lpStructure, setLpStructure] = useState<any[]>([]);
  const [copywritingStep, setCopywritingStep] = useState<"structure" | "writing" | "complete">("structure");
  const [copyEvaluation, setCopyEvaluation] = useState<{ score: number; good_points: string[]; improvements: string[] } | null>(null);

  // Phase 4: Design State
  const [designLayout, setDesignLayout] = useState<any>(null);

  // Legacy/Shared State (mapped to new flow)
  const [imageSource, setImageSource] = useState<"Upload" | "AI" | null>(null);
  const [userImage, setUserImage] = useState<string | null>(null);
  const [previewMode, setPreviewMode] = useState<"desktop" | "mobile">("desktop");

  const [layerConfig, setLayerConfig] = useState({
    overlayOpacity: 0.4, // Slightly darker for better text visibility
    overlayColor: "bg-black",
    textPosition: "center", // center, right, left
    textColor: "text-white"
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [inputValue]);

  // Auto-initialize designLayout when entering Design Director phase
  useEffect(() => {
    if (currentPhase === "Design Director" && !designLayout) {
      console.log("[Page] Auto-initializing designLayout for Phase 4");

      // Parse features from boardState
      const parseFeatures = (featuresStr: string) => {
        if (!featuresStr) return [];
        return featuresStr.split(/,|、/).map((f, i) => ({
          title: f.trim(),
          description: "",
          icon: ["⚡️", "🛡️", "🔗", "🧠", "💎"][i % 5]
        })).slice(0, 5);
      };

      const features = parseFeatures(boardState.specific_features || "");

      const initialLayout = {
        theme: "Dark Neon",
        color_palette: { primary: "#8b5cf6", background: "#09090b", text: "#f4f4f5", accent: "#06b6d4" },
        typography: { font_family: "Inter, sans-serif", heading_style: "bold" },
        sections: [
          // HERO
          {
            id: "section-hero",
            style: { backgroundColor: "#0a0a0a", padding: "6rem 2rem" },
            blocks: [
              { id: "hero-title", type: "Heading", content: { text: boardState.catch_copy || "あなたのキャッチコピー" }, style: { fontSize: "3.5rem", textAlign: "center", color: "#ffffff" } },
              { id: "hero-subtitle", type: "Text", content: { text: boardState.sub_copy || "サブコピーを入力" }, style: { fontSize: "1.5rem", textAlign: "center", color: "#a1a1aa" } },
              { id: "hero-cta", type: "Button", content: { text: "今すぐ申し込む" }, style: { textAlign: "center" } }
            ]
          },
          // PROBLEM
          {
            id: "section-problem",
            style: { backgroundColor: "#18181b", padding: "4rem 2rem" },
            blocks: [
              { id: "problem-heading", type: "Heading", content: { text: "こんなお悩みありませんか？" }, style: { fontSize: "2.5rem", textAlign: "center", color: "#ffffff" } },
              { id: "problem-text", type: "Text", content: { text: boardState.target_pain || "ターゲットの悩み" }, style: { fontSize: "1.25rem", textAlign: "center", color: "#d4d4d8" } }
            ]
          },
          // SOLUTION
          {
            id: "section-solution",
            style: { backgroundColor: "#0a0a0a", padding: "4rem 2rem" },
            blocks: [
              { id: "solution-heading", type: "Heading", content: { text: "解決策" }, style: { fontSize: "2.5rem", textAlign: "center", color: "#ffffff" } },
              { id: "solution-text", type: "Text", content: { text: boardState.mechanism || "解決のメカニズム" }, style: { fontSize: "1.25rem", textAlign: "center", color: "#d4d4d8" } }
            ]
          },
          // FEATURES
          {
            id: "section-features",
            style: { backgroundColor: "#18181b", padding: "4rem 2rem" },
            blocks: [
              { id: "features-heading", type: "Heading", content: { text: "サービスの特徴" }, style: { fontSize: "2.5rem", textAlign: "center", color: "#ffffff" } },
              { id: "features-list", type: "Text", content: { text: features.map(f => f.title).join(" • ") || "特徴1 • 特徴2 • 特徴3" }, style: { fontSize: "1.25rem", textAlign: "center", color: "#d4d4d8" } }
            ]
          },
          // OFFER
          {
            id: "section-offer",
            style: { backgroundColor: "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)", padding: "4rem 2rem" },
            blocks: [
              { id: "offer-heading", type: "Heading", content: { text: "今すぐ始めよう" }, style: { fontSize: "2.5rem", textAlign: "center", color: "#ffffff" } },
              { id: "offer-price", type: "Text", content: { text: boardState.offer_price || "価格情報" }, style: { fontSize: "2rem", textAlign: "center", color: "#ffffff", fontWeight: "bold" } },
              { id: "offer-cta", type: "Button", content: { text: "申し込む" }, style: { textAlign: "center" } }
            ]
          }
        ]
      };

      setDesignLayout(initialLayout);
    }
  }, [currentPhase, designLayout, boardState]);


  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      return;
    }

    // Ensure we're on the client side
    if (typeof window === 'undefined') {
      console.warn("Speech recognition not available on server.");
      return;
    }

    const SpeechRecognitionAPI = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;

    if (!SpeechRecognitionAPI) {
      alert("Speech recognition is not supported in this browser. Please use Chrome or Edge.");
      return;
    }

    try {
      const recognition = new SpeechRecognitionAPI();
      recognition.lang = "ja-JP";
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onstart = () => {
        console.log("Speech recognition started");
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        let finalTranscript = "";
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          }
        }
        if (finalTranscript) {
          console.log("Recognized:", finalTranscript);
          setInputValue((prev) => prev + finalTranscript);
        }
      };

      recognition.onend = () => {
        console.log("Speech recognition ended");
        setIsListening(false);
      };

      recognition.onerror = (event: any) => {
        console.error("Speech recognition error:", event.error);
        if (event.error === 'no-speech') {
          console.warn("No speech detected. Please try again.");
        } else if (event.error === 'not-allowed') {
          alert("Microphone access denied. Please enable microphone permissions in your browser settings.");
        } else if (event.error === 'network') {
          alert("Network error during speech recognition.");
        }
        setIsListening(false);
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (error) {
      console.error("Failed to start speech recognition:", error);
      alert("Failed to start speech recognition. Please check your browser settings.");
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/vision", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      const data = await response.json();

      if (data.error) {
        console.error("API Error:", data.error);
      } else {
        setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
        // Check for phase transition
        if (currentPhase === "Vision Architect" && data.phase === "Product Director") {
          setShowPhaseTransition(true);
          setTimeout(() => setShowPhaseTransition(false), 3000);
        }

        // Auto-switch to Visual First if entering Design Director phase via chat
        if (data.phase === "Design Director" && creationMode !== "Visual First") {
          setCreationMode("Visual First");
          // Trigger initial generation if not already done
          if (!generatedImage) {
            handleGenerateFirstView();
          }
        }

        // Handle Design Director commands
        if (data.design_command && data.design_command.type !== "none") {
          const cmd = data.design_command;
          if (cmd.type === "update_background") {
            // Re-generate image with new prompt
            if (cmd.params.prompt) {
              handleGenerateFirstView(cmd.params.prompt);
            }
          } else if (cmd.type === "update_overlay") {
            setLayerConfig(prev => ({
              ...prev,
              overlayOpacity: cmd.params.opacity ?? prev.overlayOpacity,
              overlayColor: cmd.params.color ? `bg-[${cmd.params.color}]` : prev.overlayColor
            }));
          } else if (cmd.type === "update_typography") {
            setLayerConfig(prev => ({
              ...prev,
              textPosition: cmd.params.position ?? prev.textPosition,
              textColor: cmd.params.color ? `text-[${cmd.params.color}]` : prev.textColor
            }));
          }
        }

        setCurrentPhase(data.phase);
        setBoardState(data.board_state);

        // Update Density Score
        if (data.density_score !== undefined) {
          setDensityScore(data.density_score);
        }
        if (data.missing_info) {
          setMissingInfo(data.missing_info);
        }

        // Handle Copywriting Phase (Phase 3)
        if (data.phase === "Copywriting") {
          if (data.lp_structure) {
            setLpStructure(data.lp_structure);
            // Check if all sections are final to determine step
            const allFinal = data.lp_structure.every((s: any) => s.status === "final");
            setCopywritingStep(allFinal ? "complete" : "structure");
          }
          // Handle Copy Evaluation
          if (data.copy_evaluation) {
            setCopyEvaluation(data.copy_evaluation);
          }
        }

        // Handle Design Phase (Phase 4) - Layout Generation
        if (data.phase === "Design Director") {
          if (data.design_layout) {
            setDesignLayout(data.design_layout);
          }
        }

        // Linear Flow: Auto-show Copy Confirmation ONLY if skipping Phase 3 (Legacy/Fallback)
        // In the new flow, we transition directly from Copywriting to Design via the button in Document View.
        if (data.phase === "Design Director" && currentPhase !== "Copywriting") {
          setShowCopyConfirmation(true);
          setGeneratedCopy(data.board_state.catch_copy);
        }
      }
    } catch (error) {
      console.error("Network Error:", error);
    } finally {
      setIsLoading(false);
    }
  };



  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerateFirstView = async (customPrompt?: string) => {
    if (isGeneratingImage) return;
    setIsGeneratingImage(true);
    setImageError(null);

    try {
      // Logic for user image vs AI image
      // Type A: User Image + Generated Background
      // Type B: Immersive Background (AI)
      // Type C: Impact Background (AI)

      let promptToUse = customPrompt || boardState.scene_description || "Futuristic abstract background, high quality, 8k";

      // Adjust prompt based on strategy
      if (layoutStrategy === "Type C") {
        promptToUse += ", abstract, minimal, high contrast, negative space for text";
      } else if (layoutStrategy === "Type B") {
        promptToUse += ", immersive, wide shot, cinematic lighting, detailed environment";
      } else if (layoutStrategy === "Type A") {
        promptToUse += ", blurred background, bokeh, studio lighting, clean background for product overlay";
      }

      const response = await fetch("/api/image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: promptToUse }),
      });
      const data = await response.json();

      if (data.imageUrl) {
        setGeneratedImage(data.imageUrl);
        setGeneratedCopy(boardState.catch_copy);
        setGeneratedPrompt(data.generatedPrompt || null);
      } else {
        console.error("API returned no imageUrl. Data:", data);
        throw new Error("No image URL returned");
      }
    } catch (e) {
      console.error("Image generation failed", e);
      setImageError("Failed to generate image. Please try again.");
      // Fallback to a safe default image if generation fails
      // setGeneratedImage("https://image.pollinations.ai/prompt/abstract%20nebula%20space%20background?width=1280&height=720&model=flux");
      // setGeneratedCopy(boardState.catch_copy);
      // setGeneratedPrompt("Fallback: Generation failed, using default.");
    } finally {
      setIsGeneratingImage(false);
    }
  };



  const resetPhase3 = () => {
    setCreationMode(null);
    setCreationPath(null);
    setLayoutStrategy(null);
    setGeneratedImage(null);
    setGeneratedCopy(null);
    setGeneratedPrompt(null);
    setImageError(null);
    setIsGeneratingImage(false);
    setDensityScore(0);
    setMissingInfo([]);
    setShowCopyConfirmation(false);
    setLpStructure([]);
    setCopywritingStep("structure");
    setCopyEvaluation(null);
    setDesignLayout(null);
  };

  const resetDemo = () => {
    setMessages([]);
    setInputValue("");
    setBoardState({
      specific_scene: "", actual_phenomenon: "", state_of_the_world: "", my_existence: "",
      service_identity: "", origin_story: "", target_pain: "", mechanism: "",
      specific_features: "", roadmap: "", offer_price: "", creator_stance: "",
      catch_copy: "", scene_description: "", use_user_image: false, sub_copy: ""
    });
    setCurrentPhase("Vision Architect");
    setShowPhaseTransition(false);
    resetPhase3();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 flex flex-col relative overflow-hidden">
      {/* Layer 1: Background Image */}
      <div className="absolute inset-0 z-0">
        {generatedImage && (
          <Image
            src={generatedImage}
            alt="Generated Vision"
            fill
            className="object-cover animate-fade-in"
          />
        )}
        {!generatedImage && (
          <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black"></div>
        )}
      </div>

      {/* Layer 2: Overlay */}
      <div className="absolute inset-0 z-10 bg-black/60 pointer-events-none"></div>

      {/* Layer 4: UI */}
      <div className="relative z-30 flex flex-col min-h-screen">
        {/* Navbar */}
        <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="font-bold text-xl tracking-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Lumina AI
            </div>

            {/* Progress Indicator */}
            <div className="hidden md:flex items-center gap-2 bg-white/5 rounded-full px-4 py-1.5 border border-white/10">
              <div className={`flex items-center gap-2 ${currentPhase === "Vision Architect" ? "text-purple-400 font-bold" : "text-zinc-500"}`}>
                <div className={`w-2 h-2 rounded-full ${currentPhase === "Vision Architect" ? "bg-purple-400 animate-pulse" : "bg-zinc-700"}`}></div>
                <span className="text-xs uppercase tracking-wider">Phase 1: Vision</span>
              </div>
              <div className="w-4 h-[1px] bg-white/10"></div>
              <div className={`flex items-center gap-2 ${currentPhase === "Product Director" ? "text-blue-400 font-bold" : "text-zinc-500"}`}>
                <div className={`w-2 h-2 rounded-full ${currentPhase === "Product Director" ? "bg-blue-400 animate-pulse" : "bg-zinc-700"}`}></div>
                <span className="text-xs uppercase tracking-wider">Phase 2: Product</span>
              </div>
              <div className="w-4 h-[1px] bg-white/10"></div>
              <div className={`flex items-center gap-2 ${currentPhase === "Copywriting" || currentPhase === "Design Director" || currentPhase === "Complete" ? "text-emerald-400 font-bold" : "text-zinc-500"}`}>
                <div className={`w-2 h-2 rounded-full ${currentPhase === "Copywriting" ? "bg-emerald-400 animate-pulse" : (currentPhase === "Design Director" || currentPhase === "Complete") ? "bg-emerald-400" : "bg-zinc-700"}`}></div>
                <span className="text-xs uppercase tracking-wider">Phase 3: Copy</span>
              </div>
              <div className="w-4 h-[1px] bg-white/10"></div>
              <div className={`flex items-center gap-2 ${currentPhase === "Design Director" || currentPhase === "Complete" ? "text-pink-400 font-bold" : "text-zinc-500"}`}>
                <div className={`w-2 h-2 rounded-full ${currentPhase === "Design Director" || currentPhase === "Complete" ? "bg-pink-400 animate-pulse" : "bg-zinc-700"}`}></div>
                <span className="text-xs uppercase tracking-wider">Phase 4: Design</span>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm font-medium text-zinc-400">
              {/* Density Meter */}
              <div className="hidden lg:flex items-center gap-3 bg-zinc-900/50 px-4 py-2 rounded-full border border-white/5 group relative cursor-help">
                <div className="text-xs font-mono text-zinc-500">LP DENSITY</div>
                <div className="w-24 h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-1000 ease-out ${densityScore >= 80 ? "bg-emerald-500" : "bg-purple-500"}`}
                    style={{ width: `${densityScore}%` }}
                  ></div>
                </div>
                <div className={`text-xs font-bold ${densityScore >= 80 ? "text-emerald-400" : "text-purple-400"}`}>
                  {densityScore}%
                </div>

                {/* Missing Info Tooltip */}
                {missingInfo.length > 0 && (
                  <div className="absolute top-full right-0 mt-2 w-64 bg-black/90 border border-white/10 rounded-xl p-4 shadow-xl backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                    <div className="text-xs font-bold text-zinc-400 mb-2 uppercase tracking-wider">Missing Information</div>
                    <ul className="space-y-1">
                      {missingInfo.map((item, i) => (
                        <li key={i} className="text-xs text-red-400 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-red-500"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <button
                onClick={resetDemo}
                className="hover:text-white transition-colors text-xs uppercase tracking-wider"
              >
                Reset Demo
              </button>
              <button
                onClick={() => {
                  setBoardState({
                    specific_scene: "クライアントが初めて月収100万円を達成した報告のLINEを見ている瞬間。画面越しに喜びを共有している。",
                    actual_phenomenon: "毎朝5時に起きて学んだAI活用の知識が、クライアントのビジネスを変えていく。",
                    state_of_the_world: "AIが急速に進化する中、多くの起業家がどう活用すればいいかわからず途方に暮れている。",
                    my_existence: "迷える起業家の道標。AIを味方につけた最初の一歩を一緒に歩む伴走者。",
                    service_identity: "AI起業アカデミー",
                    origin_story: "私自身がAIで売上を3倍にした経験。失敗も成功も全てを体系化した実践プログラム。",
                    target_pain: "SNS発信、LP作成、セールスライティング...全て自分でやらなければならず、時間が足りない個人起業家。",
                    mechanism: "3ヶ月間のマンツーマンコーチングで、AIツールの使い方から実際のビジネス活用まで完全サポート。",
                    specific_features: "週1回の個別セッション、24時間LINEサポート、AIプロンプト集200個、実践ワークシート、卒業後コミュニティ参加権",
                    roadmap: "1ヶ月目: AI基礎習得、2ヶ月目: 自分のビジネスに適用、3ヶ月目: 自動化と拡大",
                    offer_price: "3ヶ月コース 498,000円（税込）",
                    creator_stance: "一人で悩む時間は終わりです。一緒にAI時代を生き抜きましょう。",
                    catch_copy: "AIを味方に、あなたのビジネスを加速する",
                    scene_description: "Professional coaching session, modern office, laptop with AI interface, warm lighting",
                    use_user_image: false,
                    sub_copy: "3ヶ月で月収100万円を目指す、AI活用マンツーマンコーチング"
                  });
                  setMessages([
                    { role: "user", content: "AI起業アカデミーというビジネスコーチングサービスを始めたいと思っています。" },
                    { role: "assistant", content: "素晴らしいですね！あなたのビジネスが大成功した時の『最高の瞬間』はどんな状態ですか？" },
                    { role: "user", content: "クライアントから「月収100万円達成しました！」というLINEが来た瞬間ですね。" },
                    { role: "assistant", content: "感動的ですね。そのクライアントはどんな悩みを持っていましたか？" },
                    { role: "user", content: "SNS発信、LP作成、セールスライティング...全て一人でやらないといけなくて、時間が足りない個人起業家です。" },
                    { role: "assistant", content: "なるほど。あなたのサービスはどうやってその悩みを解決しますか？" },
                    { role: "user", content: "3ヶ月間のマンツーマンコーチングで、AIツールの使い方から実践まで完全サポートします。" },
                    { role: "assistant", content: "具体的な特徴と価格を教えてください。" },
                    { role: "user", content: "週1個別セッション、24時間LINEサポート、AIプロンプト集200個付きで、498,000円の3ヶ月コースです。" },
                    { role: "assistant", content: "Phase 1 & 2のヒアリングが完了しました。情報の密度は十分です。Phase 3へ移行し、LPの構成案を作成しますか？" }
                  ]);
                  setCurrentPhase("Product Director"); // Set to end of Phase 2
                  setDensityScore(95); // High score to trigger transition
                }}
                className="hover:text-emerald-400 transition-colors text-xs uppercase tracking-wider text-zinc-500"
              >
                [DEBUG] Jump to Phase 3
              </button>
              <button
                onClick={() => {
                  setMessages([
                    { role: "user", content: "デザインのみモードを開始します。" },
                    { role: "assistant", content: "承知しました。デザインのみモードを開始します。右側のエディタでデザインを調整してください。" }
                  ]);
                  setCurrentPhase("Design Director");
                  setCreationMode("Visual First");
                  // Pre-fill with dummy data only if empty
                  if (!boardState.catch_copy) {
                    setBoardState({
                      ...boardState,
                      catch_copy: "Your Catch Copy Here",
                      sub_copy: "Your sub copy here."
                    });
                  }

                  // Initialize LP Structure for Editor only if empty
                  if (lpStructure.length === 0) {
                    setLpStructure([
                      { section: "Hero", title: "Hero Section", content: "This is the hero section content.", status: "final" },
                      { section: "Problem", title: "The Problem", content: "Describe the problem here.", status: "final" },
                      { section: "Solution", title: "The Solution", content: "Describe the solution here.", status: "final" },
                      { section: "Offer", title: "The Offer", content: "Describe the offer here.", status: "final" }
                    ]);
                  }
                  // Initialize Design Layout with Generated Copy
                  const parseFeatures = (featuresStr: string) => {
                    if (!featuresStr) return [
                      { title: "Feature 1", description: "Description", icon: "✨" },
                      { title: "Feature 2", description: "Description", icon: "🚀" },
                      { title: "Feature 3", description: "Description", icon: "💎" }
                    ];
                    return featuresStr.split(/,|、/).map((f, i) => ({
                      title: f.trim(),
                      description: "Key benefit of this feature.",
                      icon: ["⚡️", "🛡️", "🔗", "🧠", "💎"][i % 5]
                    })).slice(0, 3);
                  };

                  const features = parseFeatures(boardState.specific_features || "");

                  // Initialize Design Layout with Board State
                  const initialLayout = {
                    theme: "Dark Neon",
                    color_palette: { primary: "#06b6d4", background: "#09090b", text: "#f4f4f5", accent: "#8b5cf6" }, // Cyan primary, Dark bg
                    typography: { font_family: "Inter, sans-serif", heading_style: "bold" },
                    sections: [
                      // 1. HERO
                      {
                        id: "section-hero",
                        type: "Section",
                        style: { background_type: "gradient", background_value: "linear-gradient(135deg, #000000 0%, #111827 100%)", padding: "8rem 2rem", layout: "single-column" },
                        blocks: [
                          {
                            id: "hero-title",
                            type: "Heading",
                            content: { text: (boardState.catch_copy && boardState.catch_copy.length > 0) ? boardState.catch_copy : "Visionary AI Landing Pages" },
                            style: { fontSize: "4.5rem", textAlign: "center", color: "#ffffff", textShadow: "0 0 20px rgba(6,182,212,0.5)" }
                          },
                          {
                            id: "hero-subtitle",
                            type: "Text",
                            content: { text: (boardState.sub_copy && boardState.sub_copy.length > 0) ? boardState.sub_copy : "Generate high-fidelity designs with AI." },
                            style: { fontSize: "1.5rem", textAlign: "center", color: "#9ca3af" }
                          },
                          {
                            id: "hero-cta",
                            type: "Button",
                            content: { text: "Get Started" },
                            style: { color: "#000000", backgroundColor: "#06b6d4", textAlign: "center", padding: "1rem 3rem", borderRadius: "9999px", fontWeight: "bold", boxShadow: "0 0 20px rgba(6,182,212,0.4)" }
                          }
                        ]
                      },
                      // 2. PROBLEM (Target Pain)
                      {
                        id: "section-problem",
                        type: "Section",
                        style: { background_type: "color", background_value: "#18181b", padding: "6rem 2rem", layout: "single-column" },
                        blocks: [
                          {
                            id: "problem-heading",
                            type: "Heading",
                            content: { text: "The Challenge" },
                            style: { fontSize: "2.5rem", textAlign: "center", color: "#ffffff" }
                          },
                          {
                            id: "problem-text",
                            type: "Text",
                            content: { text: boardState.target_pain || "Identify the core problem your users face." },
                            style: { fontSize: "1.25rem", textAlign: "center", color: "#d4d4d8", maxWidth: "800px", margin: "0 auto" }
                          }
                        ]
                      },
                      // 3. FEATURES (Specific Features)
                      {
                        id: "section-features",
                        type: "Section",
                        style: { background_type: "color", background_value: "#09090b", padding: "6rem 2rem", layout: "grid" },
                        blocks: [
                          {
                            id: "feat-grid",
                            type: "FeatureGrid",
                            content: { items: features },
                            style: { color: "#ffffff" }
                          }
                        ]
                      },
                      // 4. SOLUTION (Mechanism)
                      {
                        id: "section-solution",
                        type: "Section",
                        style: { background_type: "color", background_value: "#18181b", padding: "6rem 2rem", layout: "single-column" },
                        blocks: [
                          {
                            id: "solution-heading",
                            type: "Heading",
                            content: { text: "Our Solution" },
                            style: { fontSize: "2.5rem", textAlign: "center", color: "#ffffff" }
                          },
                          {
                            id: "solution-text",
                            type: "Text",
                            content: { text: boardState.mechanism || "How we solve the problem." },
                            style: { fontSize: "1.25rem", textAlign: "center", color: "#d4d4d8", maxWidth: "800px", margin: "0 auto" }
                          }
                        ]
                      },
                      // 5. OFFER (Price)
                      {
                        id: "section-offer",
                        type: "Section",
                        style: { background_type: "gradient", background_value: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)", padding: "6rem 2rem", layout: "single-column" },
                        blocks: [
                          {
                            id: "offer-heading",
                            type: "Heading",
                            content: { text: "Join the Revolution" },
                            style: { fontSize: "3rem", textAlign: "center", color: "#ffffff" }
                          },
                          {
                            id: "offer-price",
                            type: "Text",
                            content: { text: boardState.offer_price || "Contact for pricing" },
                            style: { fontSize: "2rem", textAlign: "center", color: "#ffffff", fontWeight: "bold" }
                          },
                          {
                            id: "offer-cta",
                            type: "Button",
                            content: { text: "Pre-Order Now" },
                            style: { color: "#06b6d4", backgroundColor: "#ffffff", textAlign: "center", padding: "1rem 3rem", borderRadius: "9999px", fontWeight: "bold", fontSize: "1.25rem" }
                          }
                        ]
                      }
                    ]
                  };
                  setDesignLayout(initialLayout);
                }}
                className="hover:text-pink-400 transition-colors text-xs uppercase tracking-wider text-zinc-500"
              >
                Design Only
              </button>
              <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content - Sticky Split Screen */}
        <div className="flex h-screen pt-16 overflow-hidden">
          {/* Left Panel: Chat Interface (Independent Scroll) - Hidden in Design Director */}
          <div className={`h-full overflow-y-auto p-6 pb-32 scrollbar-hide transition-all duration-500 ease-in-out ${currentPhase === "Design Director" ? "hidden" : "w-full md:w-1/2"}`}>
            <div className="max-w-2xl mx-auto space-y-6">
              {messages.length === 0 ? (
                <div className="text-center space-y-8 mt-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-purple-300">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                    </span>
                    Vision Shift Engine v4
                  </div>

                  <h1 className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                    Vision Architect
                  </h1>

                  <p className="text-base text-zinc-400 max-w-md mx-auto leading-relaxed">
                    Let's translate your abstract vision into a concrete reality. Start by telling me about your success scene.
                  </p>
                </div>
              ) : (
                messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-fade-in-up`}
                  >
                    <div
                      className={`max-w-[85%] p-4 rounded-2xl backdrop-blur-md border ${msg.role === "user"
                        ? "bg-white/10 border-white/20 text-white rounded-tr-none"
                        : "bg-black/40 border-white/10 text-zinc-300 rounded-tl-none shadow-xl"
                        }`}
                    >
                      <p className="leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                    </div>
                  </div>
                ))
              )}
              {isLoading && (
                <div className="flex justify-start animate-pulse">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none text-zinc-500 text-sm flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                    {currentPhase === "Product Director" ? "Checking requirements & analyzing gaps..." : currentPhase === "Copywriting" ? "Drafting copy..." : "Verbalizing your vision..."}
                  </div>
                </div>
              )}

              {/* Skip Button (Only show when waiting for user input and not loading) */}
              {!isLoading && currentPhase !== "Complete" && currentPhase !== "Design Director" && (
                <div className="flex justify-end">
                  <button
                    onClick={() => { setInputValue("今は決められないので、仮置きで進めてください。"); sendMessage(); }}
                    className="text-xs text-zinc-500 hover:text-zinc-300 underline decoration-zinc-700 underline-offset-4 transition-colors"
                  >
                    Skip / Decide Later
                  </button>
                </div>
              )}

              <div ref={messagesEndRef} />

              {/* Linear Flow: Copy Confirmation & Design Transition */}
              {showCopyConfirmation && (
                <div className="pt-6 pb-12 animate-fade-in-up space-y-8">
                  <div className="p-6 border border-emerald-500/30 bg-emerald-500/5 rounded-2xl space-y-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-2xl">✨</div>
                      <h3 className="text-lg font-bold text-emerald-400">Copy Generated</h3>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Catch Copy</div>
                        <p className="text-2xl font-bold text-white leading-tight">{boardState.catch_copy}</p>
                      </div>
                      {boardState.sub_copy && (
                        <div>
                          <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Sub Copy</div>
                          <p className="text-zinc-300">{boardState.sub_copy}</p>
                        </div>
                      )}
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={() => {
                          setShowCopyConfirmation(false);
                          setCreationMode("Visual First"); // Enter Design Mode
                          setLayoutStrategy("Type B"); // Default to Type B (Immersive)
                          setImageSource("AI");

                          // Initialize Design Layout with Generated Copy
                          // Helper to parse features
                          const parseFeatures = (featuresStr: string) => {
                            if (!featuresStr) return [
                              { title: "Feature 1", description: "Description", icon: "✨" },
                              { title: "Feature 2", description: "Description", icon: "🚀" },
                              { title: "Feature 3", description: "Description", icon: "💎" }
                            ];
                            return featuresStr.split(/,|、/).map((f, i) => ({
                              title: f.trim(),
                              description: "Key benefit of this feature.",
                              icon: ["⚡️", "🛡️", "🔗", "🧠", "💎"][i % 5]
                            })).slice(0, 3);
                          };

                          const features = parseFeatures(boardState.specific_features || "");

                          // Initialize Design Layout with Generated Copy & Structure
                          // Initialize Design Layout with Generated Copy & Structure
                          setDesignLayout({
                            theme: "Dark Neon",
                            color_palette: { primary: "#06b6d4", background: "#09090b", text: "#f4f4f5", accent: "#8b5cf6" }, // Cyan primary, Dark bg
                            typography: { font_family: "Inter, sans-serif", heading_style: "bold" },
                            sections: [
                              // 1. HERO
                              {
                                id: "section-hero",
                                type: "Section",
                                style: { background_type: "gradient", background_value: "linear-gradient(135deg, #000000 0%, #111827 100%)", padding: "8rem 2rem", layout: "single-column" },
                                blocks: [
                                  {
                                    id: "hero-title",
                                    type: "Heading",
                                    content: { text: boardState.catch_copy || "Visionary AI Landing Pages" },
                                    style: { fontSize: "4.5rem", textAlign: "center", color: "#ffffff", textShadow: "0 0 20px rgba(6,182,212,0.5)" }
                                  },
                                  {
                                    id: "hero-subtitle",
                                    type: "Text",
                                    content: { text: boardState.sub_copy || "Generate high-fidelity designs with AI." },
                                    style: { fontSize: "1.5rem", textAlign: "center", color: "#9ca3af" }
                                  },
                                  {
                                    id: "hero-cta",
                                    type: "Button",
                                    content: { text: "Get Started" },
                                    style: { color: "#000000", backgroundColor: "#06b6d4", textAlign: "center", padding: "1rem 3rem", borderRadius: "9999px", fontWeight: "bold", boxShadow: "0 0 20px rgba(6,182,212,0.4)" }
                                  }
                                ]
                              },
                              // 2. PROBLEM (Target Pain)
                              {
                                id: "section-problem",
                                type: "Section",
                                style: { background_type: "color", background_value: "#18181b", padding: "6rem 2rem", layout: "single-column" },
                                blocks: [
                                  {
                                    id: "problem-heading",
                                    type: "Heading",
                                    content: { text: "The Challenge" },
                                    style: { fontSize: "2.5rem", textAlign: "center", color: "#ffffff" }
                                  },
                                  {
                                    id: "problem-text",
                                    type: "Text",
                                    content: { text: boardState.target_pain || "Identify the core problem your users face." },
                                    style: { fontSize: "1.25rem", textAlign: "center", color: "#d4d4d8", maxWidth: "800px", margin: "0 auto" }
                                  }
                                ]
                              },
                              // 3. FEATURES (Specific Features)
                              {
                                id: "section-features",
                                type: "Section",
                                style: { background_type: "color", background_value: "#09090b", padding: "6rem 2rem", layout: "grid" },
                                blocks: [
                                  {
                                    id: "feat-grid",
                                    type: "FeatureGrid",
                                    content: { items: features },
                                    style: { color: "#ffffff" }
                                  }
                                ]
                              },
                              // 4. SOLUTION (Mechanism)
                              {
                                id: "section-solution",
                                type: "Section",
                                style: { background_type: "color", background_value: "#18181b", padding: "6rem 2rem", layout: "single-column" },
                                blocks: [
                                  {
                                    id: "solution-heading",
                                    type: "Heading",
                                    content: { text: "Our Solution" },
                                    style: { fontSize: "2.5rem", textAlign: "center", color: "#ffffff" }
                                  },
                                  {
                                    id: "solution-text",
                                    type: "Text",
                                    content: { text: boardState.mechanism || "How we solve the problem." },
                                    style: { fontSize: "1.25rem", textAlign: "center", color: "#d4d4d8", maxWidth: "800px", margin: "0 auto" }
                                  }
                                ]
                              },
                              // 5. OFFER (Price)
                              {
                                id: "section-offer",
                                type: "Section",
                                style: { background_type: "gradient", background_value: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)", padding: "6rem 2rem", layout: "single-column" },
                                blocks: [
                                  {
                                    id: "offer-heading",
                                    type: "Heading",
                                    content: { text: "Join the Revolution" },
                                    style: { fontSize: "3rem", textAlign: "center", color: "#ffffff" }
                                  },
                                  {
                                    id: "offer-price",
                                    type: "Text",
                                    content: { text: boardState.offer_price || "Contact for pricing" },
                                    style: { fontSize: "2rem", textAlign: "center", color: "#ffffff", fontWeight: "bold" }
                                  },
                                  {
                                    id: "offer-cta",
                                    type: "Button",
                                    content: { text: "Pre-Order Now" },
                                    style: { color: "#06b6d4", backgroundColor: "#ffffff", textAlign: "center", padding: "1rem 3rem", borderRadius: "9999px", fontWeight: "bold", fontSize: "1.25rem" }
                                  }
                                ]
                              }
                            ]
                          });

                          handleGenerateFirstView(); // Auto-generate
                        }}
                        className="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl font-bold text-white text-lg shadow-lg hover:shadow-emerald-500/25 transition-all"
                      >
                        🎨 Proceed to Design
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Panel: Live Vision Board OR First View Preview OR LP Document View */}
          <div className={`
            transition-all duration-500 ease-in-out bg-black/20 backdrop-blur-sm relative
            ${currentPhase === "Design Director"
              ? "fixed inset-0 z-50 w-full h-full bg-zinc-900" // Full Screen Mode
              : "hidden md:flex h-full overflow-y-auto border-l border-white/5 w-1/2" // Split Screen Mode
            }
          `}>
            {currentPhase === "Copywriting" ? (
              /* LP Document View (Phase 3) */
              <LPDocumentView
                lpStructure={lpStructure}
                copywritingStep={copywritingStep}
                copyEvaluation={copyEvaluation}
                onProceedToDesign={() => {
                  setInputValue("Proceed to Design");
                  sendMessage();
                  // Manually trigger local state change for immediate feedback
                  setCreationMode("Visual First");
                  setCurrentPhase("Design Director"); // Optimistic update to force UI switch
                  setLayoutStrategy("Type B");
                  setImageSource("AI");
                  handleGenerateFirstView();
                }}
              />
            ) : currentPhase === "Design Director" ? (
              /* LP Design Editor (Phase 4) */
              <LPDesignEditor
                key={designLayout ? "loaded" : "loading"} // Force remount on layout change
                lpStructure={lpStructure}
                designLayout={designLayout}
                onUpdateContent={(index, newContent) => {
                  const newStructure = [...lpStructure];
                  newStructure[index].content = newContent;
                  setLpStructure(newStructure);
                }}
              />
            ) : creationMode === "Visual First" || creationMode === "Copy First" ? (
              /* First View Preview (Refined 3-Layer Structure) */
              <div className="w-full h-full flex flex-col bg-zinc-900">
                {/* Device Toggle Toolbar */}
                <div className="h-12 border-b border-white/10 flex items-center justify-between px-4 bg-black/40 backdrop-blur-sm shrink-0 z-50">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={resetPhase3}
                      className="flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                      Back
                    </button>
                    <div className="w-px h-4 bg-white/10"></div>
                    <div className="text-xs font-mono text-zinc-500">Preview Mode</div>
                  </div>
                  <div className="flex bg-zinc-800 rounded-lg p-1">
                    <button
                      onClick={() => setPreviewMode("desktop")}
                      className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${previewMode === "desktop" ? "bg-zinc-600 text-white shadow-sm" : "text-zinc-400 hover:text-zinc-300"}`}
                    >
                      🖥️ Desktop
                    </button>
                    <button
                      onClick={() => setPreviewMode("mobile")}
                      className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${previewMode === "mobile" ? "bg-zinc-600 text-white shadow-sm" : "text-zinc-400 hover:text-zinc-300"}`}
                    >
                      📱 Mobile
                    </button>
                  </div>
                </div>

                {/* Design Director Toolbar */}
                <div className="h-14 border-b border-white/10 flex items-center justify-between px-4 bg-zinc-900/90 backdrop-blur-sm shrink-0 z-40 overflow-x-auto">
                  <div className="flex items-center gap-4">
                    <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Layout</div>
                    <div className="flex bg-zinc-800 rounded-lg p-1">
                      {["Type A", "Type B", "Type C"].map((type) => (
                        <button
                          key={type}
                          onClick={() => {
                            setLayoutStrategy(type as "Type A" | "Type B" | "Type C");
                            if (type === "Type A") setImageSource("Upload");
                            else setImageSource("AI");
                          }}
                          className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${layoutStrategy === type
                            ? "bg-purple-600 text-white shadow-sm"
                            : "text-zinc-400 hover:text-zinc-300 hover:bg-white/5"
                            }`}
                        >
                          {type === "Type A" ? "Branding" : type === "Type B" ? "Immersive" : "Impact"}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="w-px h-6 bg-white/10 mx-2"></div>

                  <div className="flex items-center gap-4">
                    <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Visual</div>
                    {layoutStrategy === "Type A" ? (
                      <div className="flex items-center gap-2">
                        <label className="cursor-pointer px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-bold rounded-lg transition-colors flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                          Upload Image
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleFileUpload}
                          />
                        </label>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleGenerateFirstView()}
                        disabled={isGeneratingImage}
                        className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-bold rounded-lg transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <svg className={`w-4 h-4 ${isGeneratingImage ? "animate-spin" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                        {isGeneratingImage ? "Regenerating..." : "Regenerate AI"}
                      </button>
                    )}
                  </div>
                </div>

                {/* Preview Stage (Wrapper) */}
                <div className="flex-1 w-full h-full overflow-hidden flex justify-center items-start bg-zinc-900 pt-10">
                  {/* Virtual Screen (The Canvas) */}
                  <div
                    className={`relative bg-black shadow-2xl transition-all duration-500 ease-in-out origin-top flex-shrink-0 ${previewMode === "mobile"
                      ? "w-[375px] h-[812px] rounded-[3rem] border-8 border-zinc-800"
                      : "w-[1280px] h-[800px] rounded-none border-0" // Fixed Desktop Size
                      }`}
                    style={{
                      transform: previewMode === "desktop" ? "scale(0.45)" : "scale(0.85)",
                    }}
                  >
                    {/* --- 3-LAYER STRUCTURE START --- */}

                    {/* Layer 1: Background (z-0) */}
                    <div className="absolute inset-0 z-0 bg-zinc-900">
                      {generatedImage && !imageError ? (
                        <Image
                          src={generatedImage}
                          alt="Generated Background"
                          fill
                          className="object-cover"
                          onError={() => setImageError("Failed to load image.")}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-zinc-700 bg-zinc-900">
                          {imageError ? (
                            <div className="text-center p-8">
                              <div className="text-4xl mb-4 text-red-500">⚠️</div>
                              <p className="text-sm text-red-400 mb-4">{imageError}</p>
                              <button
                                onClick={() => handleGenerateFirstView()}
                                className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors text-xs font-bold uppercase tracking-wider"
                              >
                                Retry Generation
                              </button>
                            </div>
                          ) : (
                            <div className="text-center">
                              <div className="text-4xl mb-4 opacity-20">🌌</div>
                              <p className="text-sm tracking-widest uppercase opacity-50">
                                {creationMode === "Copy First" ? "Focusing on Copy..." : "Waiting for Generation..."}
                              </p>
                              {creationMode === "Copy First" && (
                                <button
                                  onClick={() => setCreationPath("Visual First")}
                                  className="mt-4 px-4 py-2 bg-zinc-800 text-zinc-400 rounded-lg hover:bg-zinc-700 transition-colors text-xs"
                                >
                                  Add Visuals
                                </button>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Layer 2: Overlay (z-10) */}
                    <div
                      className={`absolute inset-0 z-10 pointer-events-none transition-colors duration-500`}
                      style={{ backgroundColor: `rgba(0,0,0,${layerConfig.overlayOpacity})` }}
                    ></div>

                    {/* Layer 3: Content (z-20) */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center p-12 md:p-24">
                      <div className={`w-full h-full flex ${previewMode === "mobile" ? "flex-col justify-center gap-8" : "flex-row items-center justify-between gap-16"}`}>

                        {/* Text Area */}
                        <div className={`flex-1 flex flex-col ${previewMode === "mobile" ? "items-center text-center" : "items-start text-left"}`}>
                          <div className="writing-mode-horizontal">
                            <h2 className={`font-bold text-white leading-tight drop-shadow-2xl ${previewMode === "mobile"
                              ? "text-4xl"
                              : layoutStrategy === "Type C" ? "text-9xl tracking-tighter" : "text-7xl"
                              }`}>
                              {generatedCopy || "Your Vision Here"}
                            </h2>
                            {boardState.sub_copy && (
                              <p className={`mt-6 text-white/80 font-medium ${previewMode === "mobile" ? "text-sm" : "text-xl"}`}>
                                {boardState.sub_copy}
                              </p>
                            )}
                            <div className={`h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mt-8 ${previewMode === "mobile" ? "mx-auto" : ""}`}></div>
                            <p className="mt-8 text-white/60 tracking-widest uppercase text-sm">
                              {boardState.service_identity || "Service Name"}
                            </p>
                          </div>
                        </div>

                        {/* Image Area (User Image) - Only if Type A (Branding) */}
                        {layoutStrategy === "Type A" && userImage && (
                          <div className={`relative ${previewMode === "mobile" ? "w-full h-64" : "w-1/2 h-full"}`}>
                            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                              <Image
                                src={userImage}
                                alt="User Content"
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* --- 3-LAYER STRUCTURE END --- */}

                    {/* Loading Indicator */}
                    {isGeneratingImage && (
                      <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
                        <div className="flex flex-col items-center gap-4">
                          <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                          <div className="text-white font-bold tracking-widest animate-pulse">GENERATING...</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Debug Prompt Display */}
                {generatedPrompt && (
                  <div className="p-4 bg-black/80 border-t border-white/10 text-xs font-mono text-zinc-500 overflow-y-auto max-h-32 shrink-0">
                    <div className="font-bold text-zinc-400 mb-1">🎨 Art Director Prompt (Debug):</div>
                    <div className="mb-2">{generatedPrompt}</div>
                    <div className="font-bold text-zinc-400 mb-1">🖼️ Image Source (Debug):</div>
                    <div className="break-all">{generatedImage ? (generatedImage.startsWith("data:") ? "Base64 Image Data (Truncated)" : generatedImage) : "No Image URL"}</div>
                  </div>
                )}
              </div>
            ) : (
              /* Live Vision Board (Default) */
              <div className="w-full max-w-xl mx-auto space-y-8 p-6 pb-32">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                    <h2 className="text-xl font-bold text-white tracking-tight">
                      Live Vision Board
                    </h2>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-400">
                    v4.0.0
                  </div>
                </div>

                {/* Vision Cards - Split Sections */}
                <div className="space-y-8">
                  {/* Section A: VISION (Phase 1) */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold text-purple-400 uppercase tracking-widest border-b border-purple-500/20 pb-2">
                      Phase 1: VISION (Observable Reality)
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      <VisionCard
                        title="The Specific Scene"
                        icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />}
                        content={boardState.specific_scene}
                        placeholder="Where & When?"
                        color="purple"
                      />
                      <VisionCard
                        title="Actual Phenomenon"
                        icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />}
                        content={boardState.actual_phenomenon}
                        placeholder="What is happening?"
                        color="purple"
                      />
                      <VisionCard
                        title="State of the World"
                        icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
                        content={boardState.state_of_the_world}
                        placeholder="New Norm?"
                        color="purple"
                      />
                      <VisionCard
                        title="My Existence"
                        icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />}
                        content={boardState.my_existence}
                        placeholder="My Role?"
                        color="purple"
                      />
                    </div>
                  </div>

                  {/* Section B: PRODUCT (Phase 2) */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold text-blue-400 uppercase tracking-widest border-b border-blue-500/20 pb-2">
                      Phase 2: PRODUCT (Concrete Specs)
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      <VisionCard
                        title="Service Identity"
                        icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
                        content={boardState.service_identity}
                        placeholder="Name & Category"
                        color="blue"
                      />
                      <VisionCard
                        title="The Origin Story (Why)"
                        icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />}
                        content={boardState.origin_story}
                        placeholder="Why this?"
                        color="pink"
                      />
                      <VisionCard
                        title="Target & Pain"
                        icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />}
                        content={boardState.target_pain}
                        placeholder="Deep Pain"
                        color="blue"
                      />
                      <VisionCard
                        title="The Mechanism"
                        icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />}
                        content={boardState.mechanism}
                        placeholder="Method & Logic"
                        color="blue"
                      />
                      <VisionCard
                        title="Specific Features"
                        icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />}
                        content={boardState.specific_features}
                        placeholder="Curriculum & Functions"
                        color="blue"
                      />
                      <VisionCard
                        title="Offer & Price"
                        icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
                        content={boardState.offer_price}
                        placeholder="Price & Terms"
                        color="blue"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Input Area (Fixed Bottom) */}
        <div className="fixed bottom-0 left-0 w-full md:w-1/2 z-40 p-6 bg-gradient-to-t from-black via-black/90 to-transparent">
          <div className="relative max-w-2xl mx-auto">
            <textarea
              ref={textareaRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={isListening ? "Listening..." : "Describe your vision..."}
              className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 pr-32 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 resize-none backdrop-blur-xl shadow-2xl transition-all"
              rows={1}
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <button
                onClick={toggleListening}
                className={`p-2 rounded-xl transition-all ${isListening ? "bg-red-500/20 text-red-400 animate-pulse" : "hover:bg-white/10 text-zinc-400 hover:text-white"
                  }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
              </button>
              <button
                onClick={sendMessage}
                disabled={isLoading || !inputValue.trim()}
                className="p-2 bg-white text-black rounded-xl hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Phase Transition Overlay */}
        {
          showPhaseTransition && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md animate-fade-in">
              <div className="text-center space-y-4">
                <div className="inline-block p-4 rounded-full bg-purple-500/20 mb-4 animate-bounce">
                  <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">Phase 1 Complete</h2>
                <p className="text-xl text-zinc-400 font-mono">Switching to Product Director Mode...</p>
                <div className="w-64 h-1 bg-zinc-800 mx-auto rounded-full overflow-hidden mt-8">
                  <div className="w-full h-full bg-gradient-to-r from-purple-500 to-blue-500 animate-progress-bar"></div>
                </div>
              </div>
            </div>
          )
        }

        {/* Generated Copy Display (Overlay) - Only show if NOT in creation mode (legacy) or if we want to show it on top of everything */}
        {/* We are moving this into the Right Panel for creation mode, but keeping it here for fallback or if we want a full screen effect later */}
        {
          generatedCopy && !creationMode && (
            <div className="absolute inset-0 flex flex-col items-center justify-center z-30 pointer-events-none px-6 md:px-12 bg-black/40 backdrop-blur-sm transition-all duration-1000">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent drop-shadow-2xl text-center animate-fade-in-up leading-tight">
                {generatedCopy}
              </h2>
              {boardState.catch_copy && boardState.catch_copy !== generatedCopy && (
                <p className="mt-6 text-xl md:text-2xl text-white/90 font-medium drop-shadow-lg text-center animate-fade-in-up delay-100 max-w-2xl leading-relaxed">
                  {boardState.catch_copy}
                </p>
              )}
            </div>
          )
        }
      </div >
    </div >
  );
}
// Helper Component for Vision Cards
function VisionCard({ title, icon, content, placeholder, color }: any) {
  const colorClasses = {
    purple: "text-purple-400 bg-purple-500/10 group-hover:text-purple-300 hover:border-purple-500/30",
    blue: "text-blue-400 bg-blue-500/10 group-hover:text-blue-300 hover:border-blue-500/30",
    pink: "text-pink-400 bg-pink-500/10 group-hover:text-pink-300 hover:border-pink-500/30",
    emerald: "text-emerald-400 bg-emerald-500/10 group-hover:text-emerald-300 hover:border-emerald-500/30",
  };

  return (
    <div className={`bg-zinc-900/80 border border-white/10 rounded-2xl p-4 transition-colors group ${colorClasses[color as keyof typeof colorClasses].split(" ").pop()}`}>
      <div className="flex items-center gap-2 mb-2">
        <div className={`p-1.5 rounded-md transition-colors ${colorClasses[color as keyof typeof colorClasses].split(" ").slice(0, 3).join(" ")}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {icon}
          </svg>
        </div>
        <h4 className="font-bold text-zinc-300 text-sm">{title}</h4>
      </div>
      <p className="text-zinc-400 text-sm leading-relaxed min-h-[1.5rem] whitespace-pre-wrap">
        {content || <span className="text-zinc-600 italic">{placeholder}</span>}
      </p>
    </div>
  );
}
