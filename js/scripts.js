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
} else {
  this.pie.push(0);
}
};
Pizza.prototype.cheeseUp = function () {
  var cheeseFee = 0;
  this.cheese.forEach(function(cheese) {
    if (cheese === "mozzerella"){
      return  cheeseFee += .50
    } else if (cheese === "pepper jack" || cheese === "cheddar") {
      return cheeseFee += .70
  }else if (cheese === "smoked cheddar") {
    return cheeseFee += 1.50
  } else {
    return cheeseFee += 0;
  }
  })
  this.pie.push(cheeseFee);
};

// Pizza.prototype.sauceUp = function () {
//   if (this.sauce ==="pesto") {
//     this.pie.push(2.00)
//   } else if (this.sauce === "white sauce" || this.sauce === "red sauce" || this.sauce === "barbeque") {
//     this.pie.push(.75)
//   } else {
//     this.pie.push(0)
//   }
// }

// Pizza.prototype.topitUp = function() {
//   this.toppings.forEach(function(meat) {
//     if (meat === "pepperoni" ){
//       return  topFee =.25
//     } else if (meat === "sausage") {
//       return topFee = .25
//   } else if (meat === "spicy sausage" || meat === "chicken") {
//     return topFee = .75
//   } else if (meat === "chicken") {
//     return topFee = 1.00
//   }  else if (meat === "bacon" ) {
//     return topFee = 1.25
//   }
//     else {
//       return topFee = 0
//     }
//   })
//   this.pie.push(topFee);
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

    alert(zaOrder.size+","+ zaOrder.sauce+","+zaOrder.cheese+","+ zaOrder.toppings );

  zaOrder.sizeUp();
  zaOrder.cheeseUp();
  // zaOrder.sauceUp();
  // zaOrder.topitUp();
  alert(zaOrder.pie);

  });
});
