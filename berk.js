#!/usr/bin/env node
"use strict";

// Clear Terminal
process.stdout.write("\u001b[3J\u001b[2J\u001b[1J\u001b[3J");
console.clear();

const terminalImage   =   require('terminal-image');
const chalk           =   require('chalk');
const got             =   require('got');
const ww              =   require('word-wrap');

console.log("")
got('https://avatars3.githubusercontent.com/u/17373485?s=600&v=4', { responseType: 'buffer' })
  .then((image) => terminalImage.buffer(image.body, { width: '26%' }))
  .then((image) => image.split("\n").forEach((line) => console.log("  " + line)))
  .then(() => {
    console.log(ww(chalk`Hello, this is {bold.blue Berk ALTIOK!}`, { width: 200, trim: true }));
  })
  .catch((e) => console.log(e));
