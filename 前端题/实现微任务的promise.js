function Promise(fn) {
    let that = this
    this.resolvedCb = []
    this.rejectedCb = []
    this.state = 'pending'

    let resolve = function (value) {
        if (value instanceof Promise) { //解决resolve包裹promise的问题
            value.then(resolve, reject)
        } else {
            queueMicrotask(() => {
                if (that.state === 'pending') {
                    that.state = 'resolved'
                    that.resolvedCb.forEach(cb => cb(value))
                }
            })
        }
    }
    let reject = function (reason) {
        queueMicrotask(() => {
            if (that.state === 'pending') {
                that.state = 'rejected'
                that.rejectedCb.forEach(cb => cb(reason))
            }
        })
    }
    try {
        fn(resolve, reject)
    } catch (e) {
        reject(e)
    }
}
Promise.prototype.then = function (onFulfilled, onRejected) {
    //解决透传的问题
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
        resolve(1)
    }).then().then()
    .then(res => console.log('res', res),
        err => console.log('err', err)
    )
console.log('d')