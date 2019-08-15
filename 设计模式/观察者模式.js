//被观察者以及其增加，删除，通知在观察者列表中的观察者的能力进行建模
function Subject() {
    this.observerList = [];
}
Subject.prototype.addObserver = function (observer) {
    this.observerList.push(observer)
}
Subject.prototype.removeObserver = function (observer) {
    let index = this.observerList.indexOf(observer)
    this.observerList.splice(index, 1)
}
Subject.prototype.notify = function (context) {
    for (let i in this.observerList) {
        this.observerList[i].update(context);
    }
}
//观察者的一个框架。这里的update 函数之后会被具体的行为覆盖。
function Observer() {
    this.update = function () {
        // ...
    };
}