const PizzaShop = require("./pizzaShop");
const DrinkMachine = require("./drinkMachine");
const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size, topping) => {
  console.log(`Order received baking a ${size} pizza with ${topping}.`);
  drinkMachine.serveDrink(size);
});
pizzaShop.order("small", "mushrooms");
pizzaShop.displayOrderNumber();
