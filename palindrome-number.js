/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const _isPalindrome = function(str) {
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
      if (str[i] !== str[j]) {
        return false;
      }
    }
    return true;
  };
  return _isPalindrome(x.toString());
};

console.log(isPalindrome(-121));
