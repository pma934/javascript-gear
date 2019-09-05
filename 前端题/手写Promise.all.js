//传入的参数可能是promise，也可能就只是个参数
Promise.all = function (promises) {
    let resolveList = []
    return new Promise((resolve, reject) => {
        if(promises.length === 0){ //promises为空数组的情况下，会返回resolve([])
            resolve(resolveList)
        }
        promises.forEach((p,i) => {
            Promise.resolve(p).then(re => {
                resolveList[i] = re
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

var a = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('3')
    },300)
})
var b = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('2')
    },200)
})
var c = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('1')
    },100)
})
var d = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('4')
    },400)
})

Promise.all([a, b, c, d]).then(res => console.log(res), res => console.log(res))
//Promise.all([]).then(res=>console.log(res),err=>console.log(err))