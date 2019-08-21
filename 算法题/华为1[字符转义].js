var input = readline().split(' ')
var len = parseInt(input[0],16)
var list = input.slice(1).map(x=>x.toLocaleUpperCase())
for(let i=0;i<len;i++){
    if(list[i]==='A'){
        list.splice(i,1,'12','34')
        len++
        i++
    }else if(list[i]==='B'){
        list.splice(i,1,'AB','CD')
        len++
        i++
    }
}
var res = len.toString(16).toLocaleUpperCase()+' '+list.join(' ')
console.log(res)