var findNumbers = function (nums) {
  var result = 0;
  for (var i = 0; i < nums.length; i++) {
    var cnt = 0;
    while (nums[i] / 10 !== 0) {
      cnt++;
      nums[i] = (nums[i] - (nums[i] % 10)) / 10;
    }
    console.log(cnt);
    if (cnt % 2 === 0) {
      result++;
    }
  }
  return result;
};
