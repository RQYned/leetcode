/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {

  const len=isConnected.length;
  const parent = new Array(len).fill(0);

  for(let i=0;i<len;i++){
    parent[i] = i;
  }

  for(i=0;i<=len;i++) { 
    for(j=i+1;j<len;j++){
      if(isConnected[i][j]==1){
        union(parent,i,j);
      }
    }
  }

  let counts=0;
  for(let i=0 ;i<len;i++){
    if(parent[i]==1)
      counts++;
  }
  return counts;
};


const find =(parent , index) => {
  if(parent[index]!==index){
    parent[index] = find(parent[index],index)
  }
  return parent[index]
}

const union = (parent , index1 , index2) =>{
  parent[find(parent,index1)] = find(parent,index2);
}

console.log(findCircleNum(isConnected = [[1, 1, 0], [1, 1, 0], [0, 0, 1]]))