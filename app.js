console.log("Testing");

// 1. Find the Smallest and Biggest Numbers Create a function that takes an array of numbers and 
// return both the minimum and maximum numbers, in that order.

function smallestToBiggest(arr) {
    let smallest = Math.min(arr);
    let biggest = Math.max(arr)

    return[smallest, biggest]
}

function sumOfNumbers() {
    let sum = 0;

    for (let i = 1; i <= n ; i++) {
        sum += i;
    }
    return sum
}

const message = "Breakfast at 09:00 in the room 123:456";
const regex = /\b\d{2}:\d{2}\b(?!:\d{3}:\d{3})/g;
const matches = message.match(regex);

if (matches) {
  console.log(matches);
} else {
  console.log("No matches found.");
}

function largestSwap(num) {
    if (num >= 10 && num <= 99) {
        let tenDigit = Math.floor(num / 10);
        let oneDigit = num % 10;

        return num >= oneDigit * 10 + tenDigit
    }
    else{
        return false
    }
}

function redundant(str) {
    return function() {
        return str
    }
}

function countDigits(num) {
    if (num < 0) {
        num = Math.abs(num);
    }

    let numStr = num.toString();
    return numStr.length;
}

function Multiples(num, length) {
    if (length <= 0) {
        return [];
    }

    const multiples = [];
    for (let i = 1; multiples.length < length; i++) {
        multiples.push(num * i);
    }

    return multiples;
}

function Sorting(arr) {

    function compare(a, b) {
        if (Array.isArray(a)) a = a[0];
        if (Array.isArray(b)) b = b[0];
        return a - b;
    }

    return arr.sort(compare);
}