const fs = require("node:fs");
const zlib = require("node:zlib"); // Compression and zipped file and transform stream

const gzip = zlib.createGzip();

const readableStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});

readableStream.pipe(gzip).pipe(fs.WriteStream("./greet.txt.gz"));

const writableStream = fs.createWriteStream("./greet.txt");

// Pipes work like connection
// Tap connected to water tank | writableStream(Tap) connected to readableStream(Watertank)

readableStream.pipe(writableStream);
