var strStr = function (s, t) {
  for (let i = 0; i <= s.length - t.length; i++) {
    let j = 0;
    while (j < t.length) {
      if (t[j] !== s[i + j]) {
        break;
      }
      j++;
    }
    if (j === t.length) {
      return i;
    }
  }
  return -1;
};
