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
//Max number check
const max = Math.max(10,20,30,40,50);
const maxInArray = Math.max(...numbers);
console.log(max,maxInArray);

numbers.push(100);
console.log(numbers);
// first number add
const jahangir = [45, 12, 36, 84];
jahangir.unshift(25);
console.log(jahangir);

//ES6 diye function col
function getSum(a, b =9) {
    return a + b;
}
console.log(getSum(2,7));

// const y = x => x*x;
// const z = y(5)
// console.log(z);

const y = x => x*x; 
const z = y(5);
console.log(z);

const nayikas=['mousumi' , 'popy' ,'shabnur', 'purnima' ];
const array2 = [...nayikas];
console.log(array2);

const num=[10,20,30,40,50,60,70];
 x = Math.max(...num);
console.log(x);
// new array add
const cars=['toyota', 'honda','mercedes']; 
const newCars= [...cars , 'ferrari']; 
console.log(newCars);

// object information add DOM 

// const fish = {id:50, name:'King Halsha',price:9000,phone:0194849584 3,address:'chandpur',dress:'silver'};
// console.log(fish.phone);

const company = {
    name:'GP', 
    ceo: {
        id:1, 
        name: 'jahangir', 
        food:'fuckha'
    } ,
    web: {
        work:'website development', 
        employee: 20, 
        framework:'react'
    }
};

// const work = company.web.work;
// const framework = company.web.framework;
//or
const {work, framework} = company.web;
const {food} = company.ceo;
console.log(work,framework,food);

const [first, last] = ['jahangir', 'alam'];
console.log(first,last);