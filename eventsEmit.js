const EventEmitter = require("node:events");

const emitter = new EventEmitter();

// Catching an event
emitter.on("order-pizza", (size, topping) => {
  console.log(`Order Received! Baking a ${size} pizza with ${topping}`);
});

emitter.on("order-pizza", (size) => {
  if (size === "large") {
    console.log("Serving complementary drink");
  }
});

console.log("Task before the event is emitted"); // Demo for non blocking feature

// Emitting an event
emitter.emit("order-pizza", "large", "mushrooms");

// Takeaway: Events allow us to write code in a non blocking manner
