console.log("this is tut 58.js");

// Set is collection well define objects
// Sets store unique values

//Initialize an empty set:
const mySet = new Set();
console.log("the Set look like",mySet);

// Set does not repeat the values: 'this count only one time'
mySet.add("this");
mySet.add("is");
mySet.add("my name");
mySet.add("this2");
mySet.add(2930);
mySet.add(true);
console.log("the Set look like this now",mySet);

// use constructor to intilize the set:
let mySet2 = new Set([1,45,false,{a:34,b:"hey"},'jarviz dark side'])
console.log("New Set: ",mySet2);

console.log(mySet.size);

// Is it set has this value or not?
console.log(mySet.has(2930));
console.log(mySet.has("that"));

console.log("Before Removal" ,mySet);
mySet.delete("this2");
console.log("After Removal" ,mySet);

//Iterating a set:
// for(let item of mySet){
//     console.log('the item is :', item);
// }

mySet.forEach((item)=>{
    console.log('the item is :', item);

})

let myArray = Array.from(mySet);
console.log(myArray);
