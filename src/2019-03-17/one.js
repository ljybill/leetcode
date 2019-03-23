/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
  return parseInt(
    N.toString(2)
      .split("")
      .map(item => (item === "1" ? "0" : "1"))
      .join(""),
    2
  );
};

console.log(bitwiseComplement(10));
