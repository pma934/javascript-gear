function Form(){
}
Form.prototype.num = 0

var f1 = new Form()
var f2 = new Form()

console.log(f1)  //Form {}
console.log(f1.num)   //0
console.log(f2)  //Form {}
console.log(f2.num)   //0

f1.num++
console.log('f1.num++之后')  //f1.num++之后

console.log(f1)  //Form {num: 1}
console.log(f1.num)  //1
console.log(f2)  //Form {}
console.log(f2.num)  //0