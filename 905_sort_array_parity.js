/* 
Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition.
*/

// same as 283_move_zeros

var sortArrayByParity = function (A) {
  let i = 0;
  for (let j = 0; j < A.length; j++) {
    if (A[i] % 2 === 0) {
      i++;
    } else {
      if (A[j] % 2 === 0) {
        let temp = A[i];
        A[i] = A[j];
        A[j] = temp;
        i++;
      }
    }
  }
  return A;
};

console.log(sortArrayByParity([3, 4, 5, 6, 8, 4, 5, 1]));
