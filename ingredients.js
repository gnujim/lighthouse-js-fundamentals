var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

//while loop
var i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}
console.log();

//for loop
for (var m = 0; m < ingredients.length; m++) {
  console.log(ingredients[m]);
}
console.log();

//any loop that prints out contents backwards
for (var k = ingredients.length - 1; k >= 0; k--) {
  console.log(ingredients[k]);
}
