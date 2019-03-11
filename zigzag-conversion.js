/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) {
    return s;
  }
  const arrs = [];
  let status = "row"; // 'row' | 'col'
  let x = 0;
  let y = 0;
  for (let str of s) {
    if (typeof arrs[x] === "undefined") {
      arrs.push(Array.from({ length: numRows }, _ => null));
    }
    arrs[x][y] = str;
    if (status === "row") {
      if (y >= numRows - 1) {
        status = "col";
        x++;
        y--;
      } else {
        y++;
      }
    } else {
      if (y === 0) {
        status = "row";
        y++;
      } else {
        x++;
        y--;
      }
    }
  }
  let result = "";
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < arrs.length; j++) {
      if (arrs[j][i]) {
        result += arrs[j][i];
      }
    }
  }
  return result;
};

console.log(convert("LEETCODEISHIRING", 4));
