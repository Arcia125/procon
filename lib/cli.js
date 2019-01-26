#!/usr/bin/env node
"use strict";
const meow = require("meow");

const Proconner = require("../");

const cli = meow(
  `
Usage
  $ proconner [command]

Commands
  pro - adds a pro to the list.
  con - adds a con to the list.

Examples
  $ proconner pro Easy to use.
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

Proconner.run(cli.input, cli.flags)
  .then(console.log)
  .catch(console.error);
