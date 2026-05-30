/**
 * Return -
 *  Return keyword is used to return value from the function
 * 
 * input -> function -> output
 * 
 * function FuncName(args1, args2...){
 *      // do something
 *      return val; 
 * }
 */

function sum(a,b) {
    return a+b;
}

let s = sum(3,4);
console.log(s);

console.log(sum(44,90));

console.log(sum(sum(1,2),3));


//code is unreacheble which is return after retrun keyword statement
function sum(a,b) {
    console.log("hello");
    console.log("hello");
    return a+b;
    console.log("hello");
    console.log("hello");
    
}

console.log(sum(2,2));

// return statment retutrn single value and single statement
