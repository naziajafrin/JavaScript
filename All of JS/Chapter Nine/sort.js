var person = [
  {
    name: 'A',
    age : 32
  },
  {
    name: 'B',
    age : 17
  },
  {
    name: 'C',
    age : 48
  },
  {
    name: 'D',
    age : 9
  }
]

var arr = [2,5,12,-4,8,3,48,-3,12,45,98,65,-1,34,21,54,52]

arr.sort(function(a,b){
  if(a > b) return 1
  else if (b > a) return -1
  else return 0
})
console.log(arr)

person.sort(function(a,b){
  if(a.age > b.age) return 1
  else if(b.age > a.age) return -1
  else return 0
})
console.log(person)


var res1 = arr.every(function(value){
  return value % 2 === 0
})

console.log(res1)

var res2 = arr.every(function(value){
  return value % 2 === 1
})

console.log(res2)

var res3 = arr.every(function(value){
  return value >= 0
})

console.log(res3)

var res4 = arr.every(function(value){
  return value  <= 0
})

console.log(res4)