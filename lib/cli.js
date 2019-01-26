#!/usr/bin/env node
"use strict";
const meow = require("meow");

const Procon = require("../");

const cli = meow(
  `
Usage
  $ procon [command]

Commands
  pro - adds a pro to the list.
  con - adds a con to the list.

Examples
  $ procon pro Easy to use.
`,
  {
    flags: {
      file: {
        type: "string",
        alias: "f",
        default: "list.json"
      }
    }
  }
);

Procon.run(cli.input, cli.flags)
  .then(console.log)
  .catch(console.error);
