 var pizza = {
   size:"",
   cheese:"",
   sauce:"",
   toppings:"",
   price:0,
   pie:[]
 }

pizza.size = prompt("Please select a size");

pizza.cheese = prompt("please select your cheeses")

pizza.sauce = prompt("Please select a sauce")

pizza.toppings = prompt("pease select your toppings")

pizza.pie.push(pizza.size, pizza.cheese);

alert(pizza.pie);
