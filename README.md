# AI Pipeline Optimization

A small Node.js project that demonstrates practical helpers for preparing text in an AI-agent pipeline. It focuses on reducing unnecessary context and prompt repetition before text is sent to a downstream model or agent.

## Features

- **Context compression** — trims leading and trailing whitespace, normalizes repeated whitespace, and truncates text longer than 250 characters.
- **Prompt optimization** — removes blank lines, trims each line, and keeps only the first occurrence of duplicate prompt lines.
- **Structured logging** — provides `info`, `warn`, and `error` helpers with consistent console prefixes.
- **Automated checks** — Jest tests cover both optimization helpers; GitHub Actions runs tests and linting on pushes to `main` and `feature/**` branches.

## Project structure

```text
assignment/
├── src/
│   ├── app.js                         # Demo application
│   ├── debugging/
│   │   └── logger.js                  # Console logger
│   └── optimization/
│       ├── contextCompression.js      # Context cleanup and truncation
│       └── promptOptimizer.js         # Prompt line cleanup and deduplication
├── tests/
│   └── app.test.js                    # Unit tests
├── .github/workflows/ci-cd.yml        # CI and staging-deploy workflow
├── .env.example                       # Environment-variable template
└── package.json
```

## Requirements

- Node.js 20 or later
- npm

## Installation

```bash
npm install
```

To create a local environment file, copy `.env.example` to `.env` and provide values only when your deployment or future integrations require them. Do not commit `.env` files or credentials.

## Usage

Run the demonstration application:

```bash
npm run dev
```

The demo compresses a sample context, optimizes a sample prompt, and prints the results through the logger.

## Testing

Run the test suite:

```bash
npm test
```

The test script starts Jest with Node's `--experimental-vm-modules` flag so Jest can run this ES module project.

Run linting:

```bash
npm run lint
```

## Implementation details

### `compressContext(context)`

Returns an empty string for non-string or empty input. For valid strings, it trims the input, collapses consecutive whitespace to a single space, and truncates results beyond 250 characters with an ellipsis.

### `optimizePrompt(prompt)`

Returns an empty string for non-string or empty input. For valid prompts, it trims lines, removes blank lines, and removes repeated lines while preserving the original order.

## CI/CD

The GitHub Actions workflow runs on pushes to `main` and `feature/**` branches. It installs dependencies, runs tests, and runs ESLint. Pushes to `main` also execute the current staging deployment placeholder. The deploy token is supplied from the `DEPLOY_TOKEN` GitHub Actions secret.

## Future improvements

- Add semantic relevance filtering or summarization for larger contexts.
- Add integration tests for the complete demo flow.
- Replace the staging deployment placeholder with a real deployment target.
