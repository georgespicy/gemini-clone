import { GoogleGenAI } from "@google/genai";

async function main(prompt) {
  const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY,
  });

  const stream = await ai.models.generateContentStream({
    model: "gemini-3-flash-preview",
    contents: [{ role: "user", parts: [{ text: prompt }] }],
  });

  let fullText = "";

  for await (const chunk of stream) {
    if (chunk.text) {
      fullText += chunk.text; // ✅ accumulate text
    }
  }

  return fullText; // ✅ return final string
}

export default main;