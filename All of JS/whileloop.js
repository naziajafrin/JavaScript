// var i = 0
// while(i <= 10){
//   console.log("sigma is a cute girl")
//   i++
// }

var isRunning = true
while(isRunning){
  var rand = Math.floor(Math.random() * 10 + 1)
  if(rand === 3) {
    console.log("Seyam ekta batpar")
    isRunning = false
  }
  else{
    console.log("u have got" + rand)
  }
  
}
