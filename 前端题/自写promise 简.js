const WAIT = 'wait'
const RSV = 'resolved'
const RJS = 'rejected'

function MyPromise(fn) {
    const that = this
    that.status = WAIT
    that.value = null
    that.rsvCb = []
    that.rjsCb = []

    function resolve(value) {
        if (that.status === WAIT) {
            that.status = RSV
            that.value = value
            that.rsvCb.map(cb=>cb(value))
        }
    }

    function reject(value) {
        if (that.status === WAIT) {
            that.status = RJS
            that.value = value
            that.rjsCb.map(cb=>cb(value))
        }
    }

    try {
        fn(resolve, reject)
    } catch (e) {
        reject(e)
    }
}

MyPromise.prototype.then = function (rsvFn, rjsFn) {
    rsvFn = rsvFn instanceof Function ? rsvFn : () => rsvFn
    rjsFn = rjsFn instanceof Function ? rjsFn : () => rjsFn

    if (this.status === WAIT) {
        this.rsvCb.push(rsvFn)
        this.rjsCb.push(rjsFn)
    }
    if (this.status === RSV) {
        console.log('sync')
        rsvFn(this.value)
    }
    if (this.status === RJS) {
        rjsFn(this.value)
    }

    
}

new MyPromise((resolve, reject) => {
    console.log(123)
    setTimeout(function () {
        resolve(456)
        reject(789)
    }, 3000)
}).then(res => console.log(res), err => console.log(err))