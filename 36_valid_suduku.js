var isValidSudoku = function (board) {
  function is_valid_at(i, j) {
    let v = board[i][j];
    if ((v = ".")) {
      return true;
    }
    for (let k = 0; k < 9; k++) {
      if (k !== i && board[k][j] === v) {
        return false;
      }
      if (k !== j && board[i][k] === v) {
        return false;
      }
    }
    for (let q = 0; q < 3; q++) {
      for (let p = 0; p < 3; p++) {
        let newi = Math.floor(i / 3) * 3 + q;
        let newj = Math.floor(j / 3) * 3 + p;
        if (newi !== i && newj !== j && board[newi][newj] === board[i][j]) {
          return false;
        }
      }
    }
    return true;
  }
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (is_valid_at(i, j)) {
        continue;
      } else {
        return false;
      }
    }
  }
  return true;
};

let a = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(a));
