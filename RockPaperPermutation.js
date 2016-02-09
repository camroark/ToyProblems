/*Rock Paper Permutation
Given a number of rounds n, return all the possible rock-paper-scissors play
possibilities for that number of rounds.

Examples
Input	Output
roundCount:
1	[ "r", "p", "s" ]
roundCount:
2	[ "rr", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss" ] */


function rockPaperPermutation (roundCount) {
  var rpsArray = ['r', 'p', 's'];
  var results  = [];

  if(roundCount === 0) {
    return [];
  }

  var recurse = function (currentArray) {
    currentArray = currentArray || [];
    if(currentArray.length === roundCount) {
      results.push(currentArray);
      return;
    } else {
    for (var i = 0; i < rpsArray.length; i++) {
      recurse(currentArray + rpsArray[i]);
      }
    }
  };
  recurse();
  return results;
};
