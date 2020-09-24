var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }
  for (let j = 0; ; j++) {
    for (let s of strs) {
      if (j >= s.length || s[j] !== strs[0][j]) {
        return s.slice(0, j);
      }
    }
  }
};
