const even = (element) => element % 2 === 0;
const arrayTest = [2, 4, 6];
const arrayTest2 = [2, 3, 6];

function every(array, predicate) {
    for (let element of array) {
        if (!predicate(element)) return false;
    }
    return true;
}

function every2(array, predicate) {
    return !array.some(element => !predicate(element));
}

console.log(every(arrayTest, even));
console.log(every(arrayTest2, even));

console.log(every2(arrayTest, even));
console.log(every2(arrayTest2, even));