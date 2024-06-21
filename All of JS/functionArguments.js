function test(){
  // console.log(arguments)
  console.log(JSON.stringify(arguments))
  // console.log(typeof a)

  for(var i = 0; i < arguments.length; i++){
    console.log(arguments[i])
  }

}

test()
test(2,3,4,5,6)

function addSum(){  // function, arguments are the keywords of js library 
  var sum = 0
  for(var i = 0; i < arguments.length; i ++){ // argument is a js object
    sum += arguments[i]
  }
  console.log(sum)
}

addSum(1,2,3,4,5,6,7,8,9,10)