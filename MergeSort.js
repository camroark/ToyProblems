/*Implement a function that sorts an array of numbers using the “mergesort”
algorithm.

Mergesort uses a divide-and-conquer strategy. It begins by treating the input
list of length N as a set of N “sublists” of length 1, which are considered to
be sorted. Adjacent sublists are then “merged” into sorted sublists of length 2,
 which are merged into sorted sublists of length 4, and so on, until only a
 single sorted list remains. (Note, if N is odd, an extra sublist of length 1
 will be left after the first merge, and so on.)

This can be implemented using either a recursive (“top-down”) or an iterative (“bottom-up”) approach.
*/
function mergeSort(arr){
  if(arr.length < 2) {
    return arr;
  }
  var mid = Math.floor(arr.length/2);
  var arr1 = mergeSort(arr.slice(0, mid));
  var arr2 = mergeSort(arr.slice(mid));

  return mergeHelper(arr1, arr2);
}

function mergeHelper(a, b) {
  var results = [];
  while(a.length > 0 && b.length > 0) {
    if(a[0] < b[0]) {
      results.push(a[0]);
      a.shift();
    } else {
      results.push(b[0]);
      b.shift();
    }
  }
  if(a.length) {
    return results.concat(a);
  } else {
    return results.concat(b);
  }
}
