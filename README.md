# _Pizza Parlor_

#### _Pizza Parlor - 06/18/21 - Code Review004_

#### By _**Jennifer Bordon**_

## Technologies Used

* _HTML_
* _CSS_ 
* _Bootstrap_
* _jQuery_
* _JavaScript_


## Description

This is a web application where a user can order a pizza, or multiples pizzas. They first have to select a size, and if wanted, can order a topping (or multiple toppings). A preview of their order is displayed on the lower right corner, and the total price of their order is displayed above the preview. After adding any orders to cart, the user may delete unwanted orders. To proceed with the order submission, the user will need to have added order to their cart first.. If the user is satisfied with their order, they can then 'submit' their order to view a 'receipt' showing their total order and final price.

## Setup/Installation Requirements

* On the repository linked to "https://github.com/bordonj/pizzaParlor" - click the green button "Code" and clone the repository onto your local desktop. You can do so by typing this in your terminal (_make sure you're in your Desktop directory_!)
```
git clone https://github.com/bordonj/pizzaParlor.git
```
* On your desktop, there should now be a directory labeled "pizzaParlor"
* Click the folder "pizzaParlor" on your Desktop
* To open the HTML file, and view the website, click on the file 'index.html'
* This should open up the website in a browser
* Enter a pizza order(s) to see the price!


## Specifications:

```
Describe: Pizzas()
Test: "It should return an object that contains a key for an empty pizzaOrder object, and a key for currentId and totalPrice set to 0"
Code: let pizzas1 = new Pizzas();
Expected Output: pizzas1 = {
  pizzaOrder: {},
  currentId: 0,
  totalPrice: 0
}

Describe: Pizzas.prototype.assignId()
Test: "It should declare an 'entries' variable holding the entries of Pizza.pizzaOrder. If the 'entries' variable is undefined, sets Pizza.currentId to 0. Otherwise, increments Pizza.currentId."
Code: pizzas1.assignId()
Expected Output: pizzas1 = {
  pizzaOrder: {},
  currentId: 1,
  totalPrice: 0
}

Describe: Pizzas.prototype.addPizzaOrder(pizzaOrder)
Test: "It should increment Pizzas.id and add the pizzaOrder to the Pizzas object under the Pizzas.pizzaOrder key (setting the pizzaOrder's own key to have a value of the incremented id)"
Code: pizzas1.addPizzaOrder(newPizza)
Expected Output: pizzas1 = {
  pizzaOrder: {
    1: newPizza {}
  },
  currentId: 1,
  totalPrice: 0
}

Describe: Pizzas.prototype.deleteOrder(id)
Test: "It should delete Pizzas.pizzaOrder[id]. Then if Pizza.currentId has a higher id value than the (id), sets Pizzas.currentId to the higher id value. "
Code: pizzas1.deleteOrder(2) //if pizza1 has 3 pizzaOrders// 
Expected Output: pizzas1 = {
  pizzaOrder: {
    1: newPizza {},
    3: newPizza {}
  },
  currentId: 3,
  totalPrice: 0
}

Describe: Pizzas.prototype.deleteOrder(id)
Test: "It should delete Pizzas.pizzaOrder[id]. Then if Pizza.currentId is not a higher value than (id),sets Pizza.currentId to the (id) value minus 1"
Code: pizzas1.deleteOrder(3) //if pizza1 has 3 pizzaOrders// 
Expected Output: pizzas1 = {
  pizzaOrder: {
    1: newPizza {},
    2: newPizza {}
  },
  currentId: 2,
  totalPrice: 0
}

Describe: PizzaOrder(size, toppings)
Test: "It should return an object that contains a key for topping, and a key for size"
Code: let newPizza = new PizzaOrder('large', ['cheese']);
Expected Output: newPizza = {
  size: 'large',
  toppings: ['cheese']
}

Describe: PizzaOrder.prototype.addPrice()
Test: "It should add a price key to PizzaOrder object that sets a price depending on the size and the amount of toppings.
Code: newPizza.addPrice();
Expected Output: newPizza = {
  price: 10,
  size: 'large',
  toppings: ['cheese'],
}
```
## Github Pages link

[Click here](https://bordonj.github.io/pizzaParlor) for the Github Pages link. 

Alternatively, you can type "https://bordonj.github.io/pizzaParlor/" in your web browser as well.

## Known Bugs

* No known bugs yet.
## License

Distributed under the MIT License. See LICENSE for more information.

## Contact Information

_jennifer.bordon@gmail.com_


