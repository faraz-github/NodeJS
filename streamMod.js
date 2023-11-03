const fs = require("node:fs");

const readableStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark: 2, // default 64 kb set to 2bytes for demo
});

const writableStream = fs.createWriteStream("./greet.txt");

// Streams extend from the event emitter

readableStream.on("data", (chunk) => {
  console.log(chunk);
  writableStream.write(chunk);
});
