## Website Performance Optimization portfolio project

###Instructions

Scroll through the page to view a mesmermize assortment of randomly generated pizzas.

Adjust the slider to change the size of pizza to your liking.


###Optimizations Made

* Changed all querySelectorAll() to their respective getElementById or getElementsByClassName

* Created variable for accessing #pizzaSize element outside of changeSliderLabel switch statement

* Created array for accessing randomPizzaContainer class inside of changePizzaSizes function

* Changed return value of the sizeSwitcher to "dx + oldwidth" so that the changePizzaSizes 
function doen't have to take a redudant measurement

* Access determineDX variable outside the changePizzaSizes function loop, because each element of the array will all be the same size

* Removed redudant newWidth variable, and alter element style directly 

* Created pizzasDiv variable outside of the pizza generator loop, so the DOM is only accessed once

*  Reduced number of pizzas generated