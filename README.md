## Website Performance Optimization portfolio project

###Instructions

To access the page click [here](http://akboada.github.io/mobile-portfolio/views/pizza.html)

Scroll through the page to view a mesmermize assortment of randomly generated pizzas.

Adjust the slider to change the size of pizza to your liking.


###Optimizations Made

* Changed all querySelectorAll() to their respective getElementById or getElementsByClassName

* Created array for accessing randomPizzaContainer class inside of changePizzaSizes function

* Removed reduntant determineDx function

* Accessed determineDX variable outside the changePizzaSizes function loop, because each element of the array will be the same size

* Removed redudant newWidth variable, and alter element style directly 

* Created pizzasDiv variable outside of the pizza generator loop, so the DOM is only accessed once

*  Reduced number of pizzas generated

* Changed updatePosition() function so that items[i].style to utilize the 'transform' property instead of
the 'left' property, to avoid triggering a relayout

* Created a seperate for loop for calcuting phase values