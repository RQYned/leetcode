function fairCandySwap(A: number[], B: number[]): number[] {
  let set = new Set(A)
    let aTotal = A.reduce((a, b) => a+b), bTotal = B.reduce((a, b) => a+b)
    for(let item of B) {
        if(set.has((aTotal - bTotal + 2*item)/2)) {
            return [(aTotal - bTotal + 2*item)/2, item]
        }
    }
    return []
};