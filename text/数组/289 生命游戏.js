/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  // 八个方向的偏移量
  const idx = [0, 1, 0, -1, -1, -1, 1, 1]
  const jdx = [1, 0, -1, 0, 1, -1, 1, -1]

  //数组copy
  const copyboard = board.map((ary) => {
    return [...ary]
  }) //解构

  for (let i = 0; i < copyboard.length; i++) {
    for (let j = 0; j < copyboard[i].length; j++) {
      let live = 0
      for (let index = 0; index < 8; index++) {
        let x = i + idx[index]
        let y = j + jdx[index]

        if (x < 0 || y < 0 || x >= copyboard.length || y >= copyboard[i].length)
          continue

        live += copyboard[x][y] ? 1 : 0
      }  
      if (live < 2 || live > 3) {
        board[i][j] = 0
      } else if (live <= 3 && copyboard[i][j]) {
        board[i][j] = 1
      } else if (live === 3 && !copyboard[i][j]) {
        board[i][j] = 1
      }
    }
  }
}
console.log(
  gameOfLife(
    (board = [
      [0, 1, 0],
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 0],
    ])
  )
)
