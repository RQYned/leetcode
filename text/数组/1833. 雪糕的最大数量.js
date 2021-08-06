/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
  costs.sort((a, b) => a - b)
  console.log(costs)
  let sum=0
  let numbers = 0
  for (let i = 0; i < costs.length; i++) {
    sum+=costs[i]
    console.log(sum);
    if (sum<=coins) {
      numbers++
    }
  }
  return numbers
};
console.log(maxIceCream([1, 6, 3, 1, 2, 5] , 20));