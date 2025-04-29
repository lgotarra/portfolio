import { ChatGroq } from "@langchain/groq";

if (!process.env.GROQ_API_KEY) {
  throw new Error("Missing Groq Credentials");
}

export const llmsClient = new ChatGroq({
  model: "llama-3.3-70b-versatile",
  temperature: 0,
  apiKey: process.env.GROQ_API_KEY!,
});
