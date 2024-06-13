var arr = [1,2,3,4,5]
// var arr2 = []

// for(var i = 0; i <= arr.length; i++){
//   var length = arr.length
  
//   // console.log(arr)
  
//   if((length-1) === 0){
//     arr2.push(arr[1])
//   }
//   else if((length-1) === -1){
//     arr2.push(0)
//   }
//   else{
//     arr2.push(arr[length-1])
//     arr.pop()
//   }
// }
// console.log(arr2)


for(var i = 0; i < (arr.length/2); i++){
  var temp = arr[i]
  arr[i] = arr[arr.length - 1 -i]
  arr[arr.length - 1 - i] = temp
}
console.log(arr)

// console.log(arr.reverse())