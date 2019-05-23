var list = [...Array(13)].map(()=>4)
var cha = 0
l = [[3,5,7],[2,6,8]]
for(var i = 0;i < 2; i++){
    lines = l[i]
    sum = lines[0]*1+lines[1]*1+lines[2]*1
    cha = i==0?cha+sum:cha-sum
    list[lines[0]*1-1]--
    list[lines[1]*1-1]--
    list[lines[2]*1-1]--
}
var last = 0
var list2 = list.map((value)=>{
    last += value
    return last
}) 


var z = 0
function win(x){
    var min = Math.max(1-x+1,1)
    for(let i = min;i<14;i++){
        k = Math.min(Math.max(i + x - 1,1),13)  
        z += k>=i?list[i-1]*(list2[k-1]-1):list[i-1]*list2[k-1]
    }
    return z/46/45
}
var p = win(cha)
