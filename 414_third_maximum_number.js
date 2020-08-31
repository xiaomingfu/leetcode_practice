/* 
Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).
*/

var thirdMax = function (nums) {
  let a = -Infinity;
  let b = -Infinity;
  let c = -Infinity;

  if (nums.length < 3) {
    return Math.max(...nums);
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > a) {
      c = b;
      b = a;
      a = nums[i];
    } else if (nums[i] > b && a > nums[i]) {
      c = b;
      b = nums[i];
    } else if (nums[i] > c && b > nums[i]) {
      c = nums[i];
    }
  }
  if (c === -Infinity) {
    return a;
  } else {
    return c;
  }
};

console.log(thirdMax([2, 2, 1]));
console.log(thirdMax([2, 1, 1]));
console.log(thirdMax([2, 1]));
console.log(thirdMax([2, 2, 3, 1]));
