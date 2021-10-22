class Group {
    constructor() {
        this.content = [];
    }

    add(value) {
        if (!(this.content.includes(value))) this.content.push(value);
    }

    delete(value) {
        this.content = this.content.filter(v => v !== value);
    }

    has(value) {
        return this.content.includes(value);
    }

    static from(collection) {
        let group = new Group;
        for (let value of collection) {
            group.add(value);
        }
        return group;
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}

class GroupIterator {
    constructor(group) {
        this.group = group;
        this.position = 0;
    }

    next() {
        if (this.position >= this.group.content.length) {
            return {done: true};
        } else {
            let result = {value: this.group.content[this.position], done: false};
            this.position++;
            return result;
        }
    }
}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}