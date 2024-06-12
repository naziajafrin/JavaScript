//typeConversion.js

// var str = '1000'
// var str1 = '20.48'
// var n = 10

// console.log(str * n)
// console.log(Number(str) + n)
// console.log( Number.parseInt(str1))
// console.log(n.toString())


var n = 121

var x = n

var s = x.toString(x)
var t = s
t.split('').reverse().join('')
if(t == n) return true
else return false

