/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  if (nums.length === 0) {
    return 0;
  }
  nums.sort((a, b) => {
    return a === val ? 1 : -1;
  });
  const idx = nums.indexOf(val)
  return idx === -1 ? nums.length : idx
};

let a = [0, 1, 2, 2, 3, 0, 4, 2];
console.log(removeElement(a, 2));
console.log(a);
