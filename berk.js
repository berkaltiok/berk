#!/usr/bin/env node
"use strict";

// Clear Terminal
process.stdout.write("\u001b[3J\u001b[2J\u001b[1J\u001b[3J");
console.clear();

const config          =   require("./berk.json");

const terminalImage   =   require('terminal-image');
const chalk           =   require('chalk');
const got             =   require('got');
const ww              =   require('word-wrap');

const inquirer        =   require('inquirer');
const open            =   require('open');

console.log("")
got(config.avatar, { responseType: 'buffer' })
  .then((image) => terminalImage.buffer(image.body, { width: '26%' }))
  .then((image) => image.split("\n").forEach((line) => console.log("  " + line)))
  .then(() => {
    console.log(ww(eval(`chalk\`${config.title}\``), { width: 200, trim: true }))
    // config.about.forEach(text => console.log(ww(eval(`chalk\`${text}\``), { width: 200, trim: true })))
  })
  .then(() => {
    console.log("\n")
    inquirer.prompt([
      {
        type: 'list',
        message: 'For other things...',
        name: 'open',
        choices: [
          { name: chalk.bold.hex('#888888')(`💻  GitHub`), value: 'https://github.com/berkaltiok' },
          { name: chalk.bold.hex('#1DA1F2')(`🐦  Twitter`), value: 'https://twitter.com/berkpw' },
          { name: chalk.bold.hex('#D7CBFD')(`💼  Portfolio`), value: 'https://berkaltiok.github.io' },
          { name: chalk.bold.hex('#f04a45')('👋  Nope. Bye.'), value: false }
        ]
      }
    ])
    .then((link) => { open(link.open); process.exit(); })
    .catch(() => {});
  })
  .catch((e) => console.log(e));