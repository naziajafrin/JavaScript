function sum(a,b,c){
  return a + b + c
}
console.log(sum(2,4,5))

function add(a){
  return function(b){
    return function(c){
      return a + b + c
    }
  }
}

console.log(add(5)(10)(20))