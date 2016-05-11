/*
Given an array of numbers, calculate the greatest contiguous sum of numbers in
it. A single array item will count as a contiguous sum.

Examples:
//sumArray([-3,-2,-5,-6,-7]));   //-2
//sumArray([1,2,3]));            //6
//sumArray([-5,-5,-5,2,3]));     //5
//sumArray([4,-1,5]));           //8
//sumArray([10,-11,11]));        //11
//sumArray([1,2,3,-6,4,5,6]));   //15
*/ 
let sumArray = (array) => {
  let max = array[0];
  let arrayLength = array.length;
  for (let value of array) {
    let index = array.indexOf(value);
    let count = array.indexOf(value);
    do {
      let sum = array.slice(index, count+1).reduce((a, b) => a + b, 0);
      // console.log(sum);
      max = max < sum ? sum : max;
      count++;
    } while (count < arrayLength);
  }
  return max;
};
