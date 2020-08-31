/* 
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.
*/

var findDisappearedNumbers = function (nums) {
  let res = [];
  for (let e of nums) {
    e = Math.abs(e) - 1;
    nums[e] = Math.abs(nums[e]) * -1;
  }
  console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      res.push(i + 1);
    }
  }
  return res;
};

console.log(findDisappearedNumbers([1, 1, 2, 2, 4, 4]));
