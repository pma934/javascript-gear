<<<<<<< HEAD
"use strict"
console.log(this)

var a = function(){console.log(this)}

a.apply(undefined)
=======
function A(value){
  this.value = value
}

A.prototype.showValue = function(){
  console.log(this.value)
}

function B(value){
  this.value = value
}

B.prototype = new A()

var b = new B(5)
console.log(b instanceof B)
console.log(b instanceof A)
console.log(A)
console.log(b.__proto__.__proto__.__proto__ === Object.prototype)
console.log(b.__proto__.__proto__ === A.prototype)
console.log(b.constructor)
b.showValue()
>>>>>>> 34459627bedc08c8d05d7f806c724c6c3cccf6a9
