/*Given a sorted array of integers, find the index of a target value using a
binary search algorithm.

A binary search finds an item in a sorted array by repeatedly choosing a middle
value and dividing the search interval in half. The initial interval includes
the whole array. If the value of the target value is less than the middle value
of the interval, then the next interval will be the lower half of the current
interval. If the value of the target value is greater than the middle value,
 then the next interval will be the upper half. The search process repeats until
 the middle value is equal to the target value, or the search interval is empty.


Note:
Your function should return -1 for target values not in the array.

Do NOT use Array.prototype.indexOf in your solution. What would be the fun in
that?*/

function binarySearch (array, target) {
 var results = -1;
 function find(input, start, end){
   var midpoint = Math.round((end-start)/2 + start);
   if(end <= start) {
     if(input[start] === target) {
       results = midpoint;
     }
     return;
   }
   if(input[midpoint] === target){
      results = midpoint;
      return;
   }
   if(input[midpoint] > target){
     find(input, start, midpoint-1);
   }
   if(input[midpoint] < target){
     find(input, midpoint+1, end);
    }
  }
 find(array, 0, array.length-1);
 return results;
}
