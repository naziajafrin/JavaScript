abc()

function abc(){ // function declaration = can call it anywhere 
  console.log('I am a abc function')
}

abc()


// newVar()     // can't call it here , it's a function expression ,call it after declaration 
var newVar = function(){
  console.log('I am a newVar function ')
}
newVar()

// creational phase 
// abc = ref 

// executional phase 
// call the function 