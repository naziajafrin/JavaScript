
// var isRunning = true
// while(true){
//   var rand = Math.floor(Math.random() * 10 + 1)
//   if(rand === 3) {
//     console.log("You are win")
//     // isRunning = false
//     break
//   }
//   else{
//     console.log("u have got " + rand)
//   }
  
// }

for(var i = 1; i <= 10; i++){
  if(i % 4 === 0){
    break
  } 
  else{
    console.log(i)
  }
}