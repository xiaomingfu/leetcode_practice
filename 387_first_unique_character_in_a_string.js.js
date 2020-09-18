var firstUniqChar = function (s) {
  let dic = {};
  for (let c of s) {
    dic[c] = (dic[c] || 0) + 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (dic[s[i]] === 1) {
      return i;
    }
  }
  return -1;
};
