# @deanrih/elysia-problem-details

> NOTE: The package/library still in progress of being extracted from my work project

An ElysiaJS middleware implementation for Problem Details (RFC 9457).

## Installation

> NOTE: The package/library hasn't been actually published yet, these commands are placeholder

```sh
# Bun
bun add @deanrih/elysia-problem-details
# pnpm
pnpm add @deanrih/elysia-problem-details
# npm
npm install @deanrih/elysia-problem-details
```

## Usage

> NOTE: The package/library hasn't been actually published yet, this example is a placeholder

```ts
import { Elysia } from "elysia";
import { problemDetails } from "@deanrih/elysia-problem-details";

const app = new Elysia()
  .use(problemDetails())
  .get("/", () => new Error())
  .listen(3000, (server) => {
    console.clear();
    console.log(`Listening @ ${server.hostname}:${server.port}`);
  });
```

Checkout the [example](https://github.com/deanrih/elysia-problem-details/blob/main/example) folder.

## Credits/Reference

IETF RFC Datatracker

- [RFC 9457 <Problem Details for HTTP APIs>](https://datatracker.ietf.org/doc/html/rfc9457)
