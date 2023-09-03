// Immediately invoked function expression
// Under the hood Node.js uses the same pattern for modules to keep the scope
// of each module private to itself.

// IIFE Signature
// (function(){

// })()

// No params
(function () {
  const superHero = "Batman";
  console.log(superHero);
})();

// With params
(function (message) {
  const superHero = "Batman";
  console.log(message, superHero);
})("Hello");

(function (message) {
  const superHero = "Superman";
  console.log(message, superHero);
})("Hey");
