//.....................................
// Inheritance
// ...... ...... ....................


// function Person(name){ // constructor
//   this.name = name
// }
// var p1 = new Person('Nazia Jafrin')
// console.log(p1)

// function Students (roll){
//   // return studentRoll(roll){
//   //   this.roll = roll
//   // }
// }


//............ Property Descriptor ................//

// var student = new Students(23)

// var person = {
//   name : ' Nazia Jafrin'
// }
// console.log(person)

// for(var i in person){
//   console.log(i)
// }
// console.log(Object.keys(person))

// var descriptor = Object.getOwnPropertyDescriptor(person,'name')
// console.log(descriptor)

// var baseObj = Object.getPrototypeOf(person)
// var descriptor = Object.getOwnPropertyDescriptor(baseObj, 'toString')
// console.log(descriptor)

// Object.defineProperty(person, 'name', {
//   enumerable: false,
//   configurable: false,
//   writable: false,
//   value: 'Seyam Sadman'
// })


//................ Constructor Prototype ..........//

// function Person(name){
//   this.name = name 
// }
// Person.prototype.PI = 3.1416

// var p1 = new Person('seyam sadman saran')
// // console.log(Object.getPrototypeOf(p1))
// // console.log(Person.prototype)

// var p2 = new Person ('nazia jafrin')

// console.log(p1)
// console.log(p2)


//................. Instance vs Prototype Members .............//

function Square(width){
  this.width = width // instance

  this.getWidth = function (){
    console.log('Width is =' + this.width)
    // this.draw()
  }
}

Square.prototype = { 
  draw : function (){ // prototype mathode 
    console.log('Draw')
    this.getWidth()
  },
  toString : function (){
    return 'my width is = ' + this.width
  }
}

var sqr1 = new Square(10)
var sqr2 = new Square(5)

console.log(Object.keys(sqr1)) // to get it's own property (instance)

for(var i in sqr1){ // also give it's parents property (instance + prototype)
  console.log(i)
}