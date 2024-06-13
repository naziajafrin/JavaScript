var obj = { 
  a : 10,
  b : 20,
  c : 30
}

// console.log('a' in obj)
// console.log('d' in obj.)

for(var i in obj){
  console.log(i + ':' + obj[i])
}