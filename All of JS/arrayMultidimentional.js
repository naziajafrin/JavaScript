// arrayMultidimentional.js
var arr = [
  [1,2,3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15]
]

// console.log(arr)
// console.log(arr[2])
// console.log(arr[1][1])

for(var i = 0; i < arr.length; i++){
  for(var j = 0; j < arr[i].length; j++){
    console.log('Element' + i + ':' + arr[i][j])
  }
} 