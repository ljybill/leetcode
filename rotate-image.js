/**
 * 
 * 给定 matrix = 
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 
原地旋转输入矩阵，使其变为:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let n = matrix.length;
  let offset = 0;
  while (n >= 2) {
    let pointA = { x: 0 + offset, y: 0 + offset };
    let pointB = { x: 0 + offset, y: n - 1 + offset };
    let pointC = { x: n - 1 + offset, y: n - 1 + offset };
    let pointD = { x: n - 1 + offset, y: 0 + offset };
    let step = n - 1;
    do {
      let temp = matrix[pointD.x][pointD.y];
      matrix[pointD.x][pointD.y] = matrix[pointC.x][pointC.y];
      matrix[pointC.x][pointC.y] = matrix[pointB.x][pointB.y];
      matrix[pointB.x][pointB.y] = matrix[pointA.x][pointA.y];
      matrix[pointA.x][pointA.y] = temp;
      // change
      pointA.y++;
      pointB.x++;
      pointC.y--;
      pointD.x--;
    } while (--step);
    n -= 2;
    offset++;
  }
};
