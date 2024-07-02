function add(a,b){
  return a + b
}
// 1. stored in a variable 
var sum = add
console.log(sum(3,5))
console.log(typeof sum)

// 2. stored in a array
var arr = []
arr.push(add)
console.log(arr)
console.log(arr[0](4,6))

// 3. can be stored in an Object

var obj = {
  sum : add
}
console.log(obj)
console.log(obj.sum(2,54))

// 4. need basis function can be created

setTimeout(function(){
  console.log('Sigma loves Shanto')
},400)

// 5. we can pass function as an argument
// 6. we can return function from another function

