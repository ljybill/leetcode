/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const symbol = x >= 0;
  if (!symbol) {
    x = -1 * x;
  }
  let result = Number(
    x
      .toString()
      .split("")
      .reverse()
      .join("")
  );
  if (!symbol) {
    result = result * -1;
  }
  if (-2147483648 > result || 2147483647 < result) {
    return 0;
  }
  return result;
};

console.log(reverse(1534236469));
