var len = 2
var arr = [1,2]

var arrx2 = new Array(len).fill(0).map(()=>new Array(len).fill(Infinity))

arrx2[0] = [...arr]

for(let i=1;i<len;i++){
    for(let j=0;j+i<len;j++){
        arrx2[i][j] = Math.max(arrx2[i-1][j],arr[j+i])
    }
}


var res = arrx2.map(x=>Math.min(...x))

console.log(res)



