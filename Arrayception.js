/* Given an array of arbitrarily nested arrays, return n,
where n is the deepest level that contains a non-array value.
*/

function arrayception (array) {
  var deepest = 0;
  var depth = 1;

  var inception = (arr) => {
    for(var i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])) {
        depth++;
        console.log('Leonardo: "I\'m going in!"')
        inception(arr[i]);
        console.log('Joseph: "Wake up Leo!"');
        depth--;
      } else if (depth > deepest) {
        deepest = depth;
      }
    }
  }

  inception(array);
  return deepest;
}
