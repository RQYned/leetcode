/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let gp = 0;
  let sp = 0;
  let glen=g.length
  let slen=s.length
  while (gp < glen && sp <slen) {
    if (s[sp] >= g[gp]) {
      gp++;
      sp++; 
    }
  }
  return gp
};
console.log(findContentChildren(g = [1, 2, 3], s = [1, 1]))