# .d.ts Minify CLI

[![JSR](https://jsr.io/badges/@lino/dts-minify-cli)](https://jsr.io/@lino/dts-minify-cli)
[![CI](https://github.com/lino-levan/dts-minify-cli/workflows/CI/badge.svg)](https://github.com/lino-levan/dts-minify-cli/actions?query=workflow%3ACI)

A CLI tool to minify DTS files based on
[dts-minify](https://github.com/dsherret/dts-minify).

## Installation

```sh
deno install --reload -f jsr:@lino/dts-minify-cli --name dts-minify
```

## Usage

By default, `dts-minify` will read stdin and write to stdout.

```sh
dts-minify < input.d.ts > output.d.ts
```

You can also specify an input file and an output file.

```sh
dts-minify --input-file input.d.ts --output-file output.d.ts
```

## Options

If you'd like, you can also specify whether you'd like to keep jsdoc comments or
not.

```sh
dts-minify --keep-jsdoc --input-file input.d.ts --output-file output.d.ts
```
