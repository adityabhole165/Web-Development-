/**
 *  Lexical Scope
 *  a variable defined outside a function can be accessible inside another function defined after the variable declaration  .
 * 
 * the opposite is not true 
 * 
 *  use nested Function  
 */

function outerFunc(){
    let x = 5;
    let y =6;

    function innerFunc() { //function scope
        let a = 10;
        console.log(x);
        console.log(y);
    }

    // console.log(a);
    innerFunc();    
}

outerFunc()