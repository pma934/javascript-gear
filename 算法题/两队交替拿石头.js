//两队分别拿石头，最开始第一队可以最多拿两块，两队交替拿，每次最多拿前一队的两倍个，石头序列如下，问第一队最多可以得多少分
var N = 5;
var stones = [2,7,9,4,3]

var value = 0
var max = 2
var index = 0

function myTeam(value,max,index){
    if(N-index<=max){
        let can = stones.slice(index)
        value = can.reduce((x,y)=>x+y,value)
        return value
    }else{
        let ttt = []
        for(let i=1;i<=max;i++){
            let can = stones.slice(index,index+i)
            let newValue = can.reduce((x,y)=>x+y,value)
            ttt.push(otherTeam(newValue,2*i,index+i))
        }
        return Math.max(...ttt)
    }
}

function otherTeam(value,max,index){
    if(N-index<=max){
        return value
    }else{
        let ttt = []
        for(let i=1;i<=max;i++){
            ttt.push(myTeam(value,2*i,index+i))
        }
        return Math.min(...ttt)
    }
}

res = myTeam(0,2,0)
console.log(res)