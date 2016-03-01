/*Island Count
Given a string representation of a 2d map, return the number of islands in the
map. Land spaces are denoted by a zero, while water is denoted by a dot. Two
land spaces are considered connected if they are adjacent (but not diagonal).

(!!!) NOTICE: Newline characters in the inputs have been replaced with <br />
tags to make the value easier to read. In other words, when you see a break,
it's actually a '\n' character. Check your console when submitting to see the
input for yourself. */
function countIslands (mapStr) {
  var result = 0;
  var ans = mapStr.split('\n');
  for(var i = 0; i < ans.length; i++) {
    ans[i] = ans[i].split('');
  }
  var rowCount = ans.length;
  var rowLength = (mapStr.length-rowCount)/(rowCount+1);
  var flood = function (r, c) {
    ans[r][c] = '.';
    if(ans[r-1] !== undefined && ans[r-1][c] === '0'){
      flood(r-1, c);
    }
    if (ans[r+1] !== undefined && ans[r+1][c] === '0') {
      flood(r+1, c);
    }
    if (ans[r][c-1] !== undefined && ans[r][c-1] === '0') {
      flood(r, c-1);
    }
    if (ans[r][c+1] !== undefined && ans[r][c+1] === '0') {
      flood(r, c+1);
    }
  };
  for(var row = 0; row < ans.length; row++) {
    for(var col = 0; col < ans[row].length; col++) {
      if(ans[row][col] === '0') {
        result++;
        flood(row, col);
      }
    }
  }

  return result;
}
