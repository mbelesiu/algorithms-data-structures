// Given the head of a linked list, return the list after sorting it in ascending order.

// Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


const findMid = (head) => {
  let midPrev = null;
  let mid = null;
  while (head !== null && head.next !== null) {
    midPrev = midPrev === null ? head : midPrev.next;
    head = head.next.next;
  }
  mid = midPrev.next;
  midPrev.next = null;
  return mid;
};

const merge = (list1, list2) => {
  let dummy = new ListNode();
  let tail = dummy;
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
      tail = tail.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
      tail = tail.next;
    }
  }
  tail.next = list1 !== null ? list1 : list2;
  return dummy.next;
};

var sortList = function (head) {
  if (!head) {
    return head;
  }

  if (head.val === null || head.next === null) {
    return head;
  }
  const mid = findMid(head);
  const left = sortList(head);
  const right = sortList(mid);

  return merge(left, right);
};

// Answer: Use Merge Sort