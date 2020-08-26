/* Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M). */

var checkIfExist = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        if (arr[i] === arr[j] * 2) {
          return true;
        }
      }
    }
  }
  return false;
};

console.log(checkIfExist([1, 3, 6, 5]));
