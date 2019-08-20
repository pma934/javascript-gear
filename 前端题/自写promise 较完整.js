//符合promise/A+规范的prmoise
const PENDING = "pending"
const FULFILLED = "fulfilled"
const REJECTED = "rejected"

class Promise {
    constructor(fn) {
        let that = this
        this.status = PENDING
        this.value = null
        this.reason = null
        this.resolvedCb = []
        this.rejectedCb = []
        let resolve = function (value) {
            that.status = FULFILLED
            that.value = value
            that.resolvedCb.forEach(Cb => Cb(value))
        }
        let reject = function (reason) {
            that.status = REJECTED
            that.reason = reason
            that.rejectedCb.forEach(Cb => Cb(reason))
        }

        try {
            fn(resolve, reject)
        } catch (e) {
            reject(e)
        }
    }
    then(onFulfilled, onRejected) {
        onFulfilled = onFulfilled instanceof Function ? onFulfilled : () => {}
        onRejected = onRejected instanceof Function ? onRejected : () => {}

        let that = this

        if (this.status === FULFILLED) {
            // console.log('FULFILLED')
            return new Promise((resolve, reject) => {
                let res
                if (that.value instanceof Promise) {
                    res = that.value.then(onFulfilled, onRejected)
                } else {
                    res = onFulfilled(that.value);
                }
                resolve(res)
            })
        }
        if (this.status === REJECTED) {
            // console.log('REJECTED')
            return new Promise((resolve, reject) => {
                let res
                if (that.value instanceof Promise) {
                    res = that.value.then(onFulfilled, onRejected)
                } else {
                    res = onRejected(that.value);
                }
                resolve(res)
            })
        }
        //说实话好难理解啊
        if (this.status === PENDING) {
            // console.log('PENDING', this.value)
            return new Promise(function (resolve, reject) {
                that.resolvedCb.push(function () {
                    let res
                    // console.log(`that.value:${that.value}`)
                    if (that.value instanceof Promise) {
                        res = that.value.then(onFulfilled, onRejected)
                    } else {
                        res = onFulfilled(that.value);
                    }
                    resolve(res);
                });
                that.rejectedCb.push(function () {
                    let res
                    if (that.value instanceof Promise) {
                        res = that.value.then(onFulfilled, onRejected)
                    } else {
                        res = onRejected(that.value);
                    }
                    resolve(res);
                });
            })
        }
    }
}

//同步的话先执行resolve或reject的内容，之后执行then里的函数时，value或者reason已经有了
//异步的话执行到then时，状态还是PENDING，因此什么都没执行就结束了，之后再执行resolve或reject的内容，也找不到回调了，因此需要在PENDING状态时保存回调


// new Promise((x, y) => setTimeout(() => x(1),3000)).then(x => {console.log(123);return 3 * x}, y => 2 * y).then(x => console.log(3 * x), y => console.log(2 * y))

// new Promise((x, y) => y(1)).then(x => 3 * x, y => 2 * y).then(x => console.log(3 * x), y => console.log(2 * y))

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("成功")
    }, 3000)
}).then((d1) => {
    console.log(d1);
    return new Promise((resolve, reject) => {
        resolve(new Promise((resolve, reject) => {
            resolve("111")
        }));
    })
}, (r1) => {
    console.log(r1);
    return r1;
}).then((d2) => {
    console.log(d2);
}, (r2) => {
    console.log(r2);
})