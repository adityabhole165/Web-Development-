/**
 * Actions that can ber perfomed on an objects
 * 
 */

const calculator = {
    add: function(a,b) {
        return a+b;
    },
    sub : function(a,b) {
        return a - b;
    },
    mul : function(a,b) {
        return a * b;
    }

};

console.log(calculator);
console.log(calculator.add(12,63));


// Methods (Shorthand)

const calculators = {
    add(a,b) {
        return a+b;
    },
    sub(a,b){
        return a-b;
    }
}

console.log(calculators);

