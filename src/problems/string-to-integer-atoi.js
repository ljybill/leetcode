/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const num = parseInt(str);
  let result = isNaN(num) ? 0 : num;
  if (result < -2147483648) {
    result = -2147483648;
  } else if (result > 2147483647) {
    result = 2147483647;
  }
  return result;
};

console.log(myAtoi("-91283472332"));
