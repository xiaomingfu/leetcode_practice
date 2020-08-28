/* 
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
*/

var moveZeroes = function (nums) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[i] !== 0) {
      i++;
    } else {
      if (nums[j] !== 0) {
        nums[i] = nums[j];
        nums[j] = 0;
        i++;
      }
    }
  }
  return nums;
};

console.log(moveZeroes([1, 0, 9, 8, 0, 2, 1]));
