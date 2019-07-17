<<<<<<< HEAD
<<<<<<< HEAD
"use strict"
console.log(this)

var a = function(){console.log(this)}

a.apply(undefined)
=======
function A(value){
  this.value = value
}
=======
var arr = new Array(20).fill(0).map(()=>Math.round(Math.random()*500))
>>>>>>> 更新下，准备熟悉一下排序算法

console.log(arr)

<<<<<<< HEAD
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
=======
>>>>>>> 更新下，准备熟悉一下排序算法
