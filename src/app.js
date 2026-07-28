import { compressContext } from "./optimization/contextCompression.js";
import { optimizePrompt } from "./optimization/promptOptimizer.js";
import { logger } from "./debugging/logger.js";

const sampleContext = `
  Previous messages, user intent, and irrelevant details...
  Only the important context should remain for the next agent.
  This content is used to demonstrate context compression behavior.
`;

const samplePrompt = `
You are an expert AI assistant...
You are an expert AI assistant...
Follow these instructions...
Provide concise and accurate output.
`;

logger.info("Starting AI pipeline optimization demo");

const compressedContext = compressContext(sampleContext);
const optimizedPrompt = optimizePrompt(samplePrompt);

logger.info(`Compressed context: ${compressedContext}`);
logger.info("Optimized prompt:");
logger.info(optimizedPrompt);

logger.info("Demo complete");

