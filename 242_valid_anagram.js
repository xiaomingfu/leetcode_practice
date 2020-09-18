var isAnagram = function (s, t) {
  const cnts = Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    cnts[s.charCodeAt(i) - 97]++;
  }
  for (let i = 0; i < t.length; i++) {
    cnts[t.charCodeAt(i) - 97]--;
  }
  for (let i = 0; i < 26; i++) {
    if (cnts[i] !== 0) {
      return false;
    }
  }
  return true;
};

// hash max
var isAnagram = function (s, t) {
  let dic = {};
  for (let c of s) {
    dic[c] = (dic[c] || 0) + 1;
  }
  for (let c of t) {
    dic[c] = (dic[c] || 0) - 1;
  }
  for (k in dic) {
    if (dic[k] !== 0) {
      return false;
    }
  }
  return true;
};
