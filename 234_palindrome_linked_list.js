/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let res = [];
  while (head) {
    res.push(head.val);
    head = head.next;
  }
  for (let i = 0, j = res.length - 1; i < j; i++, j--) {
    if (res[i] !== res[j]) {
      return false;
    }
  }
  return true;
};

// dummyhead solution
var isPalindrome = function (head) {
  // get length of list
  let cur = head;
  let len = 0;
  while (cur) {
    cur = cur.next;
    len++;
  }

  // reverse first half
  let dummy = new ListNode(0);
  let node;
  let temp;
  let mid = Math.floor(len / 2);
  cur = head;
  while (mid > 0) {
    node = cur;
    cur = cur.next;
    temp = dummy.next;
    dummy.next = node;
    node.next = temp;
    mid--;
  }
  if (len % 2 !== 0) {
    cur = cur.next;
  }
  while (cur) {
    if (node.val !== cur.val) {
      return false;
    }
    node = node.next;
    cur = cur.next;
  }
  return true;
};
