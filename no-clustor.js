const http = require("node:http");

const server = http.createServer((req, res) => {
  // Routing
  if (req.url === "/") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Home page");
  } else if (req.url === "/slow-page") {
    for (let i = 0; i < 6000000; i++) { // cpu intense for mocking single thread blocking nature in nodejs
      res.writeHead(200, { "Content-type": "text/plain" });
      res.end("Slow Page");
    }
  } else {
    res.writeHead(404);
    res.end("Page not found");
  }
});

// Service Worker

server.listen(3000, () => {
  console.log("Server running on port:3000");
});
