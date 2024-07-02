// execution context
// last in fast out 

function a(){
  b()
  console.log('i am function A')
}
function b(){
  c()
  console.log('i am function B')
}
function c(){
  d()
  console.log('i am function C')
}
function d(){
  console.log('i am function D')
}

var x = 100
a()
console.log('it is a global context')