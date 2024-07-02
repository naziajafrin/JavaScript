//it returns same result if given the same arguments
// it doesn't cause any observable side effects


// pure function
function sqr(n){
  return n*n
}

console.log(sqr(4))


// not pure function

var n = 20
console.log(n)
function change(){
  n = 200
}
change()
console.log(n)


var point = {
  x : 20,
  y : 30
}
console.log(point)

function printPoint(){
  point.x = 400
  point.y = 500

  console.log(point)
}

printPoint()
console.log(point)