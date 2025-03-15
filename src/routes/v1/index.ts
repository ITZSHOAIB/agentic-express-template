import { Router } from "express";
import { graphStream } from "../../services/langgraph/index.js";
import { AgenticExpress } from "agentic-express";

const router: Router = Router();

const agenticExpress = new AgenticExpress({
  graphStream,
});

router.use(await agenticExpress.setup());

export default router;
