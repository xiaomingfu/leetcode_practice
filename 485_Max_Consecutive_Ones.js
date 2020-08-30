/* 
Given a binary array, find the maximum number of consecutive 1s in this array.
*/

var findMaxConsecutiveOnes = function (nums) {
  let cnt = 0;
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      cnt++;
    } else {
      if (cnt !== 0) {
        arr.push(cnt);
        cnt = 0;
      }
    }
  }
  arr.push(cnt);
  return Math.max(...arr);
};
