import { entryNode } from "./entryNode.js";

const GRAPH_NODES = {
  entryNode,
};

const GRAPH_NODES_KEYS = Object.fromEntries(
  Object.keys(GRAPH_NODES).map((key) => [key, key])
);

export { GRAPH_NODES, GRAPH_NODES_KEYS };
