var reverseList = function (head) {
  let dummy = new ListNode(0);
  while (head) {
    let node = head;
    head = head.next;

    let temp = dummy.next;
    dummy.next = node;
    node.next = temp;
  }
  return dummy.next;
};
