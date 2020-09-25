var reverseList = function (head) {
  let cur = head;
  let ls = [];
  while (cur) {
    ls.push(cur.val);
    cur = cur.next;
  }

  for (let i = 0, j = ls.length - 1; i < j; i++, j--) {
    let temp = ls[i];
    ls[i] = ls[j];
    ls[j] = temp;
  }
  cur = head;
  for (let i = 0; i < ls.length; i++) {
    cur.val = ls[i];
    cur = cur.next;
  }
  return head;
};
