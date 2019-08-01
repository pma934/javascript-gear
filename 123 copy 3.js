var input = 'abc'

var len = input.length

var arr1 =[]
var arr2 =[]

for(let i=0;i<len;i++){
    let n = input[i]
    if(arr2.indexOf(n)!==-1){
        continue;
    }else if(arr1.indexOf(n)===-1){
        arr1.push(n)
    }else{
        arr2.push(n)
        arr1.splice(arr1.indexOf(n),1)
    }
}

console.log(arr2.sort().join('')+'\n'+arr1.sort().join(''))