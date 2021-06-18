// business logic for Pizzas
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
  if (this.toppings.length > 2) {
    for (let topping of this.toppings) {
      this.price += 2;
      // console.log('loop', topping);
    }
    // this.price += 6;
  } else if (this.toppings.length === 2) {
    this.price += 4;
  } else if (this.toppings.length === 1) {
    this.price += 2;
  } else {
    this.price;
  }
}

$(document).ready(function() {
  $('#preview').on('click', function(e) {
    // it seems like I need to add the prevenDefault or it refreshes even though this isn't a submit
    e.preventDefault();
    let toppings = [];
    const selectedSize = $('#selectSize').val();
    if(!selectedSize) {
      alert('please select size');
    } else {
      console.log(selectedSize);
    }
    $('input').each(function() {
      if ($(this).is(':checked')) {
        toppings.push($(this).val());
      }
    })
    let newPizza = new PizzaOrder(selectedSize, toppings);
    console.log('toppings', toppings);
    console.log('newPizza', newPizza);
    newPizza.addPrice();
    console.log('newPizza price', newPizza.price)
    console.log('newPizza toppings', newPizza.toppings)
    console.log('newPizza size', newPizza.size)
    $('.price').html(newPizza.price)
  })

})