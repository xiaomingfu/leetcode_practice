var reverse = function (x) {
  const sign = x < 0 ? -1 : 1;
  x = Math.abs(x);
  let res = 0;
  while (x > 0) {
    res = res * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  res = res * sign;
  if (res < -0x80000000 || res > 0x7fffffff) {
    return 0;
  }
  return res;
};
