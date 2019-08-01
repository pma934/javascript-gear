function add(...initNum) {
    var res = initNum.reduce((x, y) => x + y);
    function tf(...num) {
        res += num.reduce((x, y) => x + y);
        return tf
    }
    tf.done = function () {
        return res;
    }
    return tf;
}

var arr = [1,2,3,4,5]
var sum = 0
var res = add

for(value of arr){
    res = res(value)
}
console.log(res.done())


