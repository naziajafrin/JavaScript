var arr = [1,2,3,4,5,6,7,8,9]

// var result = arr.find(function(value){
//   return value === 3
// })
// console.log(result)

// var result = arr.findIndex(function(value){
//   return value === 7
// })
// console.log(result)

function myFind(arr,cb){
  for(var i = 0; i < arr.length; i++){
    if(cb(arr[i])){
      return arr[i]
      // return i
    }
  }
}
var result = myFind(arr, function(value){
  return value === 9
})

console.log(result)


