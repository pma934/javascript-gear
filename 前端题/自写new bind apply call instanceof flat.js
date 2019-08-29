var age = 123

function Pet(age,name){
    this.age = age
    this.name = name
}

var cat = new Pet(4,'coco')

//自写 flat
Array.prototype.flat = function (n = 1) {
    let arr = this
    if (arr.length === 0 || !Array.isArray(arr)) {
        return arr
    }
    for (let i = 0; i < n; i++) {
        let newArr = []
        let flag = true
        for (let v of arr) {
            flag = Array.isArray(v) ? false : true
            newArr = newArr.concat(v)
        }
        arr = newArr
        if (flag) {
            break;
        }
    }
    return arr
}


//自写 new
function myNew(constructor,...arg){
    let obj ={}
    obj.__proto__ = constructor.prototype
    let res = constructor.apply(obj,arg)
    return res instanceof Object?res:obj
}
var dog = myNew(Pet,6,'wowo')

//自写 apply
Function.prototype.myApply = function(obj,arg){
    arg = arg||[]
    obj.fn = this
    let res = obj.fn(...arg)
    delete obj.fn
    return res
}

//自写 call
Function.prototype.myCall = function(obj,...arg){
    //arg = arg||[]
    obj.fn = this
    let res = obj.fn(...arg)
    delete obj.fn
    return res
}

//自写 bind
Function.prototype.myBind = function(obj,...args){
	// obj = obj?obj:window
	let fn = this
	return function(...args2){
		obj.fn = fn
		res = obj.fn(...args,...args2)
		delete obj.fn
		return res
	}	
}


function showPet(people,day){
    console.log(`${people}的${this.name}在${day}${this.age}岁了`)
}

showPet.apply(cat,['Bob','昨天'])
showPet.myApply(dog,['Bob','昨天'])

showPet.call(cat,'Bob','昨天')
showPet.myCall(dog,'Bob','昨天')
showPet.apply(cat)
showPet.myApply(dog)

var b1 = showPet.bind(cat)
var b2 = showPet.bind(cat,'Bob')
var b3 = showPet.bind(cat,'Bob','昨天')
var myb1 = showPet.myBind(dog)
var myb2 = showPet.myBind(dog,'Bob')
var myb3 = showPet.myBind(dog,'Bob','昨天')

b1('Bob','今天')
myb1('Bob','今天')
b2('明天')
myb2('明天')
b3()
myb3()

//自写 instanceof
function MyInstanceof(left,right){
    let pro1 =  left.__proto__
    let pro2 =  right.prototype
    while(true){
        if(pro1 === pro2){
            return true
        }
        if(pro1 === null){
            return false
        }
        pro1 = pro1.__proto__
    }
}

console.log(MyInstanceof(cat,Pet))
console.log(cat instanceof Pet)
console.log(MyInstanceof(dog,Object))
console.log(dog instanceof Object)
console.log(MyInstanceof(dog,Number))
console.log(dog instanceof Number)
console.log(MyInstanceof(cat,Function))
console.log(cat instanceof Function)