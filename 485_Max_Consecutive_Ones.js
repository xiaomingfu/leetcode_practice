var findMaxConsecutiveOnes = function (nums) {
  let cnt = 0;
  let arr = [];
  let rst = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      cnt++;
    } else {
      arr.push(cnt);
      cnt = 0;
    }
  }
  arr.push(cnt);
  let i = 0;
  for (var j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      continue;
    } else {
      i = j;
    }
  }
  return arr[i];
};
