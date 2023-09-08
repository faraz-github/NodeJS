function greet(name) {
  console.log(`Hello ${name}`);
}

// // A function that is passed as an argument to a function argument is called callback function in javascript
// function greetVishwas(greetFn) {
//   const name = "Vishwas";
//   greetFn(name); // A function that returns a function is called a HOF higher order function in javascript
// }

// Types of callbacks
// 1. Synchronous Callbacks
// 2. Asynchronous Callbacks

// In Node.js we have Asynchronous callbacks to delay the execution where the process takes time to prevent blocking

function higherOrderFunction(callback) {
  const name = "Vishwas";
  callback(name);
}

higherOrderFunction(greet);
