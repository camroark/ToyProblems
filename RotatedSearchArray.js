/*If you have a sorted array, a rotated version of that array is the sorted
 array rotated some number of times left or right. For example, a rotated version
 of [0, 1, 2, 3, 4] is [3, 4, 0, 1, 2] (rotated right twice). Each rotated array
 has a single pivot point where the groups of values to the left and right are
 sorted, but the sorting does not continue accross the pivot.

 Given a rotated, sorted array, your task is to efficiently find the index of an
 element within that array. Your time complexity goal is O( log(n) ), where ‘n’
 is the number of elements in the array. For simplicity, you can assume that
 there are no duplicate elements in the array.
*/

function rotatedArraySearch (rotated, target) {
  var left = 0;
  var right = rotated.length-1;
  var found = -1;
  while((right-left) >= -1) {
    var middle = Math.floor((right-left)/2)+left;
    var pivotLeft = Math.abs((rotated[middle]-rotated[right]));
    var pivotRight = Math.abs((rotated[middle] - rotated[left]));
    if(rotated[middle] === target) {
      found = middle;
      return found;
    } else if (target > rotated[middle] && target <= rotated[right]) {
      left = middle + 1;
    } else if (target < rotated[middle] && target >= rotated[left]) {
      right = middle - 1;
   } else if (pivotLeft > pivotRight) {
      left = middle + 1;
   } else if (pivotLeft < pivotRight) {
      right = middle - 1;
    } else {
      return found;
    }
  }
  return found;
}
