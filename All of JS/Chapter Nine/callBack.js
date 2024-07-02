function sample(a, b, cd){
  var c = a + b
  var d = a - b
  var result = cd(c,d)
  return result
}

function sum(c,d){
  var summation = c + d
  return summation
}

var result = sample(4,5,sum)
console.log(result)

var result2 = sample(4,5,function(c,d){
  return c - d
})
console.log(result2)

var result3 = sample(4,5,function(c,d){
  return c * d
})
console.log(result3)


var result4 = sample(4,5,function(c,d){
  return c / d
})
console.log(result4)

