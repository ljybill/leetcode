/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//   if (nums.length < 2) {
//     return nums.length;
//   }
//   let n = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] === n) {
//       nums.splice(i, 1);
//       i--;
//     } else {
//       n = nums[i];
//     }
//   }
//   return nums.length;
// };

var removeDuplicates = function(nums) {
  if (nums.length < 2) {
    return nums.length;
  }
  let i = 0;
  let j = i + 1;
  while (j < nums.length) {
    if (nums[i] === nums[j]) {
      j++;
    } else {
      nums[++i] = nums[j];
    }
  }
  return i + 1;
};

console.log(removeDuplicates([1, 1, 2]));
