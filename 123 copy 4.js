var input = 'iloveeatingapple'.toLocaleLowerCase()

var len = input.length

var obj = {}

for(let i=0;i<len;i++){
    let n = input[i]
    if(n in obj){
        obj[n]=false
    }else{
        obj[n]=true 
    }
}

var arr1=[]
var arr2=[]

Object.keys(obj).forEach((key)=>{
    if(obj[key]){
        arr1.push(key)
    }else{
        arr2.push(key)
    }
})

console.log(arr2.sort().join(''))
console.log(arr1.sort().join(''))