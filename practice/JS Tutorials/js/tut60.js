console.log("This is tut 60.js");

// Destructuring inJavaScript:

let a,b;
[a,b] = [34,786];
console.log(a,b);

// '...' stores all remaining numbers in 'd' like an Array;
[a,b,c,...d] = [1,2,3,4,5,6,7,8,9,10,11,12,13];
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// Array Destructuring
({a,b,c,...d}= {a:23,b:45,c:34,d:01,e:56,f:98});
console.log(a,b,c,d);

const fruits = ['Apple','Banana','Mango','Grapes'];
[a,b,c] = fruits;
console.log(a,b,c);


// Object Destructuring:

const laptop = {
    model: "Dell Latitude",
    gen:  "core i7 6th",
    price: 60000,
    color: "black",

    start: function(){console.log("Started");}
}
const {model, gen, price,start} = laptop;
console.log(model, gen, price,start);
start();