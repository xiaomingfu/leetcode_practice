// give a positive integer arr, pop two biggest int, get the devision of them, if the devision is bigger than 0
// append to the arr and until at most 1 int left

var lastStoneWeigth = function (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => a - b);
    let biggest = stones.pop();
    let secondBiggest = stones.pop();
    if (biggest > secondBiggest) {
      let left = biggest - secondBiggest;
      stones.push(left);
    }
  }
  return stones.length === 1 ? stones[0] : 0;
};
