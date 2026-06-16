/**
 * Write a Js Program to delete all occurances of elemet 'num' in a given array.
 * 
 * example :
 *  if arr=[1,2,3,4,5,6,2,3] and num = 2
 * result should be arr = [1,3,4,5,6,3]
 */
let arr = [1,2,3,4,5,6,2,3];
let num = 2;

for(let i = 0; i < arr.length; i++){
    if(arr[i] == num) {
        arr.splice(i,1);
    }
}
console.log(arr);
