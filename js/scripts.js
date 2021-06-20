// business logic for Pizzas
//may delete this logic if unable to add multiple pizzaas
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
  } else if (this.size === 'small') {
    this.price = 4;
  } else {
    this.price = 0;
  }
  if (this.toppings.length >= 1) {
    for (let topping of this.toppings) {
      this.price += 1.50;
      // console.log('loop', topping);
    }
    // this.price += 6;
  // } else if (this.toppings.length === 2) {
  //   this.price += 4;
  // } else if (this.toppings.length === 1) {
  //   this.price += 2;
  } else {
    this.price;
  }
}

// UI logic
let pizzas = new Pizzas();
let newPizza;
$(document).ready(function() {
  $('#addOrder').on('click', function(e) {
    // it seems like I need to add the prevenDefault or it refreshes even though this isn't a submit
    e.preventDefault();
    let toppings = [];
    const selectedSize = $('#selectSize').val();
    if(!selectedSize) {
      alert('please select size');
    } else {
      $('input').each(function() {
        if ($(this).is(':checked')) {
          toppings.push($(this).val());
        }
      })
      newPizza = new PizzaOrder(selectedSize, toppings);
  
      
      console.log('toppings', toppings);
      console.log('newPizza', newPizza);
      newPizza.addPrice();
      console.log('newPizza price', newPizza.price)
      console.log('newPizza toppings', newPizza.toppings)
      console.log('newPizza size', newPizza.size)
      $('.price').html(`$${newPizza.price.toFixed(2)}`);
      toppings = newPizza.toppings;
      let toppingsStr = toppings.join('<br>');
      console.log('toppingsStr', toppingsStr);
      let htmlstr = `
      <p><b>Size</b>: ${newPizza.size}</p>
      <p><b>Toppings</b>: <br>${toppingsStr}</p></p>`
      $('.orderPreview').html(htmlstr);
      $('.orderPreview').show();
    }

  })
  // may delete this logic below if unable to correctly add pizzas 
  // was able to refresh values with code below
  $('#addPizza').click(function(e) {
    e.preventDefault();
    $('#selectSize').val('select');
    $('input').each(function() {
      console.log('this', $(this))
      $(this).prop('checked', false);
    })

    pizzas.addPizzaOrder(newPizza);
    let pizzasArr = Object.keys(pizzas);
    console.log('pizzasArr', pizzasArr)
    console.log('pizzas object', pizzas);
  })
  $('#pizza').submit(function(e) {
    e.preventDefault();
    const selectedSize = $('#selectSize').val();
    if(!selectedSize) {
      alert('please select size');
    } else {
      $('.left, .right, .rightLow').hide();
      $('.submitted').show();
    }

  })
})