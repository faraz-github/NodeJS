const superHero = require("./super-hero");

console.log(superHero.getName()); // Batman
superHero.setName("Superman");
console.log(superHero.getName()); // Superman

const newSuperHero = require("./super-hero");
console.log(newSuperHero.getName()); // Superman | why? module caching

require("./batman");
require("./superman");
const addFn = require("./add");
console.log("Hello World");

const sum = addFn(1, 2);

console.log(sum);
