#!/usr/bin/env node

const yargs = require("yargs");
const {args} = yargs(process.argv);

console.log("Pokedex cli");

console.log(args.pokemon);
