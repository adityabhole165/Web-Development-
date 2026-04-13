let Fruits = [ "banana","mango","pineapple","apple"];
for (let index = 0; index < Fruits.length; index++) {
   console.log(index, Fruits[index]);   
}
console.log("reverse order");
for (let index = Fruits.length-1; index >=0 ; index--) {
   console.log(index, Fruits[index]);   
    
}
console.log("odd indexed");
for (let index = 1; index < Fruits.length; index = index+2) {
   console.log(index, Fruits[index]);   
}
console.log("even indexed");
for (let index = 0; index < Fruits.length; index = index+2) {
   console.log(index, Fruits[index]);   
}
Fruits.push("Chiku");
console.log(Fruits);
console.log("reverse order");
for (let index = Fruits.length-1; index >=0 ; index--) {
   console.log(index, Fruits[index]);   
}