/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const isPalindrome = function(str) {
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
      if (str[i] !== str[j]) {
        return false;
      }
    }
    return true;
  };

  let currentLength = s.length;
  let result = "";
  let startIndex = 0;

  while (currentLength <= s.length - startIndex) {
    const sub = s.substr(startIndex, currentLength);
    if (isPalindrome(sub) && sub.length > result.length) {
      result = sub;
      startIndex++
      currentLength = s.length - startIndex
      if(result.length >= currentLength){
        return result
      }
    } else {
      currentLength--;
      if (currentLength === -1 || currentLength <= result.length) {
        startIndex++;
        currentLength = s.length - startIndex;
        if (result.length >= currentLength) {
          return result;
        }
      }
    }
  }
  return result;
};

console.log(longestPalindrome("babadda"));
// console.log(longestPalindrome("cbbd"));
// console.log(longestPalindrome("abadd"));
