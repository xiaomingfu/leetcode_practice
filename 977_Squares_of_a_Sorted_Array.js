var sortedSquares = function (A) {
  for (let i = 0; i < A.length; i++) {
    A[i] = Math.abs(A[i]);
  }
  let min = Math.min(...A);
  let minIdx = A.indexOf(min);
  let i = minIdx - 1;
  let j = minIdx + 1;
  let res = [min * min];
  while (i >= 0 || j <= A.length - 1) {
    if (A[i] >= A[j]) {
      res.push(A[j] * A[j]);
      j++;
    }
    if (A[i] <= A[j]) {
      res.push(A[i] * A[i]);
      i--;
    } else if (i < 0) {
      res.push(A[j] * A[j]);
      j++;
    } else if (j > A.length - 1) {
      res.push(A[i] * A[i]);
      i--;
    }
  }
  return res;
};
