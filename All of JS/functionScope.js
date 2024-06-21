var a = 'abc'

// if(true){
//   if(true){
//     var b = 'B'
//     console.log(b)
//   }
// }

function x(){
  // var a = 20
  function y(){
    var a = 10
    console.log(a)
  }
  console.log(a)
  y()
}
x()



function test(n){
  function a(){
    return n%3 === 0
  }
  function b(){
    return n%5 === 0
  }

  if(a() && b()){
    console.log(n + ' divisible by both 3 and 5')
  }
  else{
    console.log('not a valid number')
  }

}

test(30)