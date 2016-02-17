/*Write a function that takes a number as its argument and returns a string that
represents that number’s simplified fraction. Whole numbers and mixed fractions
should be returned as improper fractions.

Examples
number: 0.5	"1/2"
number: 3	"3/1"
number: 2.5	"5/2"
number: 2.75	"11/4"
*/

function fractionConverter (number) {
  var numArr = number < 0 ? String(Math.abs(number)).split('.') : String(number).split('.');
  var neg    = number < 0 ? true : false;
  var left   = numArr[0];
  var right  = numArr[1] ? numArr[1] : 0;
  var l      = right ? right.length : 0;
  var d      = l === 0 ? 1 : Math.pow(10, l);
  var left   = ((Number(left)*d) + Number(right));
  var right  = d;

  for(var i = d; i >= 0; i--) {
    if(i === 0) {
      return neg ? (-1*left)+'/'+right : left+'/'+right;
    }
    if(left % i === 0 && right % i === 0) {
      left = (left/i);
      right = (right/i);
    }
  }
}
