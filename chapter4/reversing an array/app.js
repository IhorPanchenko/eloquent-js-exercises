function reverseArray(arr) {
    let newArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArray.push(arr[i]);
    }
    return newArray;
}

let test1 = [1, 2, 3];
let test2 = [4, 5, 6];

console.log((test1));
console.log("Array[0] before: " + test1[0]);
console.log(reverseArray(test1));
console.log("Array[0] after: " + test1[0]);

function reverseArrayInPlace(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let old = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = old;
    }
    return arr
}

console.log((test2));
console.log("Array[0] before: " + test2[0]);
console.log(reverseArrayInPlace(test2));
console.log("Array[0] after: " + test2[0]);