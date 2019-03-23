let test = [
  { start: 2, end: 3 },
  { start: 1, end: 2 },
  { start: 2, end: 4 },
  { start: 0, end: 1 },
  { start: 5, end: 6 }
];
/**
 * @param {Array} arr
 */
function index(arr) {
  function _check(a, b) {
    return a.start <= b.end && a.end >= b.start;
  }
  function _merge(target, current) {
    target.start = Math.min(target.start, current.start);
    target.end = Math.max(target.end, current.end);
  }
  return arr.reduce((total, current) => {
    const target = total.find(item => _check(item, current));
    if (!target) {
      // can't found
      total.push(current);
    } else {
      _merge(target, current);
    }
    return total;
  }, []);
}

console.log(index(test));
