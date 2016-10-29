function Pizza(size, cheese, sauce, toppings, price, pie) {
   this.size = size;
   this.cheese = cheese;
   this.sauce = sauce;
   this.toppings = toppings;
   this.price = 0;
   this.pie = [];
 }
// Determines base price by size
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
    var orderToppings = [];
    $("input:checkbox[ name=p-Topping]:checked").each(function(){
      var topping = $(this).val();
      orderToppings.push(topping)
    })
    var orderCheeses = [];
    $("input:checkbox[ name=p-Cheese]:checked").each(function(){
      var cheese = $(this).val();
      orderCheeses.push(cheese);
    })

    var zaOrder = new Pizza($("input:checkbox[ name=p-Size]:checked").val(), $("input:checkbox[ name=p-Sauce]:checked").val(),orderCheeses ,orderToppings, 0,[])
    alert(zaOrder.size +" " +zaOrder.cheese+ " "+zaOrder.sauce+" "+zaOrder.toppings+ " "+ zaOrder.price);

  });
});
