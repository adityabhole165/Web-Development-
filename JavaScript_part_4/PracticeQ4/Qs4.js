/**
 * Print the factorial of a number n .
 * [factorial of a number is the product of all positive integers less than or equal to a given positive integer and denoted by that integer.]
 * 
 * example -  
*      7! (factorial of 7) - 1*2*3*4*5*6*7 =5040
    5! ( factorial of 5 ) - 1*2*3*4*5 = 120
    3! (factorial of 3 ) - 1*2*3 = 6
    0! is always 1
 */

    let n = 5;
    let factorial  = 1;

    for(let  i = 1; i <= n; i++){
        factorial *= i;
    }
    console.log(`Factorial of ${n} is ${factorial }`);
    