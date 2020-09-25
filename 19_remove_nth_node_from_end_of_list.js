/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 **/
var removeNthFromEnd = function (head, n) {
  let len = 0;
  let cur = head;
  while (cur) {
    cur = cur.next;
    len++;
  }

  let dummy = new listNode();
  dummy.next = head;
  cur = dummy;
  for (let i = 0; i < len - n; i++) {
    cur = cur.next;
  }
  cur.next = cur.next.next;
  return dummy.next;
};
