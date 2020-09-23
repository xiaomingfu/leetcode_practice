var countAndSay = function (n) {
  function helper(s) {
    let arr = [1, s[0]];
    for (let i = 1; i < s.length; i++) {
      if (s[i] === arr[arr.length - 1]) {
        arr[arr.length - 2]++;
      } else {
        arr.push(1);
        arr.push(s[i]);
      }
    }
    return arr.join("");
  }
  let s = "1";
  for (let i = 1; i < n; i++) {
    s = helper(s);
  }
  return s;
};
