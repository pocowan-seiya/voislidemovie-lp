import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        let { prompt } = await req.json();

        if (!prompt) {
            prompt = "Futuristic abstract background, high quality, 8k";
        }

        const apiKey = process.env.GOOGLE_API_KEY;
        if (!apiKey) {
            return NextResponse.json({ error: "API key not configured" }, { status: 500 });
        }

        // --- Step A: Art Director Pipeline (Gemini) ---
        // Generate a detailed English prompt from the input
        let englishPrompt = prompt;
        try {
            const geminiResponse = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        contents: [{
                            parts: [{
                                text: `You are an expert Art Director. Convert the following description into a highly detailed, cinematic English image prompt for an AI image generator (Imagen 3).
                                Focus on lighting, composition, texture, and atmosphere.
                                Input: "${prompt}"
                                Output (English Prompt only):`
                            }]
                        }]
                    })
                }
            );
            const geminiData = await geminiResponse.json();
            if (geminiData.candidates && geminiData.candidates[0].content.parts[0].text) {
                englishPrompt = geminiData.candidates[0].content.parts[0].text.trim();
                console.log("Art Director Prompt:", englishPrompt);
            }
        } catch (e) {
            console.error("Art Director failed, using raw prompt:", e);
        }

        // --- Step B: Image Generation (Imagen 3) ---
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-001:predict?key=${process.env.GOOGLE_API_KEY}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    instances: [{ prompt: englishPrompt }],
                    parameters: {
                        sampleCount: 1,
                        aspectRatio: "16:9"
                    },
                }),
            }
        );

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error("Imagen API Error Details:", JSON.stringify(errorData, null, 2));

            // Use Local Fallback based on prompt keywords (simple heuristic)
            let fallbackImage = "/images/placeholders/type-b.jpg"; // Default to immersive/abstract
            const p = englishPrompt.toLowerCase();
            if (p.includes("clean") || p.includes("product") || p.includes("bokeh")) {
                fallbackImage = "/images/placeholders/type-a.jpg";
            } else if (p.includes("text") || p.includes("minimal") || p.includes("negative space")) {
                fallbackImage = "/images/placeholders/type-c.jpg";
            }

            return NextResponse.json({
                imageUrl: fallbackImage,
                generatedPrompt: englishPrompt,
                warning: "Generated using Local Fallback due to API error."
            });
        }

        const data = await response.json();
        const predictions = data.predictions;
        if (predictions && predictions.length > 0) {
            const base64Image = predictions[0].bytesBase64Encoded;
            const mimeType = predictions[0].mimeType || "image/png";
            const imageUrl = `data:${mimeType};base64,${base64Image}`;
            return NextResponse.json({
                imageUrl,
                generatedPrompt: englishPrompt // Return for debug
            });
        } else {
            return NextResponse.json({ error: "No image generated" }, { status: 500 });
        }

    } catch (error: any) {
        console.error("Image generation failed:", error);
        // Return the specific error message for debugging
        return NextResponse.json(
            {
                error: "Failed to generate image",
                details: error.message,
                stack: error.stack
            },
            { status: 500 }
        );
    }
}
