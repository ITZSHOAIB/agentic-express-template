import { LLM, LLMProviders } from "agentic-express";

const llmProvider = new LLM({
  provider: LLMProviders.OPENAI,
  options: {
    apiKey: process.env.OPENAI_API_KEY || "",
    temperature: 0.7,
  },
});

export const model = llmProvider.getInstance();
