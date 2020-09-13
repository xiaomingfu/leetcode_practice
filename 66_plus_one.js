/* 
Given a non-empty array of digits representing a non-negative integer, increment one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.
*/

var plusOne = function (digits) {
  let lastIdx = digits.length - 1;
  let res = [];
  let carry = 0;
  let digit = 0;
  digits[lastIdx] = digits[lastIdx] + 1;
  for (let i = lastIdx; i >= 0; i--) {
    digits[i] = digits[i] + carry;
    digit = digits[i] % 10;
    carry = digits[i] / 10;
    res.push(digit);
  }
  if (carry !== 0) {
    res.push(carry);
  }
  res.reverse();
};
