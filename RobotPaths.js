/*
A robot located at the top left corner of an n x n
grid is trying to reach the bottom right corner.
The robot can move either up, down, left, or right,
 but cannot visit the same spot twice. How many possible
 unique paths are there to the bottom right corner?

Make your solution work for a grid of any size.
*/

function robotPaths (n) {
  var solutions = 0;
  var board = makeBoard(n);
  function recurse(row, col){
    if(row === n - 1 && col === n - 1){
      solutions++;
      return;
    }
    if(row < 0 || col < 0 || row >= n || col >= n || board.hasBeenVisited(row, col)) {
      return;
    }
    board.togglePiece(row, col);
    recurse(row, col - 1);
    recurse(row, col + 1);
    recurse(row - 1, col);
    recurse(row + 1, col);
    board.togglePiece(row, col);
  }

  recurse(0, 0);
  return solutions;
}
