/*Power Set
Return an array that contains the power set of a given string. The power set is
a set of all the possible subsets, including the empty set.

Make sure your code does the following:

All characters in a subset should be sorted alphabetically, and the array of
subsets should be sorted alphabetically.
Sets of the same characters are considered duplicates regardless of order and
 count only once, e.g. ‘ab’ and ‘ba’ are the same.
Duplicate characters in strings should be ignored; for example, ‘obama’ should
be evaluated as if it only contained one ‘a’. See the result below.
*/

var powerSet = function (string) {
  var str = [];
  for(var i = 0; i < string.length; i++) {
    if(str.indexOf(string[i]) === -1) {
      str.push(string[i]);
    }
  }
  var result = [];

  var recurse = function(main, sub) {
    if(main.length === 0 && sub.length === 0) {
      return;
    } else if (sub.length === 0) {
      if(result.indexOf(main) === -1){
        console.log(main);
        result.push(main.split('').sort().join(''));
      }
    } else {
      recurse(main + sub[0], sub.slice(1));
      recurse(main, sub.slice(1));
    }
  };
  recurse('', str, []);
  result.unshift('');
  return result.sort();
};
