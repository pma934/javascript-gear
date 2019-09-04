function Promise(fn) {
    let that = this
    this.resolvedCb = []
    this.rejectedCb = []

    let resolve = function (value) {
        if (value instanceof Promise) {
            value.then(resolve, reject)
        } else {
            queueMicrotask(() => {
                that.resolvedCb.forEach(cb => cb(value))
            })
        }
    }
    let reject = function (reason) {
        queueMicrotask(() => {
            that.rejectedCb.forEach(cb => cb(reason))
        })
    }
    try {
        fn(resolve, reject)
    } catch (e) {
        reject(e)
    }
}
Promise.prototype.then = function (onFulfilled, onRejected) {
    onFulfilled = onFulfilled instanceof Function ? onFulfilled : r => r
    onRejected = onRejected instanceof Function ? onRejected : r => {
        throw r
    }
    return new Promise((resolve, reject) => {
        this.resolvedCb.push(function (value) {
            try {
                resolve(onFulfilled(value))
            } catch (e) {
                reject(e)
            }
        })
        this.rejectedCb.push(function (reason) {
            try {
                resolve(onRejected(reason))
            } catch (e) {
                reject(e)
            }
        })
    })
}

console.log('a')
new Promise((resolve, reject) => {
        reject(1)
    }).then().then()
    .then(res => console.log('res', res),
        err => console.log('err', err)
    )
console.log('b')
new Promise((resolve, reject) => {
    resolve(new Promise((re, rj) => {
        rj(2)
    }))
}).then(res => console.log('res', res),
    err => console.log('err', err)
)
console.log('c')
new Promise((resolve, reject) => {
    reject(new Promise((re, rj) => {
        rj(3)
    }))
}).then(res => console.log('res', res),
    err => console.log('err', err)
)
console.log('d')