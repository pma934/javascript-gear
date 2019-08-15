class Publisher {
    constructor() {
        this.subscribers = {}
    }
    on(topic, event) {
        if (!this.subscribers[topic]) {
            this.subscribers[topic] = []
        }
        this.subscribers[topic].push(event)
    }
    remove(topic, event) {
        let events = this.subscribers[topic]
        if (events) {
            let i = events.indexOf(event)
            if (i !== -1) {
                events.splice(i, 1)
            }
        }
    }
    emit(topic, ...args) {
        let events = this.subscribers[topic]
        if (events) {
            for (let key in events) {
                events[key](...args)
            }
        }
    }
}


var p = new Publisher()

p.on('click', function (x) {
    console.log(`click:${x}`)
})

p.on('scroll', function (x) {
    console.log(`scroll:${x}`)
})

p.emit('click', 'btn3')