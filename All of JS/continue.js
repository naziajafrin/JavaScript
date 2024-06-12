for(var i = 0; i <= 10; i++){
  if(i === 3 || i === 9){
    continue
  }
  else{
    var result = ''
    for(var j = 1; j <= i; j++){
      result += i + ' '
    }
    console.log(result)
  } 
}