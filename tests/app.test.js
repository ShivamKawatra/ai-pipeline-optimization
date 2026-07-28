import { compressContext } from "../src/optimization/contextCompression.js";
import { optimizePrompt } from "../src/optimization/promptOptimizer.js";

describe("AI pipeline optimization helpers", () => {
  test("compressContext trims and truncates long text", () => {
    const input = "a".repeat(300);
    const output = compressContext(input);
    expect(output.length).toBeLessThan(300);
    expect(output.endsWith("...")).toBe(true);
  });

  test("compressContext preserves short text", () => {
    expect(compressContext("  short text  ")).toBe("short text");
  });

  test("optimizePrompt removes duplicate and empty lines", () => {
    const prompt = `
      Hello
      Hello
      World

    `;
    expect(optimizePrompt(prompt)).toBe("Hello\nWorld");
  });

  test("optimizePrompt returns empty string for invalid input", () => {
    expect(optimizePrompt(null)).toBe("");
  });
});
// ```// filepath: d:\Shivam\internship\assignment\tests\app.test.js
// import { compressContext } from "../src/optimization/contextCompression.js";
// import { optimizePrompt } from "../src/optimization/promptOptimizer.js";

// describe("AI pipeline optimization helpers", () => {
//   test("compressContext trims and truncates long text", () => {
//     const input = "a".repeat(300);
//     const output = compressContext(input);
//     expect(output.length).toBeLessThan(300);
//     expect(output.endsWith("...")).toBe(true);
//   });

//   test("compressContext preserves short text", () => {
//     expect(compressContext("  short text  ")).toBe("short text");
//   });

//   test("optimizePrompt removes duplicate and empty lines", () => {
//     const prompt = `
//       Hello
//       Hello
//       World

//     `;
//     expect(optimizePrompt(prompt)).toBe("Hello\nWorld");
//   });

//   test("optimizePrompt returns empty string for invalid input", () => {
//     expect(optimizePrompt(null)).toBe("");
//   });
// });