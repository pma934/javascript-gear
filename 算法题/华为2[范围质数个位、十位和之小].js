var low = 1
var high = 20

let list = []

var zhishu = function(num){
    if(num%2 === 0){
        return false
    }
    let max = Math.ceil(Math.sqrt(num))
    for(let i=3;i<=max;i=i+2){
        if(num%i===0){
            return false
        }
    }
    return true
}

for(let n = low;n<high;n++){
    if(zhishu(n)){
        list.push(('00'+n).slice(-2))
    }
}

var shi = 0
var ge = 0

list.forEach(x=>{
    shi += +x[0]
    ge += +x[1]
})

console.log(Math.min(shi,ge))