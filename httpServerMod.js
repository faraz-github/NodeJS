const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  const superHero = {
    firstName: "Bruce",
    lastname: "Wayne",
  };

  //   const htmlFile = fs.readFileSync("./index.html", "utf-8");
  //   fs.createReadStream("./index.html").pipe(res);
  fs.createReadStream(__dirname + "/index.html").pipe(res);
  res.writeHead(200, { "Content-type": "text/plain" });
  res.writeHead(200, { "Content-type": "text/html" });
  // HTML Templating
  // const name = "Faraz";
  // let html = fs.readFileSync("./index.html", "utf-8");
  // html = html.replace("{{name}}", name);
  // res.end(html);
  // ---
  // Routing
  if (req.url === "/") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Home page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("About page");
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify(superHero));
  }else{
    res.writeHead(404);
    res.end("Page not found");
  }
  res.end(req.url);
  // ---
  //   res.writeHead(200, { "Content-type": "application/json" });
  //   res.end(JSON.stringify(superHero));
  //   res.end("<h1>Hello World</h1>");
  //   res.end(htmlFile);
});

server.listen(3000, () => {
  console.log("Server running on port:3000");
});


// For deployment ...heroku, render or fly can be good option