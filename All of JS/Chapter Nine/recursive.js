function sum(n){
  if(n === 1) return 1

  return n + sum(n - 1)
}

console.log(sum(5))


function printHello(n){
  if(n === 0) return 

  console.log('Hello I am Sigma ')
  printHello(n - 1)
}

printHello(5)

var arr = [1,2,3,4,5]
// console.log(arr.length)

function sumArray(arr, index){
  if(index < 0) return 0
  return arr[index] + sumArray(arr,index -1)
}
console.log(sumArray(arr, arr.length-1))