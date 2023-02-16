console.log("This is tut10");

// Functions and Scope in JavaScript:

//This code is not good because its increase the line of code.
//I wanna use function in this situation.
let x = "Jarviz";
let y = "Ali";
console.log(`1Happy Birthday ${x} “Best wishes on your birthday – may you have many, many more.” `);
console.log(`2Happy Birthday ${y}. Best wishes on your birthday – may you have many, many more. `);

//  Functions
function greet(name, thank) {
    console.log(`3Happy Birthday ${name} “Best wishes on your birthday – may you have many, many more. ${thank}” `);
    return 4;
}
let name = "Jarviz";
let val = greet(name, 'thanks a lot');
console.log(val);

//2nd method with string not with console.log:
function greet(name2, thank = 'thank you') {
    msg = `4Happy Birthday ${name2} “Best wishes on your birthday – may you have many, many more. ${thank}” `;
    return msg;
}
let name2 = "Jarviz";
let val2 = greet(name2);
console.log(val2);

//You can put a function into variable:

let mygreet = function(name3, thank = 'thank you') {
    msg = `5Happy Birthday ${name3} “Best wishes on your birthday – may you have many, many more. ${thank}” `;
    return msg;
}
let name3 = "Jarviz";
let val3 = mygreet(name3);
console.log(val3);

//Function in Object:

let myobj = {
    name:"Ali",
    age:21,
    gammer:function(){
        return "GTA"
    }   
}
console.log(myobj.age);
console.log(myobj.gammer());


arr = ['fruit','vegetables','chicken'];
arr.forEach(function(element,index,array){
    console.log(element,index);
    
});

//Scope:
//let and const has block level scope! let and const is more important and we use in our code.
// block level scope (let and const):

let i =234;
if(1){  
console.log(i);
}
console.log(i);

function ui(name){
    let i = 3;
    console.log(i);
    return `This is the ${name} ui`;
}
console.log(ui('jarviz'),i);

//2nd code://agr function ky andr hi let likha jaye tab vo value 245 return kary ga :

let k = 245;
console.log(k);
function vi(name){
    k = 19,
    console.log(k);
    return `This is the ${name} ui`;
}
console.log(vi("Jarviz"), k);

// var has function level scope! 

if(1){
    var n = 234;  
    console.log(n);
    }
    console.log(n);
    
    function ui(name){
        let i = 3;
    console.log(i);
        return `This is the ${name} ui`;
    }
    console.log(ui('jarviz'),n);

 //2nd method : In this case j ki 234 value hi aye gi kun ky function level scope hai
var j = 235;
console.log(j);
function xi(name){
    var j = 29;
    return `This is the ${name} ui`;
}
console.log(xi('jarviz'),j);