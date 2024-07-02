// function greet(msg){
//   function greetings(name){
//     return msg + ', ' + name + ' !'
//   }
//   return greetings
// }

// var gm = greet('good morning')
// var gn = greet('good night')
// var hello = greet('Hello')
// console.log(gm('Seyam Sadman'))
// console.log(gn('shanto'))
// console.log(hello('sigma'))

function base(b){
  function power(n){
    var res = 1
    for(var i = 0; i < b; i++){
      res *= n
    }
    return res
  }
  return power
}

var base10 = base(10)
console.log(base10(2))

var base5 = base(5)
console.log(base5(2))
console.log(base5(3))
console.log(base5(4))
console.log(base5(5))