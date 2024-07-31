// function extend (parent, child){
//   child.prototype = Object.create(parent.prototype)
//   child.prototype.constructor = child
// }

// function Shape (color){
//   this.color = color
// }
// Shape.prototype = {
//   common : function(){
//     console.log('I am a common method')
//   }
// }



// function Square (width, color){
//   this.width = width
//   Shape.call(this, color) // super call = Square er parent Shape , take inherit korar jonno , instance create na kore 
// }
// extend(Shape, Square)

// // Square.prototype = Object.create(Shape.prototype)
// // Square.prototype.constructor = Square // constructor reset

// Square.prototype.draw = function (){
//     console.log('Drawing')
//   }


// Square.prototype.common = function (){
//   console.log('I am calling from Square and I am over hidden')
// }   



// // var s = new Shape ()
// var sqr = new Square(45, 'red')


// function Circle(radius,color){
//   Shape.call(this,color)
//   this.radius = radius
// }

// extend(Shape, Circle)


// // .......... method over riding .........// 

// Circle.prototype.common = function (){
//   console.log('I am calling from Circle and I am over hidden')
//   // Shape.prototype.common.call(this)
// }
// var c = new Circle(34, 'pink')
// var s = new Square(4, 'black')

// var shape = [sqr, s ,c]
// for(var i of shape){
//   i.common()
// }




// .......................................
// Inheritance & Composition Mixing
//......................................

var canWalk = {
  walk : function(){
    console.log('walking...')
  }
}
var canEat = {
  eat : function(){
    console.log('eating...')
  }
}

// var person = Object.assign({}, canWalk, canEat)
// person.assign = 'Nazia Jafrin'

function Person(name){
  this.name = name
}
Object.assign(Person.prototype, canEat, canWalk)

var person = new Person('Nazia Jafrin')
console.log(person)