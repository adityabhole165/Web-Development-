// Higher Order Functions - Returns a function
function oddEvenTest(request) {
    if (request === "odd") {
        return n => n % 2 !== 0;
    }

    if (request === "even") {
        return n => n % 2 === 0;
    }

    return () => "Wrong request";
}

let isOdd = oddEvenTest("odd");

console.log(isOdd(7)); // true
console.log(isOdd(4)); // false