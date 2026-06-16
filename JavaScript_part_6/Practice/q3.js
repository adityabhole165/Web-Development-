/**
 * Write a JavaScript function that accepts a list of country as input and returns the longest country name as output
Example  =  country = ["Australia","Germany","United States of America"]
output - "United States of America" 

*/

let country =["Australia","Germany","United States of America"];

function longestName(Country) {
    let ansIdx = 0 ;
    for(let i = 0; i< country.length; i++){
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;

        if(currLen > ansLen){
            ansIdx = i;
        }
    }
    return country[ansIdx];
}

console.log(longestName(country));
