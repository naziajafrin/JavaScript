// var rect = {
//   length : 10, // properties 
//   width : 20, // properties

//   calculateArea: function(){    // methods 
//     return this.length * this.length
//   },

//   calculateRange: function(){   // methods
//     return 2 *(this.length+this.width)
//   }
// }

// var area = rect.calculateArea()
// console.log(area)
// var range = rect.calculateRange()
// console.log(range)


class Rect {
  constructor(length, width){
    this.length = length
    this.width = width
  }
  calculateArea(){
    return this.length * this.length
  }
  calculateRange(){
    return 2 *(this.length+this.width)
  }

}
// var rect = new Rect(3,4)
var rect2 = new Rect(10, 20)
// console.log(rect)
console.log(rect2)

console.log(rect2.calculateArea())
// console.log(rect.calculateRange())