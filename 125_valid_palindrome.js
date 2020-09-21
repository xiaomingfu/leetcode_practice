var isPalindrome = function (s) {
  let i = 0,
    j = s.length - 1;

  const isalnum = function (c) {
    const n = c.charCodeAt(0);
    return (
      (n >= "0".charCodeAt(0) && n <= "9".charCodeAt(0)) ||
      (n >= "a".charCodeAt(0) && n <= "z".charCodeAt(0)) ||
      (n >= "A".charCodeAt(0) && n <= "Z".charCodeAt(0))
    );
  };

  while (i < j) {
    if (!isalnum(s[i])) {
      i++;
    } else if (!isalnum(s[j])) {
      j--;
    } else if (s[i].toLowerCase() !== s[j].toLowerCase()) {
      return false;
    } else {
      i++;
      j--;
    }
  }
  return true;
};
