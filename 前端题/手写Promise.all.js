//传入的参数可能是promise，也可能就只是个参数
function PromiseAll(promises) {
    return new Promise((resolve, reject) => {
        let arr = []
        if (promises.length === 0) {
            resolve(arr)
        } else {
            for (let i = 0; i < promises.length; i++) {
                Promise.resolve(promises[i]).then(res => {  //因为传入的可能就只是个参数，因此用resolve包装
                // promises[i].then(res => {
                    arr.push(res)
                    if(i === promises.length - 1){
                        resolve(arr)
                    }
                }, err => {
                    reject(err)
                })
            }
        }
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

PromiseAll([2,a,b,c,d]).then(res=>console.log(res))