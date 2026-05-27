// Function with Argument
/**
 * values we pass to the function
 * function funcName(args 1, args 2){
 *  // do somethings 
 * }
 */
/**
 * In functions Order is Important 
 * when we pass the args as per passing order it stored in arg variables
 *  as per varibles order defined pass values as per this 
 */

function printName(name) {
    console.log(name);  
}

function printInfo(name,age) {
    console.log(`${name}'s is ${age}`);  
}

printName("Aditya")
printInfo("Aditya")
printInfo("Arjun",30)
printInfo(30)

function sum(a, b) {
    console.log(a+b);
}

sum(1,2)
sum(4,5)
sum(7,6)
sum(4555,78932)