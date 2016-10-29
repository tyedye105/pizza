
#Plentiful Pizza

####A webpage that creates pizza objects from information taken from checkboxes! 10/29/16

#### By _Marty Kovach_

## Description

_This website takes the user inputs for pizza size, sauce, cheeses, and toppings, and then using a pizza object, and several prototypes gives the user a price for their pizza._

###Specifications in 'plain English'

User can select size of pizza:
  Example Input:  "small" is checked
  Example Output: pizza size = "small"

User can select the sauce for the pizza:
  Example Input:  "red sauce" is checked
  Example Output: pizza sauce = "red sauce"

User can select cheese for the pizza:
  Example Input:  "mozzerella" is checked
  Example Output: pizza cheeses = "mozzerella"

User can select more than one cheeses for the pizza:
  Example Input:  "mozzerella" and "smoked cheddar" are checked
  Example Output: pizza cheeses = "mozzerella", "smoked cheddar"

User can select a topping for the pizza:
  Example Input:  "pepperoni" is checked
  Example Output: pizza topping = "pepperoni"

User can select as many topping for the pizza as they want:
  Example Input:  "pepperoni", "sausage", and "diced tomatoes" are checked
  Example Output: pizza toppings  =  "pepperoni", "sausage", and "diced tomatoes"

When user submits information a new pizza object is created:
  Example Input: pizza order small, red sauce, mozzerella, pepperoni
  Example Output: New Pizza {
    size:small;
    sauce:red sauce;
    cheese:mozzerella
    toppings:pepperoni
  }
Using the pizza object, the price of the pizza is calculated with several prototypes, and then is displayed for the user:
  Example input: pizza.pizzaPrice()

  Example Output: Your Pizza will be: $6.49
## Setup/Installation Requirements

* Clone this repository
* host it!  
    Or
* Click the link for the live page on github pages!
https://tyedye105.github.io/pingpong


## Known Bugs

selecting multiple sizes, or sauces will cheat the system. DON'T cheat.

## Support and contact details

_For problems, or inquiries please contact me at tyedye105@yahoo.com_

## Technologies Used
HTML, Bootstrap, CSS, images are copyright to their respective owners

### License

*MIT*

Copyright (c) 2016 **_Marty Kovach_**
