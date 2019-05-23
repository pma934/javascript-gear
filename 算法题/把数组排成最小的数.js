function PrintMinNumber(numbers)
{
    // write code here
    if(!numbers.length){
        return ;
    }
    
    numbers.sort((x,y)=>{
        x = String(x)
        y = String(y)
        return compare(x,y)
    })
    
    return numbers.join("")
}

//对于compare函数更cool的思路是 x+y 和 y+x比较
function compare(x,y){
    let i = Math.min(x.length,y.length)
    if(x.slice(0,i)>y.slice(0,i)){
        return 1
    }else if(x.slice(0,i)<y.slice(0,i)){
        return -1
    }else{
        if(x[i]){
            return compare(x.slice(i),y)
        }
        if(y[i]){
            return compare(x,y.slice(i))
        }
        return 0
    }
}

var a = PrintMinNumber([3456,34523452,345,3452,345345,3453452])


