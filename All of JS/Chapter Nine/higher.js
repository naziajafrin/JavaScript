// first class function
// 5. we can pass function as an argument
// 6. we can return function from another function


function add(a,b){
  return a + b
}

function manipulate(a,b,func){
  var c = a + b
  var d = a - b

  // function multiply(){
  //   var m = func(a,b)
  //   return c * d * m
  // }

  return function(){
    var m = func(a,b)
    return c*d*m
  }
}

// console.log(manipulate(3,6,add()))
var multiply = manipulate(7,6, add)
console.log(multiply())