const http = require("node:http");
const crypto = require("node:crypto");

// Increase libuv thread pool size
// process.env.UV_THREADPOOL_SIZE = 5; // can be increased to cpu cores available

const start = Date.now();
const MAX_CALLS = 1;
// Password based key derivation function 2 - pbkf2 | Sync Tasks meaning blocking nature
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512"); // encryption
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512"); // encryption
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512"); // encryption
// console.log("Hash: ", Date.now() - start);
// for (let index = 0; index < MAX_CALLS; index++) {
//   crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
//     console.log(`Hash: ${index+1}`, Date.now() - start);
//   });
// }

// some error while running
// for (let index = 0; index < MAX_CALLS; index++) {
//   http.request("https://www.google.com", (res) => {
//     res.on("data", () => {});
//     res
//       .on("end", () => {
//         console.log(`Request: ${index + 1}`, Date.now() - start);
//       })
//       .end();
//   });
// }
