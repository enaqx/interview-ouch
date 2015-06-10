/**
 * Question: Show some examples of using reduce on list.
 */


/* Sum elements of list. */
console.log([0, 1, 2, 3, 4, 5].reduce(function(a, b) {
  return a + b;
}));

/* Reverse list. */
console.log([0, 1, 2, 3, 4, 5].reduce(function(a, b) {
  return [b].concat(a);
}, []));


/* Flatten an array of arrays. */
console.log([[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
  return a.concat(b);
}));
