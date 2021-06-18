//business logic for Pizzas --------
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
