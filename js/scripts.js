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

Pizza.prototype.sauceUp = function () {
  if (this.sauce ==="pesto") {
    this.pie.push(2.00)
  } else if ( this.sauce === "red sauce" || this.sauce === "barbeque") {
    this.pie.push(.75)
  } else if (this.sauce ==="white sauce") {
    this.pie.push(1.00)
  } else {
    this.pie.push(0)
  }
}

Pizza.prototype.topitUp = function() {
  var topFee = 0
  this.toppings.forEach(function(topping) {
    if (topping === "pepperoni" ){
      return  topFee +=.25
    } else if (topping === "sausage") {
      return topFee += .25
  } else if (topping === "spicy sausage") {
    return topFee += .75
  } else if (topping === "chicken") {
    return topFee += 1.00
  }  else if (topping === "bacon" ) {
    return topFee += 1.25
  } else if (topping === "mushrooms" ) {
    return topFee += .25
  } else if (topping === "black olives" ) {
    return topFee += .25
  } else if (topping === "diced tomatoes" ) {
    return topFee += .25
  } else if (topping === "roasted brussel sprouts" ) {
    return topFee += .50
  }  else if (topping === "anchovies" ) {
    return topFee += 1.00
  } else if (topping === "sardines" ) {
    return topFee += 1.00
  } else {
      return topFee += 0
    }
  })
  this.pie.push(topFee);
}

Pizza.prototype.pizzaPrice = function() {
  var zaCost = 0
  this.pie.forEach(function(pie){
return    zaCost += pie
  })
this.price = zaCost.toFixed(2);
}






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

    // alert(zaOrder.size+","+ zaOrder.sauce+","+zaOrder.cheese+","+ zaOrder.toppings );

  zaOrder.sizeUp();
  zaOrder.cheeseUp();
  zaOrder.sauceUp();
  zaOrder.topitUp();
  alert(zaOrder.pie);
  zaOrder.pizzaPrice();
  alert(zaOrder.price);
  });
});
