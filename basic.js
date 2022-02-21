
// variable declare 
var deposit = 400;
// condition check
if (deposit > 500) {
    alert("Hello! I am an alert box!!");
}if (deposit < 200) {
    alert("I love my country!!");
}if (deposit == 500) {
    alert("Hello! I am an alert box!!");
}if (deposit != 500) {
    alert("Hello! I am an alert box!!");    
}if (deposit >= 500) {
    alert("Hello! I am an alert box!!");
}if (deposit <= 500) {
    alert("Hello! I am an alert box!!");
}else {
    alert("md jahangir alam!!");
}
// array 
const numbers = [23,35,658,100,20];
const numberCount = numbers.length;
numbers.push(120);
numbers.pop();
numbers[2] = 555;
// check whether 222 included in the array
if (numbers.indexOf(222) != -1) {
    // not value
}
if (numbers.includes(222)) {
    // right value
}
// loop / while / for
const iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value); //result = 11,21,31
}
// function
function fullName(first,second) {
    const names = first+ ' ' + second;
}
const person = fullName('jahangir', 'joy');
// object 
const bottle = {color: 'yellow', contain: 'water',price: '50'}