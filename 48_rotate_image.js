var rotate = function (matrix) {
  // rotate with diagonal from left to right
  let temp;
  let len = matrix.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      temp = matrix[j][i];
      matrix[j][i] = matrix[i][j];
      matrix[i][j] = temp;
    }
  }
  // rotate with vertical line
  for (let i = 0; i < len; i++) {
    for (let j = 0, k = len - 1; j < k; j++, k--) {
      temp = matrix[i][j];
      matrix[i][j] = matrix[i][k];
      matrix[i][k] = temp;
    }
  }
};
