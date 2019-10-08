var list = [
  [1, 2], 3, [4, 5, 6],
  [7, 8, [9, 10]], 11, [12, 13]
]
var newlist = []

function getlist(list) {
  for (let l of list) {
    if (Object.prototype.toString.call(l) === "[object Array]") {
      arguments.callee(l)
    } else {
      newlist.push(l)
    }
  }
}
getlist(list)

var alist = Array.prototype.concat.apply([], list) //一层
var blist = list.flat(Infinity)
var clist = list.reduce((x, y) => { //一层
  return x.concat(y)
}, [])

console.log(alist)
console.log(blist)
console.log(clist)
console.log(newlist)