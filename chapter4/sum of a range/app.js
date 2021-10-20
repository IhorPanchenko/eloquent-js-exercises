function range(start, end, step = start < end ? 1 : -1) {
    let numbers = [];
    if (step > 0) {
        for (let i = start; i <= end; i += step) numbers.push(i);
    }
    else {
        for (let i = start; i >= end; i += step) numbers.push(i);
    }
    return numbers;
}

function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) total += arr[i];
    return total;
}

console.log(range(4, 1));
console.log(range(1, 10, 2));
console.log(sum(range(1, 10)));