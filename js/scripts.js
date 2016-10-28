 var pizza = {
   size:"",
   cheese:"",
   sauce:"",
   toppings:"",
   price:0,
   pie:[]
 }

 var pizzaPrice = function() {
  if (pizza.size === "small") {
    pizza.price =+ 4.99;
  } else if (pizza.size === "medium") {
    pizza.price =+ 5.99;
  } else if (pizza.size === "large") {
    pizza.price =+ 6.99
    }


}



// pizza.size = prompt("Please select a size");
//
// pizza.cheese = prompt("please select your cheeses")
//
// pizza.sauce = prompt("Please select a sauce")
//
// pizza.toppings = prompt("pease select your toppings")
//
// pizza.pie.push(pizza.size, pizza.cheese);
//
// pizzaPrice(pizza.pie);
//
// alert(pizza.price);
$(document).ready(function() {
  $("form#pizza-choice").submit(function(event){
    event.preventDefault();
    pizza.size = $("input:checkbox[ name=p-Size]:checked").val();
    alert(pizza.size);
    pizzaPrice(pizza.size);
    alert(pizza.price);

  });
});
