let colors = ["red","yellow","blue","orange","pink","white"];
console.log(colors.slice());
// [ 'red', 'yellow', 'blue', 'orange', 'pink', 'white' ]
console.log(colors.slice(2));
// [ 'blue', 'orange', 'pink', 'white' ]
console.log(colors.slice(2,3));
// [ 'blue' ]
console.log(colors.slice(-2));
// [ 'pink', 'white' ]
// 

let cars = ["audi","bmw","xuv","pagani"];
console.log(cars.slice());
console.log(cars.slice(1));
console.log(cars.slice(1,3));
console.log(cars.slice(3));
console.log(cars.slice(cars.length-1));
console.log(cars.slice(6));
console.log(cars.slice(cars.length));
// negative value means take elements from last
console.log(cars.slice(-1));
console.log(cars.slice(-3));
console.log(cars.slice(-5));

