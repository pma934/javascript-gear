class User {
    constructor(name) {
        this.name = name
        this.log = []
        this.room = null
    }
    showLog() {
        this.log.forEach(x => console.log(x))
    }
    into(chatRoom) {
        this.room = chatRoom
        this.room.into(this)
    }
    send(msg, user) {
        if (this.room) {
            this.room.send(this, msg, user)
            this.log.push(`you send ${user&&user.name||'all'}:${msg}`)
        }
    }
    receive(msg, from) {
        this.log.push(`${from.name} to you:${msg}`)
    }
}

class ChatRoom {
    constructor() {
        this.user = []
        this.log = []
    }
    into(user) {
        this.user.push(user)
    }
    send(from, msg, to) {
        if (to) {
            this.log.push(`${from.name} to ${to.name}:${msg}`)
            if (this.user.indexOf(to) !== -1) {
                to.receive(msg, from)
            }
        } else {
            this.log.push(`${from.name} to all:${msg}`)
            this.user.forEach(user => {
                if (user !== from) {
                    user.receive(msg, from)
                }
            })
        }
    }
    showLog() {
        this.log.forEach(x => console.log(x))
    }
}



var room = new ChatRoom()
var a = new User('A')
var b = new User('B')
var c = new User('C')

a.into(room)
a.send('有人吗?')
b.into(room)
c.into(room)
b.send('有人吗?')
c.send('有人吗?')
a.send('有', b)
c.send('有')


console.log('--room-')
room.showLog()
console.log('---a---')
a.showLog()
console.log('---b---')
b.showLog()
console.log('---c---')
c.showLog()