/* 
Given an array, rotate the array to the right by k steps, where k is non-negative.
*/
var rotate = function (nums, k) {
  if (k > nums.length) {
    return;
  }
  let j = nums.length - 1;
  while (k > 0) {
    let temp = nums[j];
    for (let i = nums.length - 1; i > 0; i--) {
      nums[i] = nums[i - 1];
    }
    nums[0] = temp;
    k--;
  }
  return nums;
};
