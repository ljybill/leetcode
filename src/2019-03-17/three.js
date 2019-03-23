var adds = function(arr) {
  return arr.reduce((total, current) => total + current, 0);
};
/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function(weights, D) {
  if (D === 1) {
    return adds(weights);
  }
  const total = adds(weights);
  const avg = total / D;
  const results = [];
  for (let x = 0; x < D; x++) {
    results[x] = [];
    let flag = true;
    let a = avg;
    const result = results[x];
    for (let i = 0, current = 0, len = weights.length; i < len; i++) {
      if (!result[current]) {
        result[current] = weights[i];
      } else {
        if (result[current] + weights[i] <= a) {
          result[current] += weights[i];
        } else {
          if (x === current && flag) {
            result[current] += weights[i];
            a = result[current];
            flag = false;
          } else if (current === D - 1) {
            // result full!
            // 剩下的插入到之前的result里面
            result[current] += weights[i];
          } else {
            current++;
            i--;
          }
        }
      }
    }
  }
  return Math.min(
    ...results
      .filter(result => result.length === 5)
      .map(result => Math.max(...result))
  );
};

// console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
// console.log(shipWithinDays([1, 2, 3, 1, 1], 4));
// console.log(shipWithinDays([3, 2, 2, 4, 1, 4], 3));
console.log(shipWithinDays([10, 50, 100, 100, 50, 100, 100, 100], 5));
