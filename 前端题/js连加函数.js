//实现一个连加器
function sum1(...initNum) {
    var res = initNum.reduce((x, y) => x + y);

    function tf(...num) {
        res += num.reduce((x, y) => x + y);
        return tf
    }
    tf.valueOf = function () {
        return res;
    }
    return tf;
}

//实现一个累加函数，当最后一次调用传入空时，计算和
function sum2(...initNum) {
    let res = 0
    if (initNum.length) {
        res += initNum.reduce((x, y) => x + y);

        function tf(...num) {
            if (num.length) {
                res += num.reduce((x, y) => x + y);
                return tf
            } else {
                return res
            }
        }
        return tf;
    } else {
        return res
    }
}

console.log(sum1(1)(2, 4)(3))
console.log(sum2(1, 2)(3, 4, 5)())