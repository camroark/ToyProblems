/*Balanced Parenthesis
Given a string, return true if it contains balanced parenthesis ().

Examples
Input	Output
string: "(x + y) - (4)"	          true
string: "(((10 ) ()) ((?)(:)))"	 true
string: "(50)("	                false
string: ""	                      true
*/


function isBalanced (string) {
  var count = 0;
  for(var i = 0; i < string.length; i++) {
    if(count < 0 ) {
      return false;
    }
    if(string[i] === '(') {
      count++;
    } else if (string[i] === ')') {
      count--;
    }
  }
  return count === 0 ? true : false;
}
