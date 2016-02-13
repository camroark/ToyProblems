/*Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run.
If there are two runs of equal length, return the first one. Return [0,0] for no runs.

Examples
Input	Output
string:
"abbbcc"	[ 1, 3 ]
string:
"aabbc"	[ 0, 1 ]
string:
""	[ 0, 0 ]
string:
"mississippi"	[ 2, 3 ]
string:
"abcdefgh"	[ 0, 0 ] */

function longestRun (string) {
  //Init 2D array
  var result = [[]];
  var empty = [0,0];
  if(string.length === 0) {
    return empty;
  }
  //Format: ['char', 'count', 'start', 'end'];
  for(var i = 0; i < string.length; i++) {
    var l = result.length-1;
    if(result[l][0] === string[i]) {
      result[l][1]++;
      result[l][3] = i;
    } else {
      result.push([string[i], 1, i]);
    }
  }
  var temp = result[0];
  for(var v = 1; v < result.length; v++) {
    temp = result[v][1] > temp[1] ? result[v] : temp;
  }
  return temp[3] === undefined ? empty : [temp[2], temp[3]];
}
