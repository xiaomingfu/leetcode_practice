/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let dummy = new ListNode(0);
  let cur = dummy;

  while (l1 || l2) {
    let node;
    if (!l1 || (l2 && l2.val <= l1.val)) {
      node = l2;
      l2 = l2.next;
    } else {
      node = l1;
      l1 = l1.next;
    }
    cur.next = node;
    cur = cur.next;
  }
  return dummy.next;
};
