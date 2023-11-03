const { parentPort } = require("node:worker_threads");

let j = 0;
for (let i = 0; i < 6000000; i++) {
  j++;
  // cpu intense for mocking single thread blocking nature in nodejs
}

parentPort.postMessage(j);
