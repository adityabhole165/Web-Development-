// Qs for the given Start state of an
// array changes it to final from using method
// start : ['january','july','march','augast']
// final : ['july','june','march','augast']

 let months = ['january','july','march','augast']
months.shift();
months.shift();
months.unshift("june");
months.unshift('july');
console.log(months);
