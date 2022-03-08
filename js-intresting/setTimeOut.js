// setTimeOut diye amra result coll korbo
function doSomething() {
    console.log('I am codding javascript');
}

setTimeout(doSomething, 5000);
console.log('second : I am the second parson');
console.log('first: ami sobar age');
console.log('third : ami 3 number parson');
console.log('fourth : ami ek hali purno korsi');
doSomething();// just ato tuko function add korle amra uporer output pabo

setTimeout(function () {
    console.log('Hello Bangladesh');
},5000);