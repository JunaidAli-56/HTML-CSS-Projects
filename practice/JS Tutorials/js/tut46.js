console.log('this is tut 46.js');
// JS Regular Expression

//  "/jarviz/" This is method to write the regluar expression or(RE literal in JS).
// 'g' means golbal flag means read the complete string.
// 'i' means case insensitive. 

let reg = /jarviz/;
// let reg = /jarviz/g;
// let reg = /jarviz/i;

console.log(reg);
console.log(reg.source);

// let str = "This is great code with JaRviz and jarviz is AI";
let str = "This is great code with jarviz and jarviz is AI";

// Functions to match Expression 
// 1.exec() - This function will return an array for match or null for no match.
let result = reg.exec(str);
console.log(result);
console.log(result.input);
result = reg.exec(str);
console.log(result); // we use multiple exec with global flag.

if (result) {
    console.log(result);
    console.log(result.input);
    console.log(result.index);
}
// 2. 'test()' - Return true and false.
let result2 = reg.test(str);
console.log(result2); //this will only print true if the "reg" is there in the string "a".

// 3. match() it will return an array of results or null.
let re = /jarviz/g;
let string = "This is great code with jarviz and jarviz is AI";

// let result3 = reg.match(str); ---> this is wrong in match.
let result3 = string.match(re); //---> this is right in match.
console.log(result3);

// 4. search() - Retrun index of first match else -1.
let regExp = /jarviz/;
let strg = "This is great code with jarviz and jarviz is AI";
// let result4 = reg.search(str); ---> this is wrong in match.
let result4 = strg.search(regExp); //---> this is right in match.
console.log(result4);

// 5. search() - Retrun new replaced string with all the replacements(if no flag is given,first match will be replaced).
let regluar = /jarviz/;
// let regluar = /jarviz/g;
let strng = "This is great code with jarviz and jarviz is AI";
// let result5 = reg.replace(str); ---> this is wrong in match.
let result5 = strng.replace(regluar, 'Junaid'); //---> this is right in match.
console.log(result5);