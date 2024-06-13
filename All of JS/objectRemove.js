var point = {
  x : 40,
  y : 20,
  z : 300
}

point.x = 56
point.c = 80


console.log(point)
console.log(point.h)

point['y'] = 10

var prop = 'z'
point[prop] = 68
console.log(point)

point.c = undefined
console.log(point)

delete point.c
console.log(point)