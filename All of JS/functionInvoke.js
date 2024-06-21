// function add(a, b){
//   var result = a+b
//   console.log(result)
// }

// function sub(a, b){
//   var result = a - b
//   console.log(a-b)
// }

// add(3,20)
// sub(40,20)


var arr1=[2,5,3,8,89]
var arr2=[3,46,7,8]



function arraySum(arr){
  sum = 0
  for(var i = 0; i < arr.length; i++){
    sum = sum + arr[i]
  }
  console.log(sum)
}



arraySum(arr1)
arraySum(arr2)
