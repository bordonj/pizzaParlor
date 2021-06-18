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

This is a web application where a user can choose one or more individual toppings (cheese, pizza, artichoke, anchovy, etc.) and a size to order a pizza and see the final cost.

## Setup/Installation Requirements

* On the repository linked to "https://github.com/bordonj/pizzaParlor" - click the green button "Code" and clone the repository onto your local desktop. You can do so by typing this in your terminal (_make sure you're in your Desktop directory_!)
```
git clone https://github.com/bordonj/pizzaParlor.git
```
* On your desktop, there should now be a directory labeled "pizzaParlor"
* Click the folder "pizzaParlor" on your Desktop
* To open the HTML file, and view the website, click on the file 'index.html'
* This should open up the website in a browser
* Enter name a pizza order to see the price!


## Specifications:

<!-- ### Describe: PizzaOrder()
Test | Code|  Output |
| -- | -- | -- |
| It will create an object for the PizzaOrder| NaN | returns 'invalid' -->
```
Describe: Pizzas()
Test: "It should return an object that contains a key for pizzaOrder and a key for currentId set to 0"
Code: let pizzas1 = new Pizzas();
Expected Output: pizzas1 = {
  pizzaOrder: {},
  currentId: 0
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


