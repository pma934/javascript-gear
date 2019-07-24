function Fibonacci(n) {
    var Fibb = {
        0: 0,
        1: 1
    }

    function Fib(n) {
        if(n <2){
            return n
        }
        else if (Fibb[n]) {
            return Fibb[n]
        } else {
            Fibb[n] = Fib(n - 1) + Fibb[n - 2]
            return Fibb[n]
        }
    }
    return Fib(n)
}

var a = Fibonacci(12) 

console.log(a)

// 又是斐波拉契

function rectCover(number)
{
    // write code here 又是斐波拉契
    if(number == 1){
        return 1
    }
    let a = [1,1]
    while(number--){
        a = [a[1],a[0]+a[1]]
    }
    return a[0]
}