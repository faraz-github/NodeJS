const fs = require("node:fs");

console.log("First");
// Sync file read
const fileContents = fs.readFileSync("./file.txt", "utf-8");

console.log(fileContents);

console.log("Second");

// Async file read
fs.readFile("./file.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

console.log("Third");
fs.writeFileSync("./greet.txt", "Hello World!");

// Overwrite 
fs.writeFile("./greet.txt", "Hello world again!", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("File Written");
  }
});

// Append 
fs.writeFile("./greet.txt", "Hello world again!", {flag: "a"}, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("File Written");
    }
  });
