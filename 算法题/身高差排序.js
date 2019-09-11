//4个人身高已知，最大高度差为8，求排序有多少重
var N = 4,M = 8,heights = [5,16,8,10];
var can = heights.slice(1)
var people = heights.slice(0,1)
var times = 0

function ppp(people,can){
    if(can.length === 0){
        if(Math.abs(people[0]-people[N-1]) <= M ){
            console.log(people)
            times++
        }
    }else{
        let len = people.length
        for(let i in can){
            let h = can[i]
            if(Math.abs(h-people[len-1]) <= M){
                let newCan = can.slice(0,i).concat(can.slice(i*1+1))
                let newPeople = people.concat([h])
                arguments.callee(newPeople,newCan)
            }
        }
    }
}

ppp(people,can)

console.log(times)