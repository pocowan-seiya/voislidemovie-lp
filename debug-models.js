const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "");

async function listModels() {
    try {
        console.log("Testing model: gemini-2.5-flash-preview-09-2025 with JSON mode and System Instruction");
        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash-preview-09-2025",
            systemInstruction: "You are a helper. Respond in JSON.",
            generationConfig: { responseMimeType: "application/json" }
        });
        const result = await model.generateContent("Hello");
        console.log("Success:", result.response.text());
    } catch (e) {
        console.error("Error:", e.message);
    }
}

listModels();
