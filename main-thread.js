const http = require("node:http");

// Worker threads example
const { Worker } = require("node:worker_threads");

const server = http.createServer((req, res) => {
  // Routing
  if (req.url === "/") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Home page");
  } else if (req.url === "/slow-page") {
    const worker = new Worker("./worker-thread.js");
    worker.on("message", (j) => {
      res.writeHead(200, { "Content-type": "text/plain" });
      res.end(`Slow Page ${j}`);
    });
  } else {
    res.writeHead(404);
    res.end("Page not found");
  }
});

server.listen(3000, () => {
  console.log("Server running on port:3000");
});
