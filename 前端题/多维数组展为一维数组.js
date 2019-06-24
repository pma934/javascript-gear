var list = [[1,2],3,[4,5,6],[7,8,[9,10]],11,[12,13]]
var newlist = []

function getlist(list){
  for(let l of list){
    if(Object.prototype.toString.call(l) === "[object Array]"){
      arguments.callee(l)
    }else{
      newlist.push(l)
    }
  }
}
getlist(list)
console.log(newlist)