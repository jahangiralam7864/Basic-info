// variable check

/*
1.var => var diye amra onek gulo value ak name a declared korty pari
2.let => let use kore amra same data declared korty pari na
3.const => const declared kore amra same value col korle error dibe.
*/


// js data type check 
var a = 33;
var b = 'md jahangir alam';
var c = true;
console.log(typeof a,b,c);

// Js data type check and data
    /*
    1. number
    2.string
    3.boolean
    4.undefined
    5.null
    6.object
    7.symbol
    */

// Example :
var a = 'hello';
var b = a;
console.log(a,b); //result : hello hello
a = 'gello';
console.log(a,b); //result : gello hello 

//object declared 
const x = {job:'web developer'}
const y = x;
console.log(x,y);
//Ex:
x.job = 'front end developer';
console.log(x,y);

// true <=> false check information
const jahangir = true;
if (jahangir) {
    console.log('variable is truthy');
}else{
    console.log('variable is falsy');   
}
// or
const joy = false;
if (joy) {
    console.log('variable is truthy');
}else{
    console.log('variable is falsy');   
}
// or
const Null = null;
console.log('Hello', Null);//result: null
//or
let m = parseInt('Hello');
console.log('value of m', m); //result: NaN

// variable value without assigned result: (undefined)
let first;
console.log(first); //result: undefined

//or
//function but not write return anything
function second(x,y) {
    const sum = x + y;
    // return sum; // jodi return na kori taile undefined dekhabe
}
const result = second(10,20);
console.log(result); //result: undefined

//return check
//jodi kono function add kore kno value add na kori taile undefined print hobe
function add(a,b) {
    const total = a + b;
    if(b < 10){
        return; // (total)
    }
}
const fourth = add(3,5);
console.log(fourth);
//or
//jodi kono parameter a 2 ta value theke, then kono aktar value add kori, and onno tar kono value add na kori taile undefined dibe.
function double(a,b) {
    const result = a * 2;
    return result;
}
double(20);

// jodi kono object ar value na add kora hoi, then take print kori taile amake undefined dekhabe
const fifth = {name:'sogir', age: 15, location: 'bandarbon'};
console.log(fifth.phone); // (phone)

//jodi kono array k index ar baire call kori taile setar jonno undefine dibe
const sixth = [10,29,4,54,6];
console.log(sixth[5]);

// equal (==) vs triple equal (===) conversion
//equal to value check equal to sudhu man check korbe, jo   di man same hoi taile true print hobe,hok seta string and number don't mater
const k = 3;
const l = '3';
if (k == l) {
    console.log('condition is true');
}
else{
    console.log('condition is false');
}

// (===) equal man check korbe , and value same ase naki setaw check korbe
const H = 3;
const f = '3';
if (H === f) {
    console.log('condition is true');
}
else{ 
    console.log('condition is false');
}


const favNum = 27;
function add(first,second) {
    const results = first + second;
    console.log(results);
    console.log('favNum');
    return results;
}
const prints = add(10);

function dekbo(prothom, ditiyo) {
    const sum = prothom + ditiyo;
    if (sum > 10) {
        const mood = 'happy';
        console.log(mood);
    }
    return sum;
}
const test = add(11,30);

