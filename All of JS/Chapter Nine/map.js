var arr = [1,2,3]

// var sqrArr = arr.map(function(value){
//   // return Math.random()*100
//   return value * value
// })

// console.log(arr)
// console.log(sqrArr)

// function myMap(arr){
//   var arr2 = []
//   for(var i = 0; i < arr.length; i++){
//     var temp = arr[i] * arr[i]
//     arr2.push(temp)
//   }
//   return arr2
// }
// console.log(myMap(arr))



function myMap(arr,cb){
  var arr2 = []
  for(var i = 0; i < arr.length; i++){
    var temp = cb(arr[i], i , arr)
    arr2.push(temp)
  }
  return arr2
}

var qb = myMap(arr, function(value){
  return value * value
})
console.log(qb)

var mten = myMap (arr, function(value){
  return value * 10
})
console.log(mten)