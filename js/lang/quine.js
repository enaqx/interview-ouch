/**
 * Question: JavaScript Quine which produces a copy of its own source code.
 */

Quine = function () {
  var str = arguments.callee.toString();
  Quine = console.log(str.substring(57, 65) + str +
    str.substring(35, 40) + str.substring(9, 11) + ';');
}.call();
