function sumAll(){
  var sum = 0
  for(var i = 0; i < arguments.length; i++){
    sum += arguments[i]
  }
  return sum
}

var result = sumAll(1,2,3)
console.log(result)


function personInfo(name, email){
  return{
    name: name,
    email: email
  }
}

var person = personInfo('Nazia', 'nazia.jafrin1@gmail.com')
console.log(person)