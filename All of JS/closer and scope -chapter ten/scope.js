var x = 33

function test(){
  var x = 20
  // console.log(x)

  function test2(){
    // var y = 30
    console.log(x)
  }
  // console.log(y)
  test2()
}

test()