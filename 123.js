const III = [
    'Jack',
    '3',
    'Jack,Tom,Anny,Lucy',
    'Tom,Danny',
    'Jack,Lily'
]
let OOO = 0

function readline() {
    return III[OOO++]
}


//init
var peoples = [readline()]
var len = +readline()
var arrs = new Array(len).fill(1)
for (let i = 0; i < len; i++) {
    arrs[i] = readline().split(',')
}

//
for (let i = 0; i < peoples.length; i++) {
    let people = peoples[i]
    for (let j = 0; j < arrs.length; j++) {
        let arr = arrs[j]
        if(arr.indexOf(people)!==-1){
            arr.forEach(i => {
                if (peoples.indexOf(i) === -1) {
                    peoples.push(i)
                }
            })
            arrs.splice(j,1)
            j--
        }
    }
}

console.log(peoples.length)