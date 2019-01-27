#!/usr/bin/env node
"use strict";
const meow = require("meow");

const help = require("./help");
const Proconner = require("../");

const cli = meow(help, {
  flags: {
    file: {
      type: "string",
      alias: "f",
      default: "list.json"
    }
  }
});

Proconner.run(cli.input, cli.flags)
  .then(console.log)
  .catch(console.error);
