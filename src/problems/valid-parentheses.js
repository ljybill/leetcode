/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 !== 0) {
      return false;
    }
    const leftSymbol = {
      "{": 1,
      "(": 1,
      "[": 1
    };
    const symbolMap = {
      "(": ")",
      "{": "}",
      "[": "]"
    };
    const stack = [];
    for (str of s) {
      if (str === '{' || str === '(' || str === '[') {
        stack.push(str);
      } else {
        const last = stack.pop();
        if (!last) {
          return false;
        }
        if (symbolMap[last] !== str) {
          return false;
        }
      }
    }
    if (stack.length !== 0) {
      return false;
    }
    return true;
  };