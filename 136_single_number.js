// Hashmap time complexity O(n), space complexity O(n)
var singleNumber = function (nums) {
  let dic = {};
  for (let n of nums) {
    dic[n] = (dic[n] || 0) + 1;
  }
  for (let k in dic) {
    if (dic[k] === 1) {
      return k;
    }
  }
};

// sorted first
var singleNumber = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let len = nums.length;
  if (nums[0] !== nums[1]) {
    return nums[0];
  }
  if (nums[len - 1] !== nums[len - 2]) {
    return nums[len - 1];
  }
  for (let i = 1; i < len - 1; i++) {
    if (nums[i] !== nums[i + 1] && nums[i] !== nums[i - 1]) {
      return nums[i];
    }
  }
};

//
var singleNumber = function (nums) {
  let res = 0;
  for (let n of nums) {
    res ^= n;
  }
  return res;
};
