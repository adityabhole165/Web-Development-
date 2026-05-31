/**
 * Higher Order Functions 
 *  A function that does one or both :
 *      takes one or multiple functions as arguments
 *      returns a function 
 */

//High order function  - Takes multiple function as arguments

function multipleGreet(func, n){
    for(let i = 1; i<=n; i++){
        func();
    }
}

let greet = function() {
    console.log("hello");
}

multipleGreet(greet, 2);