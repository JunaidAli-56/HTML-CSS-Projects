console.log('This is tut 56 JS');

// **********for-in loop*********
 let people = ["Jarviz","Ali","Haider","Hamad","Numan"];

//Traditional for loop:
// for (let index = 0; index < people.length; index++) {
//     const element = people[index];
//     console.log(element);   
// }

// 1. ITERATING AN OBJECT
let obj = {
    name:"Jarviz",
    language:"JavaScript",
    hobbies:"Programming"
}
//console.log(obj);
// 1.1-Iterate an object using traditional loop:
// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);   
// }

// 1.2-Iterate an object using for-in loop
// for-in loop use for iterate the keys of an object (if u bring some keys of an object).
for (let key in obj) {
    console.log(obj[key]);   
}

// 2. ITERATING IN STRING:
//we can use for-in with String to loop through all characters.
myString = "This is my String";
for (let char in myString) {
    console.log(myString[char]);   
}

// **********for-of loop*********
// for-of loop is uses for iteratables.
console.log("****************for-of loop starts here****************");
people = ["Jarviz","Ali","Haider","Hamad","Numan"];

for (let name of people){
    console.log(name);   
}

for (let name of myString){
    console.log(name);   
}