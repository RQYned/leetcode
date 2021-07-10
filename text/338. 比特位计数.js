/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  const bits = new Array(num + 1).fill(0);
  for (let i = 0; i <= num; i++) {
    bits[i] = countOnes(i);
  }
  return bits
  };

  const countOnes = (x) => {
      let ones = 0;
      while (x > 0) {
        x &= (x - 1);
        ones++;
      }
      return ones;
};