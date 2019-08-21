//符合promise/A+规范的prmoise
const PENDING = "pending"
const FULFILLED = "fulfilled"
const REJECTED = "rejected"

function Promise(fn) {
    let that = this
    this.status = PENDING
    this.value = undefined
    this.reason = undefined
    this.resolvedCb = []
    this.rejectedCb = []

    let resolve = function (value) {
        that.value = value
        that.status = FULFILLED
        that.resolvedCb.forEach(cb => cb(that.value))
    }
    let reject = function (reason) {
        that.reason = reason
        that.status = REJECTED
        that.rejectedCb.forEach(cb => cb(that.reason))
    }

    try {
        fn(resolve, reject)
    } catch (e) {
        reject(e)
    }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
    onFulfilled = onFulfilled instanceof Function ? onFulfilled : () => {}
    onRejected = onRejected instanceof Function ? onRejected : () => {}

    let that = this

    if (this.status === FULFILLED) {
        return new Promise((resolve, reject) => {
            if (this.value instanceof Promise) {
                this.value.then(onFulfilled, onRejected)
            } else {
                try {
                    resolve(onFulfilled(this.value))
                } catch (e) {
                    reject(e)
                }
            }
        })
    }
    if (this.status === REJECTED) {
        return new Promise((resolve, reject) => {
            try {
                resolve(onRejected(this.reason))
            } catch (e) {
                reject(e)
            }
        })
    }
    if (this.status === PENDING) {
        return new Promise((resolve, reject) => {
            that.resolvedCb.push(() => {
                if (this.value instanceof Promise) {
                    this.value.then(onFulfilled, onRejected)
                } else {
                    try {
                        resolve(onFulfilled(this.value))
                    } catch (e) {
                        reject(e)
                    }
                }
            })
            that.rejectedCb.push(() => {
                try {
                    resolve(onRejected(this.reason))
                } catch (e) {
                    reject(e)
                }
            })
        })
    }
}

Promise.resolve = function (value) {
    return new Promise(resolve => {
        resolve(value)
    })
}

Promise.reject = function (reason) {
    return new Promise((resolve, reject) => {
        reject(reason)
    })
}

Promise.all = function (promises) {
    let resolveList = []
    return new Promise((resolve, reject) => {
        promises.forEach(p => {
            Promise.resolve(p).then(re => {
                resolveList.push(re)
                if (promises.length === resolveList.length) {
                    //因为promise异步的原因，还是得放里面
                    resolve(resolveList)
                }
            }, rj => {
                reject(rj)
            })
        })
    })
}
Promise.race = function (promises) {
    let flag = true
    return new Promise((resolve, reject) => {
        promises.forEach(p => {
            Promise.resolve(p).then(re => {
                if (flag) {
                    flag = false
                    resolve(re);
                }
            }, rj => {
                if (flag) {
                    flag = false
                    reject(rj);
                }
            })
        })
    })
}
// new Promise((resolve, reject) => {
//         resolve("成功")
// }).then((d1) => {
//     return d1 + '123'
// }, (r1) => {
//     return r1;
// }).then((d2) => {
//     console.log(`success:${d2}`);
//     return d2
// }, (r2) => {
//     console.log(`error:${r2}`);
// }).then((d2) => {
//     console.log(`success:${d2}`);
// }, (r2) => {
//     console.log(`error:${r2}`);
// }).then((d2) => {
//     console.log(`success:${d2}`);
// }, (r2) => {
//     console.log(`error:${r2}`);
// })

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(new Promise((rs, rj) => {
//             setTimeout(() => {
//                 rj(9)
//             })
//         }))
//     })
// }).then(res => {
//     console.log(`res:${res}`)
// }, err => {
//     console.log(`err:${err}`)
// })

// Promise.reject(1).then(x=>console.log(x),y=>console.log(2*y))
// Promise.all([]).then(x=>console.log(x))


// var a = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('3')
//     },300)
// })
// var b = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('2')
//     },200)
// })
// var c = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('1')
//     },100)
// })
// var d = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('4')
//     },400)
// })

// Promise.all([a, b, c, d]).then(res => console.log(res), res => console.log(res))