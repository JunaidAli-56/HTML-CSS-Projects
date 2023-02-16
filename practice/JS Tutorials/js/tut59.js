console.log('this is tut 59.js');

// JavaScript Symbol
// Symbol is premitive
let sym1 = Symbol();
console.log(sym1);

let sym2 = Symbol("my Identifier");
console.log(sym2);

let sym3 = Symbol();
console.log('the type of symbol is: ', typeof sym3);

const a = "this is"
const b = "this is"
console.log(a===b);
console.log(null===null);

const k1 = Symbol("identifier for k1");
const k2 = Symbol("for k2");

myObj = {};
myObj[k1] = "Jarviz";
myObj[k2] = "DarkSide";
myObj["name"] = "Bad Ai"

console.log(myObj);
console.log(myObj[k1]);

// In (for in loop) Symbols will be ignored
for(key in myObj){
    console.log(key, myObj[key]);
}

console.log(JSON.stringify(myObj));