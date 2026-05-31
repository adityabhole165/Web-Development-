/**
 * Block scope - 
 * Variable declared inside a {} cannot be accessed from outside Block
 * 
 *  Block Scope is Applied only on const and let type declared variables 
 */

//block scope

    {
        let a =55
        const b =4
        var v =552
    }

// console.log(a);
// console.log(b);
// console.log(v); 


for(let j = 0; j< 6 ; j++){
    console.log(j);
}
/**
 * 
console.log(j);
 */
// this not take value cause j is out of block 


let age = 25;
if(age >=18){
    let str = "adult";
    console.log(str); // it will print 
}
console.log(str); // it not print cause of block scope 