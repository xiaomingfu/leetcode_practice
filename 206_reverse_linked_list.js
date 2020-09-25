var reverseList = function (head) {
  let cur = head;
  let arr = [];
  while (cur) {
    arr.push(cur.val);
    cur = cur.next;
  }

  cur = head;
  for (let i = 0; i < arr.length; i++) {
    cur.val = arr[arr.length - 1 - i];
    cur = cur.next;
  }
  return head;
};
