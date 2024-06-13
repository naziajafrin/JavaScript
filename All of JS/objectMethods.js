var obj = {
  a : 60,
  b : 30,
  c : 40
}

// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))


var obj2 = Object.assign({}, obj)
obj2.c = 200

console.log(obj)
console.log(obj2)