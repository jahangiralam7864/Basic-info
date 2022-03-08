const bottle = {
    color: 'red', 
    hold: 'water', 
    price: '50',
    isCleaned: true
};
// const keys = Object.keys(bottle);
// // console.log(keys);  // key check korty use korbo
// const values = Object.values(bottle);
// // console.log(values); // value check korty use korbo
// const pairs = Object.entries(bottle);
// console.log(pairs); // array check korbo

//or

for(const prop in bottle){
    // console.log(prop, bottle[prop]);
}
const keys = Object.keys(bottle);
for(const prop of keys){
    console.log(prop, bottle[prop]);
}

//javascript object compare option
const first = {a: 100};
const second = {a: 100};
if (first == second) {
    console.log('object are equal');
}
else{
    console.log('object are different');
}

const obj = {
    a:1, 
    b:7, 
    c:3, 
    length:2
};
console.log(Object.keys(obj).length);

const obj1= {
    module: 35, 
    video:2
}; 
const obj2= {
    module: 35, 
    video:2
};
console.log(obj1 === obj2);

const getGirlFriend = (name = "chokina")=>"name"; console.log(getGirlFriend()); 

