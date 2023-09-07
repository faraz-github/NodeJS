// path - built-in module
// const path = require("node:path");
const path = require("path");

console.log(__filename);
console.log(__dirname);

console.log(path.basename(__filename));
console.log(path.basename(__dirname));

console.log(path.extname(__filename));
console.log(path.extname(__dirname));

console.log(path.parse(__filename));
console.log(path.format(path.parse(__filename)));

console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute("./data.json"));

console.log(path.join("/folder1", "//folder2", "index.html"));
console.log(path.join("/folder1", "//folder2", "../index.html"));
console.log(path.join(__dirname, "data.json"));
console.log("====================================");
console.log(path.resolve("folder1", "folder2", "index.html"));
console.log(path.resolve("/folder1", "folder2", "index.html"));
console.log(path.resolve("/folder1", "//folder2", "index.html"));
console.log(path.resolve("/folder1", "//folder2", "../index.html"));
console.log(path.resolve(__dirname, "data.json"));

const data = require("./data.json");
// By default nodejs will parse json data into javascript object
console.log(data);

const math = require("./math");

// const {add, subtract} = math;

console.log(math.add(2, 3));
console.log(math.subtract(2, 3));

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
