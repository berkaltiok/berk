#!/usr/bin/env node
"use strict";

// Clear Terminal
process.stdout.write("\u001b[3J\u001b[2J\u001b[1J\u001b[3J");
console.clear();

var terminalImage = require('terminal-image');
var got           = require('got');
var ww            = require('word-wrap');
var c             = require('chalk');

// var link = require('terminal-link');
// var iq = require('inquirer');
// var open = require("open");

console.log("")
got('https://avatars3.githubusercontent.com/u/17373485?s=600&v=4', { responseType: 'buffer' })
  .then((image) => terminalImage.buffer(image.body, { width: '26%' }))
  .then((image) => image.split("\n").forEach((line) => console.log("  " + line)))
  .then(() => {
    console.log(ww(`Hello, this is ${c.blue.bold("Berk ALTIOK")}!`.trim(), { width: 200, trim: true }));
  })
  .catch((e) => console.log(e));