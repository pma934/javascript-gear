// function IsPopOrder(pushV, popV) {
//     let len = popV.length
//     if (!len) {
//         return true;
//     }
//     if (len != pushV.length) {
//         return false
//     }

//     sI = pushV.indexOf(popV[0])
//     if(sI == -1){
//         return false
//     }

//     pushV_ = pushV.splice(sI)

//     popV_ = popV.splice(0, len - sI)

//     res = IsPopOrder(pushV_.slice(1), popV_.slice(1))

//     if (res) {
//         res = ccc(pushV, popV)
//     }

//     return res
// }

// function ccc(pushV, popV){
//     for(a of pushV){
//         if(a != popV.splice(-1,1)){
//             return false
//         }
//     }
//     return true
// }

function IsPopOrder(pushV, popV) {
    let stack =[]
    while(1){
        if(pushV.length == 0){
            break
        }
        if(pushV[0]== popV[0]){
            pushV.shift()
            popV.shift()
        }else{
            stack.push(pushV.shift())
        }
    }
    
    stack.reverse()
    for(value of stack){
        if(value == popV[0]){
            popV.shift()
        }
    }
    
    return !popV.length
}


a = IsPopOrder([1,2,3,4,5,6,7,8],[5,6,8,7,4,3,2,1])
