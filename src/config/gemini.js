import { GoogleGenAI } from "@google/genai";

async function main(prompt) {
  const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY,
  });

  const response = await ai.models.generateContentStream({
    model: "gemini-3-flash-preview",
    contents: [{ role: "user", parts: [{ text: prompt }] }],
  });

  for await (const chunk of response) {
    // if (chunk.text) console.log(chunk.text);
    if (chunk.text) console.log(chunk.text);
    response.text;
  }
}

export default main;
