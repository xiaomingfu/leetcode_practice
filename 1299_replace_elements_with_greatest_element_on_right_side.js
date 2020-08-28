/* 
Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.
*/

var replaceElements = function (arr) {
  let maxNum = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    let temp = arr[i];
    arr[i] = maxNum;
    maxNum = Math.max(maxNum, temp);
  }
  return arr;
};

console.log(replaceElements([1, 2, 4, 5, 7, 4, 3, 2]));
