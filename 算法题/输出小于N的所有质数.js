//输出小于N的所有质数

function output(N){
    if(N<3){return []}
    var arr = new Array(N>>>1).fill(0)   //去掉除二之外的偶数
    arr = arr.map((_,i)=>2*i+1)
    arr[0] = 2
    if(N<4){
        return arr
    }else{
        var len = Math.ceil(Math.sqrt(N))
        for(let i=3;i<len;i=i+2){       //每次+2，小于根号N
            arr = arr.filter(n=>n%i!==0||n===i)
        }
       return arr
    }
}


var p = output(200)
console.log(p)
