/**
 * Question: Implement map method using function expression.
 */


/* While the function declaration above is syntactically a statement,
 * functions can also be created by a function expression.
 * Such a function can be anonymous. */
function map(func, array) {
  var result = [];
  for (var i = 0; i < array.length; i++)
    result[i] = func(array[i]);
  return result;
}

console.log(map(function(x) { return x * x }, [2, 3, 4, 5]));
