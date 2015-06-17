/**
 * Question: Capitalize fist letter in name.
 */


String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};

console.log('JANE'.capitalize());
console.log('john'.capitalize());
