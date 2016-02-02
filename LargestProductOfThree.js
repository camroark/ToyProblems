/*Largest Product of Three
Write a function that accepts an array of integers and returns the largest
product possible from three of those numbers.


function largestProductOfThree (array) {
  array.sort(function sortNumber(a,b){
   return a - b;
  });

  var largestThree = array.slice(-3);
  var largestTwoNeg = array.slice(0, 2);
  largestTwoNeg.push(array.slice(-1));

  var set1 = largestThree.reduce(function(a, b) {
    return a*b;
  },1);
  var set2 = largestNeg.reduce(function(a, b) {
    return a*b;
  },1);
  return set1 > set2 ? set1 : set2;
}
