var arr = [1,2,3,4,5,6,7,8,9]

// var filteredArray = arr.filter(function(value){
//   // return value % 2 === 0
//   return value > 4
// })

// console.log(arr)
// console.log(filteredArray)

function myfilter(arr,cd){
  var newArr = []
  for(var i = 0; i < arr.length; i++){
    if(cd(arr[i], i , arr)){
      newArr.push(arr[i])
    }
  }
  return newArr
}

console.log(myfilter(arr, function(value){
  return value % 2 === 0
}))

console.log(myfilter(arr, function(value){
  return value % 2 === 1
}))

console.log(myfilter(arr, function(value){
  return value > 4
}))