// class CreateUser {
//     constructor(name) {
//         this.name = name;
//         this.getName();
//     }
//     getName() {
//         return this.name;
//     }
// }
// // 代理实现单例模式
// var ProxyMode = (function () {
//     var instance = null;
//     return function (name) {
//         if (!instance) {
//             instance = new CreateUser(name);
//         }
//         return instance;
//     }
// })();
// // 测试单体模式的实例       //ProxyMode有显式返回对象，这里的new没什么用
// var a = new ProxyMode("aaa");
// var b = new ProxyMode("bbb");
// // 因为单体模式是只实例化一次，所以下面的实例是相等的
// console.log(a === b); //true
// console.log(a.getName());
// console.log(b.getName());


var Singleton = (function () {
    function myObject(name, age) {
        this.name = name
        this.age = age
    }
    myObject.prototype.getName = function () {
        console.log(this.name)
    }
    var instance;
    return function (...args) {
        if (!instance) {
            instance = new myObject(...args)
        }
        return instance
    }
})()

var a = new Singleton('小明', 11)

var b = new Singleton('小刚', 12)

a.getName()
b.getName()

console.log(a===b)