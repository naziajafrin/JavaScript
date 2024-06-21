var addition = function(a,b){
  return a + b
}

// addition(3, 40)
console.log(addition(3,4))

var another = addition
console.log(another(20, 30))


setTimeout(function(){
  console.log('I will call after 4 sec')
},4000)
