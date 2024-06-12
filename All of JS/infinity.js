for( ; ; ){
  var rand = Math.floor(Math.random() * 10 + 1)
  if(rand === 3) {
    console.log("You are win")
    // isRunning = false
    break
  }
  else{
    console.log("u have got " + rand)
  }
}