/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1 && !l2) {
    return null;
  }
  let p1 = l1;
  let p2 = l2;
  let result = {};
  let pr = result;
  while (p1 !== null || p2 !== null) {
    if (p1 === null) {
      result.next = p2;
      break;
    }
    if (p2 === null) {
      result.next = p1;
      break;
    }
    if (p1.val < p2.val) {
      result.next = {
        val: p1.val,
        next: null
      };
      result = result.next;
      p1 = p1.next;
    } else if (p1.val > p2.val) {
      result.next = {
        val: p2.val,
        next: null
      };
      result = result.next;
      p2 = p2.next;
    } else {
      result.next = {
        val: p1.val,
        next: null
      };
      result = result.next;
      result.next = {
        val: p1.val,
        next: null
      };
      result = result.next;
      p1 = p1.next;
      p2 = p2.next;
    }
  }
  return pr.next || {};
};

console.dir(mergeTwoLists(null, null), {
  depth: 5
});
