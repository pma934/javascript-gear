"use strict"
console.log(this)

var a = function(){console.log(this)}

a.apply(undefined)