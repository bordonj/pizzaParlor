// business logic for Pizzas --------
function Pizzas () {
  this.pizzaOrder = {};
  this.currentId = 0;
}

Pizzas.prototype.addPizzaOrder = function(pizzaOrder) {
  pizzaOrder.id = this.assignId();
  this.pizzaOrder[pizzaOrder.id] = pizzaOrder;
};

Pizzas.prototype.assignId = function() {
  this.currentId++;
  return this.currentId;
}

// business logic of PizzaOrder
function PizzaOrder(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

PizzaOrder.prototype.addPrice = function() {
  if (this.size === 'x-large') {
    this.price = 10;
  } else if (this.size === 'large') {
    this.price = 8;
  } else if (this.size === 'medium') {
    this.price = 6;
  } else {
    this.price = 4;
  }
  if (this.toppings.length > 3) {
    this.price += 6;
  } else if (this.toppings.length === 2) {
    this.price += 4;
  } else {
    this.price += 2;
  }
}