//传入的参数可能是promise，也可能就只是个参数
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

var a = new Promise((resolve,reject)=>{
    resolve('1')
})
var b = new Promise((resolve,reject)=>{
    resolve('3')
})
var c = new Promise((resolve,reject)=>{
    resolve('c')
})
var d = new Promise((resolve,reject)=>{
    resolve('d')
})

Promise.all([2,a,b,c,d]).then(res=>console.log(res),err=>console.log(err))