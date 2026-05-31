/**
 * Scope - Scope detrmines the accessibility of variables, objects , and functions from differnet parts of the code 
 * function , Block , lexical 
 * 
 * Function Scope -
 *      Variables defined inside a function are not accessible (visible) from outside the Function. 
 * 
 *      if function scope is not present then it take value of global scope variable.
 * 
 * 
 */

// Function Scope

let sum = 54 //Global Scope

function CalSum(a,b){
    let sum = a + b; // function Scope 
    console.log(sum);
}
CalSum(1,4);
console.log(sum);