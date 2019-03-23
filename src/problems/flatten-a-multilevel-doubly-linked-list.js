/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
  // 判断直接 null 的情况
  if (!head) {
    return head;
  }
  // 返回最后一个节点
  function run(head) {
    let p = head;
    let next = null;
    while (1) {
      next = p.next;
      if (p.child) {
        const last = run(p.child);
        p.next = p.child;
        p.child.prev = p;
        p.child = null;
        last.next = next
        if (next) {
          next.prev = last;
        } else {
          return last;
        }
      }
      if (next) {
        p = next;
      } else {
        return p;
      }
    }
  }
  run(head);
  return head;
};


/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    // 判断直接 null 的情况
    if (!head) {
      return head;
    }
    // 返回最后一个节点
    function run(head) {
      let p = head;
      let next = null;
      do {
        next = p.next;
        if (p.child) {
          const last = run(p.child);
          p.next = p.child;
          p.child.prev = p;
          p.child = null;
          last.next = next;
          if (next) {
            next.prev = last;
          }
        }
        if (next) {
          p = next;
        } else {
          break;
        }
      } while (next);
      return p;
    }
    run(head);
    return head;
  };