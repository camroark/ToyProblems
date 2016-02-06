/*
Implement the functions compose and pipe

Compose
Compose should return a function that is the composition of a list of functions
of arbitrary length. Each function is called on the return value of the function
that follows.
You can think of compose as moving right to left through its arguments.

Pipe:
Pipe composes a series of functions and returns the resulting function. Each
function is called on the return value of the preceding function.

You can think of pipe as moving left to right through its arguments. */

var compose = function(){
  var funcs = Array.prototype.slice.call(arguments);
  return function (arg) {
    return funcs.reduceRight(function (prev, curr) {
      return curr(prev);;
   }, arg);
  };
};

var pipe = function(){
  var funcs = Array.prototype.slice.call(arguments);
  return function (arg) {
    return funcs.reduce(function (prev, curr) {
      return curr(prev);
   }, arg);
  };
};
