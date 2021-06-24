// business logic for Pizzas ----------
function Pizzas () {
  this.pizzaOrder = {};
  this.currentId = 0;
  this.totalPrice = 0;
  this.pizza;
}

Pizzas.prototype.addPizzaOrder = function(pizzaOrder) {
  pizzaOrder.id = this.assignId();
  this.pizzaOrder[pizzaOrder.id] = pizzaOrder;
};

Pizzas.prototype.assignId = function() {
  let pizzaOrderEntries = Object.entries(this.pizzaOrder);
  if (pizzaOrderEntries === undefined) {
    this.currentId = 0;
  } else {
    this.currentId++;
  }
  return this.currentId;
};

Pizzas.prototype.deleteOrder = function (id) {
  delete this.pizzaOrder[id];
  for (let i = this.currentId; i >= 1; i--) {
    if (i > id) {
      this.currentId = i;
      break;
    } else {
      this.currentId = id-1;
    }
  }
  return true;
};

// business logic for PizzaOrder ----------
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
    }
  } else {
    this.price;
  }
};
function attachDeleteListeners(pizzas) {
  $(".orderPreview").on("click", ".delete", function() { 
    $(this).remove();
    $(`.${this.id}`).remove();
    pizzas.totalPrice -= pizzas.pizzaOrder[this.id].price;
    pizzas.deleteOrder(parseInt(this.id));
    console.log('pizzas', pizzas);
    $('.price').html(`$${pizzas.totalPrice.toFixed(2)}`);
  });
}

// UI logic ----------
$(document).ready(function() {
  let pizzas = new Pizzas();
  attachDeleteListeners(pizzas);
  
  $('#addOrder').on('click', function(e) {
    // seems like the prevenDefault() is needed, or page refreshes even though this isn't a type=submit
    e.preventDefault();
    let toppings = [];
    const selectedSize = $('#selectSize').val();
    if(!selectedSize) {
      alert('Please select a size first! :)');
    } else {
      $('input').each(function() {
        if ($(this).is(':checked')) {
          toppings.push($(this).val());
        }
      })
      // initiates new pizzaOrder
      let newPizza = new PizzaOrder(selectedSize, toppings);
      // adds order to pizzas object
      pizzas.addPizzaOrder(newPizza);
      // add price to pizzaOrder
      newPizza.addPrice();
      $('.orderPreview').html('');
      // lines 101 to 104 below refresh values after added to cart 
      $('#selectSize').val('select');
      $('input').each(function() {
        $(this).prop('checked', false);
      })
      for (let i = 1; i <= pizzas.currentId; i++) {
        if (pizzas.pizzaOrder[i] === undefined) {
          continue;
        }
        let displaySize = pizzas.pizzaOrder[i].size;
        let displayToppings = pizzas.pizzaOrder[i].toppings;
        let displayPrice = pizzas.pizzaOrder[i].price;
        let toppingsStr = displayToppings.join('<br>');
        let htmlstr = `<div class='${i}'>
        <p><h6>Order - <button class='delete btn btn-danger' id='${i}'>delete</button></h6></p>
        <p class='sizeP'><b>Size</b>: <span class='floatRight'>${displaySize}</span></p>
        <p class='toppingsP'><b>Toppings</b>: <span class='floatRight'>cheese<br>${toppingsStr}</span></p>
        <p class='priceP'><b>Price:</b> <span class='floatRight'>$${displayPrice.toFixed(2)}</span></p><br>
        </div>`

        $('.orderPreview').append(htmlstr);
        $('.orderPreview').show();;
      
        // reset price to 0 so doesn't keep looping when you add more pizzas
        pizzas.totalPrice = 0;
      }
      // displays totalPrice on UI
      for (let i = pizzas.currentId; i >= 1; i--) {
        if (pizzas.pizzaOrder[i] === undefined) {
          continue;
        }
        pizzas.totalPrice += pizzas.pizzaOrder[i].price;
      }
      $('.price').html(`$${pizzas.totalPrice.toFixed(2)}`);
    }
  })

  $('#pizza').submit(function(e) {
    e.preventDefault();
    let pizzaOrderEntries = Object.entries(pizzas.pizzaOrder);
    if (pizzaOrderEntries.length < 1) {
      alert('Please add an order to cart first! :)')
    } else {
      $('.left, .right, .rightLow').hide();
      for (let i = 1; i <= pizzas.currentId; i++) {
      if (pizzas.pizzaOrder[i] === undefined) {
        continue;
      }
      let displaySize = pizzas.pizzaOrder[i].size;
      let displayToppings = pizzas.pizzaOrder[i].toppings;
      let toppingsStr = displayToppings.join('<br>');
      let htmlstr = `
      <p><h2>- Pizza (1) -</h2></p>
      <div class='orderDetails'>
        <div class='row'>
          <div class='col-md-6'>
            <p>Size</p>
            <p>Toppings</p>
          </div>
          <div class='col-md-6'>
            <p>${displaySize}</p>
            <p>cheese<br>${toppingsStr}</p>
          </div>
        </div>

      </div>`;
      $('.finalPrice').html(`$${pizzas.totalPrice.toFixed(2)}`);
      $('.receipt').append(htmlstr);
      $('.orderNumber').text(Math.floor(Math.random() * 10000));
      }
      $('.submitted').show();
    }
  
  })
})