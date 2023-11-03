const http = require("node:http");
const cluster = require("node:cluster");
const OS = require("node:os");

console.log("CPU Cores: " + OS.cpus().length);

// Service workers example to over single thread blocking nature in nodejs

if (cluster.isMaster) {
  console.log(`Master process ${process.pid} is running `);
  cluster.fork(); // 1
  cluster.fork(); // 2 Create two worker threads at minimum, depends on cpu cores
} else {
  console.log(`Worker ${process.pid} started`);
  const server = http.createServer((req, res) => {
    // Routing
    if (req.url === "/") {
      res.writeHead(200, { "Content-type": "text/plain" });
      res.end("Home page");
    } else if (req.url === "/slow-page") {
      for (let i = 0; i < 6000000; i++) {
        // cpu intense for mocking single thread blocking nature in nodejs
        res.writeHead(200, { "Content-type": "text/plain" });
        res.end("Slow Page");
      }
    } else {
      res.writeHead(404);
      res.end("Page not found");
    }
  });
}

server.listen(3000, () => {
  console.log("Server running on port:3000");
});
// pm2 is a handy cli tool to run no-cluster apps into cluster mode
