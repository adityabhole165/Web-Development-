// Get Values
// Js Automatically converts object keys to string
// Even if we made the number as a key , the number will be converted to string.


const obj ={
    1: "a",
    2: "b",
    true: "c",
    null:"d",
    undefined:"e"
}

// in this Obj defined null Js dont read as reserved null 
// it consider  null in String 
"null"
null

console.log(obj[1] );

obj[1] 
// here this 1 converted to string then it matched with 1 inside obj properties
// Interview Ques - I created a object and write 1 then is that 1 is object or index 
// Ans - its a String



