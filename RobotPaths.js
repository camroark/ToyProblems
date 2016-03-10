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
