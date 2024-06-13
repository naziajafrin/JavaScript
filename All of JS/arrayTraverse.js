var arr = [1, 56,7,3,8,35,6,8,3]
var sum = 0
var sum_even = 0
var sum_odd = 0

console.log(arr)

for(var i = 0; i < arr.length; i++){
  arr[i] += 2
  sum += arr[i]
  if(arr[i] % 2 === 0){
    // console.log(arr[i])
    sum_even += arr[i]
  }
  else{
    sum_odd += arr[i] 
  }
}
console.log('total sum ' + sum)
console.log('total sum of even' + sum_even)
console.log('total sum of odd ' + sum_odd)
console.log(arr)