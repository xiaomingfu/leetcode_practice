var isPalindrome = function (s) {
  if (s.length === 0) {
    return true;
  }
  let reg = /[A-Z]+/;
  let res = s.match(reg);
  console.log(res);
  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {}
};
