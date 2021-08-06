/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  const len1 = word1.length
  const len2 = word2.length
  let res = ''
  const len = len1 > len2 ? len1 : len2
  for (let i = 0; i < len; i++) {
    if (i < len1) {
      res += word1[i]
    }
    if (i < len2) {
      res += word2[i]
    }
  }
  return res

};
console.log(mergeAlternately(
  'ab', 'abc'
));