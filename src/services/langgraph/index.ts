import {
  END,
  InMemoryStore,
  MemorySaver,
  START,
  StateGraph,
} from "@langchain/langgraph";
import { HumanMessage } from "@langchain/core/messages";
import { graphState } from "./graphState.js";
import { GRAPH_NODES, GRAPH_NODES_KEYS } from "./nodes/index.js";

const { entryNode } = GRAPH_NODES;

const checkpointer = new MemorySaver();
const memoryStore = new InMemoryStore();

const graph = new StateGraph(graphState)
  .addNode(GRAPH_NODES_KEYS.entryNode, entryNode)
  .addEdge(START, GRAPH_NODES_KEYS.entryNode)
  .addEdge(GRAPH_NODES_KEYS.entryNode, END)
  .compile({ checkpointer, store: memoryStore });

export async function* graphStream(prompt: string, sessionId: string) {
  const config = {
    configurable: {
      thread_id: sessionId,
    },
  };
  const currentState = {
    messages: [],
  } as typeof graphState.State;
  currentState.messages.push(new HumanMessage(prompt));

  for await (const chunk of await graph.stream(
    { messages: [new HumanMessage(prompt)] },
    {
      streamMode: "custom",
      ...config,
    }
  )) {
    yield chunk;
  }
}
