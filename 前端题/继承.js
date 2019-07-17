function Pet(name, age) {
    this.name = name
    this.age = age
}

Pet.prototype.about = function () {
    console.log(`这只宠物叫${this.name}，今年${this.age}岁了`)
}

function Cat(name, age, color) {
    this.color = color
    Pet.call(this, name, age) //通过call或者apply定义Pet中以及定义的属性
}
/***** 继承步骤上组合继承不同的地方 ***********************/
Cat.prototype = Object.create(Pet.prototype)
/***** **************************************************/
Cat.prototype.constructor = Cat // 保持构造函数的一致性，不然构造函数指向Pet的

Cat.prototype.about = function () { //重写对象方法
    console.log(`这只${this.color}色猫猫叫${this.name}，今年${this.age}岁了`)
}
//--------------------------------------------------------------------------------------------
var coco = new Cat("coco", 3, "白")

/***** 这部分得到的结果都和组合继承相同 *******************/
var wowo = new Pet("wowo", 4)
wowo.about() //这只宠物叫wowo，今年4岁了

var coco = new Cat("coco", 3, "白")
coco.about() //这只白色猫猫叫coco，今年3岁了
console.log(coco.__proto__.constructor === Cat) //[Function: Cat]
console.log(coco instanceof Cat) //true
console.log(coco instanceof Pet) //true
/***** **************************************************/

console.log(coco)