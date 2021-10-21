/*
Given two integer arrays pushed and popped each with distinct values,
 return true if this could have been the result of a sequence of push and pop operations on an initially empty stack, 
 or false otherwise.
*/
var validateStackSequences = function (pushed, popped) {
  let res = [];
  let j = 0;
  for (let i of pushed) {
    res.push(i);
    while (
      res.length > 0 &&
      j < popped.length &&
      popped[j] === res[res.length - 1]
    ) {
      res.pop();
      j++;
    }
  }
  return j == popped.length;
};
