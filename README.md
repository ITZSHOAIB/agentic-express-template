# Agentic Express Boilerplate

This project is a boilerplate application powered by [Agentic Express](https://www.npmjs.com/package/agentic-express), a framework for building AI-powered Express.js applications with LangGraph.

## Features

- 🤖 Ready-to-use LLM integration with LangGraph
- 🔄 Streaming responses support
- 🛠️ TypeScript setup for type safety
- 🚀 Express.js server configuration
- 📝 Modular project structure
- 🧩 Customizable LLM models and prompts

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)

### Installation

1. Clone this repository
2. Install dependencies:

```bash
pnpm install
# or
npm install
# or
yarn install
```

3. Copy the environment template and add your API keys:

```bash
cp .env.template .env
```

4. Start the development server:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

The server will start on `http://localhost:3030` by default.

## Project Structure

```
src/
  ├── index.ts                # Main application entry point
  ├── routes/                 # API routes
  │   └── v1/                 # API version 1
  └── services/               # Service modules
      └── langgraph/          # LangGraph implementation
          ├── graphState.ts   # Graph state management
          ├── models.ts       # LLM model configuration
          ├── nodes/          # Graph nodes
          └── prompts/        # System prompts for AI
```

## Configuration

- Model settings can be adjusted in `src/services/langgraph/models.ts`
- System prompts for the AI can be modified in `src/services/langgraph/prompts/`
- LangGraph node definitions are located in `src/services/langgraph/nodes/`

## Development

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

## Built With

- [Agentic Express](https://www.npmjs.com/package/agentic-express) - Framework for AI-powered Express applications
- [LangChain](https://js.langchain.com) - LLM framework
- [LangGraph](https://github.com/langchain-ai/langgraphjs) - Graph-based LLM orchestration
- [Express.js](https://expressjs.com/) - Web framework
- [TypeScript](https://www.typescriptlang.org/) - Language
