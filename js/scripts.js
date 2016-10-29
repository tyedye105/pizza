function Pizza(size, sauce, cheese , toppings, price, pie) {
   this.size = size;
   this.sauce = sauce;
   this.cheese = cheese;
   this.toppings = toppings;
   this.price = 0;
   this.pie = [];
 }
 Pizza.prototype.sizeUp = function () {
   if (this.size === "small") {
     this.pie.push(4.99);
  } else if (this.size === "medium") {
    this.pie.push(5.99);
   } else if (this.size === "large") {
  this.pie.push(6.99);
  };
};
Pizza.prototype.cheeseUp = function () {
  this.cheese.forEach(function(cheese) {
    if (cheese === "smoked cheddar") {
      return cheeseFee = 2.50
    } else if (cheese === "pepper jack" || "cheddar") {
      return cheeseFee =1.00
  } else if (cheese === "mozzerella"){
      return  cheeseFee =.50
    }
  })
  this.pie.push(cheeseFee);
};








// Determines base price by size
//  var pizzaPrice = function() {
//   if (this.size === "small") {
//     this.price =+ 4.99;
//   } else if (pizza.size === "medium") {
//     pizza.price =+ 5.99;
//   } else if (pizza.size === "large") {
//     pizza.price =+ 6.99
//     }
// }


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

    alert(zaOrder.cheese );

  zaOrder.sizeUp();
  zaOrder.cheeseUp();
  alert(zaOrder.pie);

  });
});
