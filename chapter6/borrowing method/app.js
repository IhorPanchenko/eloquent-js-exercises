function hello() {
    console.log('Hello', this)
}

const person = {
    name: 'Ihor',
    age: 28,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Age is ${phone}`)
        console.groupEnd()
    }
}

person.logInfo()

const john = {
    name: 'John',
    age: 31
}

person.logInfo.bind(john, 'Frontend', '1-123-456-78-90')()
person.logInfo.call(john, 'Frontend', '1-123-456-78-90')
person.logInfo.apply(john, ['Frontend', '1-123-456-78-90'])

const array = [1, 2, 3, 4, 5]

Array.prototype.multBy = function(n) {
    return this.map(function(i) {
        return i * n
    })
}

console.log(array.multBy(20))