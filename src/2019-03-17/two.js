/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
  let count = 0;
  for (let i = 0, len = time.length; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (time[i] + time[j] < 60) {
        continue;
      }
      if ((time[i] + time[j]) % 60 === 0) {
        count++;
      }
    }
  }
  return count;
};

console.log(numPairsDivisibleBy60([30, 20, 150, 100, 40]));
console.log(numPairsDivisibleBy60([60, 60, 60]));
