
import { GoogleGenAI } from "@google/genai";

const getStyleAdvice = async (prompt: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "API key not configured. Please set up your API key.";
  }
  
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: "You are a friendly and knowledgeable fashion stylist for LaSujata Clothing. Provide helpful, concise, and inspiring style advice. When relevant, suggest types of clothing that can be found at a high-end clothing store like LaSujata.",
        temperature: 0.7,
        topP: 1,
        topK: 1,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to get style advice from the AI.");
  }
};

export { getStyleAdvice };
