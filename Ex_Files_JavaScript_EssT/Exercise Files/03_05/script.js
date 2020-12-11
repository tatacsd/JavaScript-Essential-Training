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

// ADVANCED CONDITION

//And = both need to be true to whole be true
if(a && b) {};
//OR = one, another or both.
if(a || b) {};

//XOR -> does not exist in Js need to be created
//If a equals b AND c equals d:
if(a == b && c == d) {}
//If a equals b OR c equals d (or both is true):
if(a == b || c == d) {}
//If a equals b XOR c equals d (NOT BOTH CAN BE TRUE):
if((a == b || c == d) && ((a == b) != (c == d))) {}
// "either a or b but not a and b"


// Ternary Operator
// condition ?(if is true) statement :(else) statement
a == b ? console.log("Match") : console.log("No match"); //Shorthand

// longhand
if (a == b){
    console.log("Match");
} else {
    console.log("No match");
}



