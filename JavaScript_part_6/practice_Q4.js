// Create a Function that prints the multiplication table of a number

function printTable(n) {
    for(i = n; i<= n*10; i+=n){
        console.log(i);
    }
}

printTable(2);
printTable(7);