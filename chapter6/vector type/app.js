class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(otherVec) {
        return new Vec(this.x + otherVec.x, this.y + otherVec.y);
    }

    minus(otherVec) {
        return new Vec(this.x - otherVec.x, this.y - otherVec.y);
    }

    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

let vec = new Vec (3, 4);
console.log(vec.plus(new Vec(2, 3)));
console.log(vec.minus(new Vec(2, 3)));
console.log(vec.length);