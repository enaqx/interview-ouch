/**
 * Question: Extract List from a string.
 */


/* Given the string with fruits list. */
var sentence = 'This is one sentence. This is a sentence with a list of items:'
  + 'cherries, oranges, apples, bananas. That was the list of items.';

/* Find borders of fruits list within given string. */
var startOfList = sentence.indexOf(':');
var endOfList = sentence.indexOf('.', startOfList + 1);

/* Extract list from given borders. */
var fruitString = sentence.substring(startOfList + 1, endOfList);
var fruits = fruitString.split(',');

fruits.forEach(function(element, index, array) {
  array[index] = element.trim();
});

console.log(fruits);
