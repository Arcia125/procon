#!/usr/bin/env node
'use strict';
const meow = require('meow');

const cli = meow(`
Usage
  $  [input]

Options
  --foo  Lorem ipsum. [Default: false]

Examples
  $ 
  unicorns
  $  rainbows
  unicorns & rainbows
`);
