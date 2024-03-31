/**
 * This is a simple CLI tool that minifies TypeScript declaration files.
 * @module
 */

import { parseArgs } from "@std/cli/parse-args";
import { createMinifier } from "@david/dts-minify";
import ts from "typescript";

// setup (provide a TS Compiler API object)
const minifier = createMinifier(ts);

const flags = parseArgs(Deno.args, {
  boolean: ["keep-jsdoc"],
  string: ["input-file", "output-file"],
  alias: {
    "i": "input-file",
    "o": "output-file",
  },
});

let text = "";

// if an input file is provided, read it, otherwise read from stdin
if (flags["input-file"]) {
  text = Deno.readTextFileSync(flags["input-file"]);
} else {
  const decoder = new TextDecoder();
  for await (const chunk of Deno.stdin.readable) {
    text += decoder.decode(chunk);
  }
}

const result = minifier.minify(text, {
  keepJsDocs: flags["keep-jsdoc"],
});

// if an output file is provided, write to it, otherwise write to stdout
if (flags["output-file"]) {
  Deno.writeTextFileSync(flags["output-file"], result);
} else {
  console.log(result);
}
