var a = 5;
var b = 5;
var theNumbersMatch

if ( a == b ) {
    theNumbersMatch = true;
} else {
    theNumbersMatch = false;
}

console.log("The numbers match: " + theNumbersMatch);
// Identical ===

var a = 5;
var b = "5";
var theNumbersMatch

if ( a === b ) {
    theNumbersMatch = true;
} else {
    theNumbersMatch = false;
}

console.log("The numbers match: " + theNumbersMatch);

// != not equal (bang)

if(a == false) {}; // longhand
if(a != true) {}; // Reverse psycology
if(!a) {}; // Shorthand. Literally "NOT a".


