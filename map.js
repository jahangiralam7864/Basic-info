 const numbers = [1,2,4,5,6,7];
 const output = [];
// Step one
 function doubleOld(number) {
     return number * 3;
 }
// Step two
const doubleIt = number => number * 2;
console.log(doubleIt);

// step three
 for(const number of numbers){
     const result = doubleOld(number);
     output.push(result);
 }
 console.log(output);

// map kore kono valu print kora
const print = numbers.map(x => x * 2);
console.log(print);

// const square a valu k array print kora
const square = numbers.map(x => x * x);
console.log(square);

