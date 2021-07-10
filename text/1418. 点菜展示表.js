/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function (orders) {
  const m = {},
    foods = new Set();
  const res = [];
  for (const [, num, food] of orders) {
    foods.add(food);
    m[num] = m[num] || {};
    console.log(m[num])
    m[num][food] = (m[num][food] || 0) + 1;
    console.log(m[num][food])
  }
  const temp = [...foods].sort();
  res.push(['Table', ...temp]);
  for (const [k, v] of Object.entries(m)) {
    const arr = [];
    for (const f of temp) {
      arr.push(v[f] ? '' + v[f] : '0');
    }
    res.push([k, ...arr]);
  }
  return res;

};
console.log(displayTable(orders = [
  ["David", "3", "Ceviche"],
  ["Corina", "10", "Beef Burrito"],
  ["David", "3", "Fried Chicken"],
  ["Carla", "5", "Water"],
  ["Carla", "5", "Ceviche"],
  ["Rous", "3", "Ceviche"]
]))