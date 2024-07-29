/**
 * Primitives are assigned by value and NOT reference
 */

var a = 5;
var b = a; // b is assigned the value of a
a = 10; // a is reassigned to 10
console.log(b); // 5
