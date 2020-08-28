/* Given an array A of integers, return true if and only if it is a valid mountain array. */

// first solution
/* var validMountainArray = function (A) {
  let maxNum = Math.max(...A);
  let maxIdx = A.indexOf(maxNum);
  if (A.length < 3 || maxIdx === 0 || maxIdx === A.length - 1) {
    return false;
  }
  for (let i = maxIdx; i > 0; i--) {
    if (A[i] > A[i - 1]) {
      continue;
    } else {
      return false;
    }
  }
  for (let j = maxIdx; j < A.length - 1; j++) {
    if (A[j] > A[j + 1]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}; */

// second solution

var validMountainArray = function (A) {
  let i = 0;
  let j = A.length - 1;

  if (A.length < 3) {
    return false;
  }
  if (i < A.length - 1 && j > 0) {
    while (A[i] < A[i + 1]) {
      i++;
    }
    while (A[j] < A[j - 1]) {
      j--;
    }
    if (i === j && i !== A.length - 1 && j !== 0) {
      return true;
    }
  }
  return false;
};

console.log(validMountainArray([2, 1]));
console.log(validMountainArray([3, 5, 5]));
console.log(validMountainArray([0, 3, 2, 1]));
