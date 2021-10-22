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
}

let test = new Group();
let test2 = Group.from([10, 20, 30, 40]);
test.add("string");
test.add(4);
test.add(4);
console.log(test);
console.log(test.has(1));
console.log(test2);