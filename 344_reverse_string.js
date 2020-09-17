var reverseString = function (s) {
  let temp;
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    temp = s[i];
    s[i] = s[j];
    s[j] = temp;
  }
};
