export function compressContext(context) {
  if (!context || typeof context !== "string") return "";
  const normalized = context.trim().replace(/\s+/g, " ");
  if (normalized.length <= 250) return normalized;
  return `${normalized.slice(0, 247).trim()}...`;
}