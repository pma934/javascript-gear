// function a(x) {
//     console.log(x)
// }

//节流
function throttle(fn, ...args) {
    var timeout = null
    return function () {
        timeout = timeout === null ? setTimeout(() => {
            timeout = null
            fn(...args)
        }, 1000) : timeout
    }
}

//防抖
function debounce(fn,...args){
    var timeout = null
    return function(){
        clearTimeout(timeout)
        timeout = setTimeout(fn.bind(this,...args),3000)
    }
}

// b = debounce(a,123)

// for(let i in new Array(10).fill(1)){
//     b()
// }

// setInterval(throttle(a,123), 100)