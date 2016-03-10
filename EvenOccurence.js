/*Find the first item that occurs an even number of times in
an array. Remember to handle multiple even-occurrence items
and return the first one. Return null if there are no
even-occurrence items.
*/

function evenOccurrence (arr) {
  var result;
  var max = 0;
  var count =0;
  for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr.length; j++) {
      if(arr[j] === arr[i]) {
        count++;
      }
    }
    if(count % 2 === 0) {
      return arr[i];
    }
    count = 0;
  }
  return null;
}
