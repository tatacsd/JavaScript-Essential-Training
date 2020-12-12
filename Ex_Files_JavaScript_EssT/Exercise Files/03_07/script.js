var pens;
// pens = ["red", "blue", "green"]
pens = new Array("red", "blue", "green", "orange");

var mixedBag = ["keys", 5, false, 568, "one more thing"];

//also array inside array -> multidimensional array

console.log(pens);
console.log(mixedBag);

//retrieve it
//start with index 0

var fourthItem = pens[3];
console.log(fourthItem);

//change the value of the array
pens[3] = "changed";

console.log(pens);