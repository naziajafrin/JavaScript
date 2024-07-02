var arr = [1,2,3,4,5,6,7,8,9]

// var sum = arr.reduce(function(pre, curr, index, arr){
//   return pre + curr
// })

// var sum = arr.reduce(function(pre, curr, index, arr){
//   return pre + curr
// },100)

// console.log(sum)


// var max = arr.reduce(function(pre, curr, index, arr){
//   return Math.max(pre, curr)
// })
// console.log(max)

function myReduce(arr, cd, acc){
  for(var i = 0; i < arr.length; i++){
    acc = cd(acc, arr[i])
  }
  return acc
}

console.log(myReduce(arr,function(pre, curr){
  return pre + curr
}, arr[0]))
console.log(myReduce(arr,function(pre, curr){
  return Math.max(pre, curr)
}, arr[0]))
console.log(myReduce(arr,function(pre, curr){
  return Math.min(pre, curr)
}, arr[0]))
