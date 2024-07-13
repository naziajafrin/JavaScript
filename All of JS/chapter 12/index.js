// // var rect = {
// //   width : 50,
// //   height : 100,

// //   draw : function(){
// //     console.log('I am a rectangle')
// //     this.printProperties()
// //     console.log(this)
// //   },

// //   printProperties : function (){  
// //   console.log('My height is ' + this.height)
// //   console.log('My width is ' + this.width)
// //   }
// // }

// // rect.draw()

// // // rect.height = 200

// // // rect.draw()



// // // .............. This Key Word ................... //

// // function myFunc(){
// //   console.log(this)
// //   rect.printProperties()
// // }
// // new myFunc()


// // var another = {
// //   height : 200,
// //   width : 100,
// //   print : rect.printProperties
// // }


// // another.print()



// //............ pattern ...........//

// // ....factory pattern....

// var createRect = function(height, width){
//   return {
//     width : width,
//     height : height,
  
//     draw : function(){
//       console.log('factory pattern')
//       console.log('I am a rectangle')
//       this.printProperties()
//       console.log(this)
//     },
  
//     printProperties : function (){  
//     console.log('My height is ' + this.height)
//     console.log('My width is ' + this.width)
//     }
//   }
// }

// var rect1 = createRect(2,4)
// rect1.draw()

// var rect2 = createRect(3,6)
// rect2.draw()


// //.....constructor pattern ......

// var Rectangle = function(width, height){
  
//   this.width = width
//   this.height = height

//   this.draw = function(){
//     console.log('constructor pattern')
//     console.log('I am a rectangle')
//     this.printProperties()
//     console.log(this)
//   }

//   this.printProperties = function (){  
//     console.log('My height is ' + this.height)
//     console.log('My width is ' + this.width)
//   }
// }

// var rect3 =new Rectangle(3,4)
// rect3.draw()

// // function myNew(constructor){
// //   var obj = {}
// //   Object.setPrototypeOf(obj, constructor.prototype)
// //   var argsArray = Array.prototype.slice.apply(arguments)
// //   constructor.apply(obj,argsArray.slice(1))


// //   return obj
// // }

// // var rect4 = myNew(Rectangle, 45, 30)
// // rect4.draw()


// var str = new String('str')
// console.log('my string is ' + str)


// function test(){
//   console.log('something')
// }
// console.log(test.name, test.length)

// var Rect = new Function('height', 'width', ` this.width = width
//   this.height = height

//   this.draw = function(){
//     console.log('constructor pattern')
//     console.log('I am a rectangle')
//     this.printProperties()
//     console.log(this)
//   }

//   this.printProperties = function (){  
//     console.log('My height is ' + this.height)
//     console.log('My width is ' + this.width)
//   }`)
//   var rect5 = new Rect(4, 5)
//   console.log(rect5)
  

  // function myFunc(c,d){
  //   console.log(this)
  //   console.log(this.a + this.b + c + d)
  // }
  // // myFunc()
  // // myFunc.apply({})
  // myFunc.call({a:10, b:30})
  // myFunc.call({a:40, b:60}, 20, 30)
  // myFunc.apply({a:40, b:60},[ 20, 30])

  // var testBind = myFunc.bind({a:20, b:25})
  // testBind(5,10)



  // //.......... pass by value and pass by reference ..............

  // var n = 10

  // function change(n){ // ram create a clone of n 
  //   n += 100
  //   console.log(n)
  // }
  
  // change(n) // changed clone value 
  // console.log(n) // its not provide a clone value , its a main value 

  // var obj = {
  //   a : 10,
  //   b : 20
  // }
  // function myChange(obj){
  //   obj.a += 100
  //   obj.b += 200
  //   console.log(obj)
  // }
  // myChange(obj)
  // console.log(obj)`



  //..............................................
  //  Abstraction 
  //..................................

  
var Rectangle = function(width, height){
  
  this.width = width
  this.height = height
  // var name = 'shanto'
  var position = {
    x : 20,
    y : -30
  }

  var printProperties = function (){  // this function are not under any obj 
    console.log('My height is ' + this.height) // this.obj = refers window obj , when the function under any object  
    console.log('My width is ' + this.width)
  }.bind(this)
  
  // this.getPosition = function(){
  //   return position
  // }
  this.draw = function(){
    console.log('constructor pattern')
    console.log('I am a rectangle')
    printProperties()
    console.log('Position : X =' + position.x + ' Y =' + position.y)
  }

  Object.defineProperty(this,'position',{
    get : function(){
      return position
    },
    set : function(value){
      position = value 
    }
  })

}


var rect7  = new Rectangle(45, 30) 
rect7.draw()
console.log(rect7.position)
rect7.position={
  x : 30, 
  y : 23
}
console.log(rect7.position)