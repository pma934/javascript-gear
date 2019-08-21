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
var sets = new Array(len).fill(1).map(_ => new Set())
for (let i = 0; i < len; i++) {
    readline().split(',').map(x => sets[i].add(x))
}

//
for (let i = 0; i < peoples.length; i++) {
    let people = peoples[i]
    for (let j = 0; j < sets.length; j++) {
        let set = sets[j]
        if (set.has(people)) {
            set.forEach(i => {
                if (peoples.indexOf(i) === -1) {
                    peoples.push(i)
                }
            })
            sets.splice(j,1)
            j--
        }
    }
}

console.log(peoples.length)