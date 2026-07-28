export function optimizePrompt(prompt) {
  if (!prompt || typeof prompt !== "string") return "";
  const lines = prompt
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  return [...new Set(lines)].join("\n");
}