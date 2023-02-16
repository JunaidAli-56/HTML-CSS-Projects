console.log("This is Tutorial 53");

let name = "Jarviz";
let name1 = "Fiday";
let name2 = "E.D.I.T.H";
let name3 = "Vision";
console.log( name + " is a good Ai");
console.log( name1 + " is a good Ai");
console.log( name2 + " is a good Ai");
console.log( name3 + " is a good Ai");

// function method.
 
function greet(Ai , greetText = "Greeting Text From JS" , greetTime){
    let Ai1 = "Ai1";  // this Ai1 is local scope in function it dosen't effect on other Ai1 but if it is in outside the function then it effect the other.
    console.log(greetText + " " + name);
    console.log(Ai +" is a good Ai");
    console.log(greetText + " " + greetTime + " ");
}
let Ai = "Jarviz";
let Ai1 = "Fiday";
let Ai2 = "E.D.I.T.H";
let Ai3 = "Vision";
let greetText1 = "Goood Morning"; 
let greetTime = " Its 12:00 pm"; 
greet(Ai , greetText1 , greetTime);
greet(Ai1 , greetText1 , greetTime);
greet(Ai2 , greetText1, greetTime);
greet(Ai3);

//Retun value function

function sum(a,b,c){
    let d = a+b+c;
    return d;
}

// let retuenVal = greet(Ai3);
// console.log(retuenVal);

let retuenVal = sum(1,2,3);
console.log(retuenVal); 

function String(a,b){
    let c = a+b;
    return c;

}
let x = String("this is ", "my comp")
console.log(x);