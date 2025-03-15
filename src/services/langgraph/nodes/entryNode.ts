import type { LangGraphRunnableConfig } from "@langchain/langgraph";
import type { graphState } from "../graphState";
import { AIMessage, isHumanMessage } from "@langchain/core/messages";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { model } from "../models.js";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { entryNodeSystemPrompt } from "../prompts/entryNodePrompt.js";

export async function entryNode(
  state: typeof graphState.State,
  config: LangGraphRunnableConfig
) {
  const humanMessages = state.messages.filter((message) =>
    isHumanMessage(message)
  );
  const lastHumanMessage = humanMessages[humanMessages.length - 1].content;

  const prompt = ChatPromptTemplate.fromMessages([
    ["system", entryNodeSystemPrompt],
    ["human", lastHumanMessage],
  ]);

  const chain = prompt.pipe(model).pipe(new StringOutputParser());

  let fullResponse = "";
  for await (const chunk of await chain.stream({
    message: lastHumanMessage,
  })) {
    fullResponse += chunk;
    config.writer?.(chunk);
  }

  return {
    messages: [new AIMessage(fullResponse)],
  };
}
