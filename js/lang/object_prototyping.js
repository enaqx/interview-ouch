/*
 * Question: Describe object prototyping in JavaScript.
 */

var util = require('util');

/* Lets have some number variable. */
var num = 3;

/* It's type is number. */
console.log(typeof num); // --> number

/* But it's prototype is object. So actually num is object. */
console.log(typeof num.__proto__); // --> object

/* This prototype is built-in Number object. */
console.log(num.__proto__); // --> Number

/* We can add new methods to prototype. */
Number.prototype.square = function() {
  var value = this.valueOf();
  return value * value;
}

/* And apply this method on our number and chain them */
console.log(num.square()); // -> 9
console.log(num.square().square()); // --> 81

/* Same on literals */
console.log((4).square()); // --> 16
console.log((4).square().square()); // --> 256
