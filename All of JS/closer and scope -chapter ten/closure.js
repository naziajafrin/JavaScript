// a function is
// able to remember and access it's lexical scope 
// when that function executing outside it's lexical scope 

// function test(){
//   var msg = 'I am learning Lexical Scope ang Closer '

//   function sayMsg(){   // it's a lexical scope , it can able to remember and access 'msg'
//     console.log(msg)
//   }
//   sayMsg()
// }

// test()



// when that function executing outside it's lexical scope 

function test(){
  var msg = 'I am learning Lexical Scope ang Closer '

  return function (){
    console.log(msg)
  }
}

var sayMsg = test()
console.log(sayMsg)
sayMsg()