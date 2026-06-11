/**
 * Q2. - Write a JavaScript program to get the last n elements of an array.
 * [n can be any positive number ]
 * for example : for array [7,9,0,-2]
 * and n = 3
 * 
 * print [9,0,-2]
 */

let arr = [7,9,0,-2];
let n = 2;

let ans = arr.slice(-(n));
// ans from ans sheet 
let anssolut = arr.slice(arr.length-n);
console.log(ans );
console.log(anssolut);
