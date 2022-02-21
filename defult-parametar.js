// function a parameter add
function add(num1,num2 = 10) {//option-1
    // option - 2
    num2 = num2 || 0;
    // option - 3
    if (num2 == undefined) {
        num2 = 0;
    }
    const total = num1 + num2;
    return total;
}
const result = add(15,0);// akhane diclare kora man basi value
console.log(result);

function fullName(first, last = 'chowdhury') {
    const name = first + ' ' + last;
    return name;
}
const names = fullName('jahangir','alam');
console.log(names);
// New multi line add
const kobita = `Kobita tumi sopnocarani`;
const multiLine = 'this is my first line/n'+
    'this is my second line/n'+
    'this is my third line/n'+
    'this is my fourth line/n';
    console.log(multiLine);
const multiLineNew = `
    This is new line
    This is new line
    This is new line
    This is new line
`
console.log(multiLineNew);

// function declaration
function add(num1, num2) {
    return num1 + num2;
}
// function expression 
const add2 = function add2(num1,num2) {
    return num1 + num2;
}
// function expression (anonymous)
const add3 = function (num1, num2) {
    return num1 + num2;
}
// arrow function
const add4 = (num1,num2) => num1 + num2;

const sum1 = add(15,17);
const sum2 = add2(15,17);
const sum3 = add3(15,17);
const sum4 = add4(15,17);
console.log(sum1,sum2,sum3,sum4);
// array add
const addTest = (num1,num2) => num1 + num2;
const sum = (22,90);

const multiply = (num1,num2,num3,num4) => num1 * num2 *num3;
const results = multiply(4,12,3);

const tenTimes = (num) => num * 10;
const output = tenTimes(17);

const fiveTimes = num => num * 5;
const value = fiveTimes (17);

const getName = () => 'Brandon Sam';
const name = getName();

console.log(name);

// kono array upadan paite 
const numbers = [10,20,30,40,50];
console.log(numbers); //result = [ 10, 20, 30, 40, 50 ]
console.log(...numbers); //result = 10 20 30 40 50

const max = Math.max(10,20,30,40,50);
const maxInArray = Math.max(...numbers);
console.log(max,maxInArray);

numbers.push(100);
console.log(numbers);