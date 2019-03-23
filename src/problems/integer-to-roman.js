/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const m = Math.floor(num / 1000);
  const d = Math.floor((num % 1000) / 500);
  const c = Math.floor((num % 500) / 100);
  const l = Math.floor((num % 100) / 50);
  const x = Math.floor((num % 50) / 10);
  const v = Math.floor((num % 10) / 5);
  const i = Math.floor(num % 5);

  return `${"M".repeat(m)}${"D".repeat(d)}${"C".repeat(c)}${"L".repeat(
    l
  )}${"X".repeat(x)}${"V".repeat(v)}${"I".repeat(i)}`;
};

console.log(intToRoman(59))