/*
Given a fixed length array arr of integers, 
duplicate each occurrence of zero, shifting the remaining elements to the right.
Note that elements beyond the length of the original array are not written.
Do the above modifications to the input array in place,
do not return anything from your function.
*/
var duplicateZeros = function (arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
      arr.pop();
      i++;
    }
  }
};
