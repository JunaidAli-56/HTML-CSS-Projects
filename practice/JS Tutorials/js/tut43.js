console.log("this is tut 43.js");

//If we use 'aysnc' in function:it will return value in promises.
//await jo hai aysync ka kam karta hai background mein: means ky await ky time yeh function ky control ko wapis behjy ga baki sab execute ky liye sab ky baad await py aye ga.
//await means wait till everything will be execute then after that execute await.

// this code is an example.
async function jarviz(){
    console.log("inside jarviz function");
    const response = await fetch('https://api.github.com/users');
    console.log("before response");
    const user = await response.json();
    console.log("user resolved");
    return user;
    // return "Jarviz Ai";
}
console.log("Before calling jarviz");
let a = jarviz();
console.log("After calling jarviz");
console.log(a);
a.then(data => console.log(data));
console.log("last line of JS");


// It is the real code:
async function junxid(){
    const  response = await fetch('https://api.github.com/users');
    const  users    = await response.json(); 
    return users;
}
let atom = junxid();
console.log(atom);
atom.then(data1=>console.log(data1));