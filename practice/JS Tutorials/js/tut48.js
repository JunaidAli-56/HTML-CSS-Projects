console.log('this is tut 48.js');
// Regular Expression
    // Basic Function
    // Metacharter symbols
// const regex = /^j/i;

// Charcter sets:[a-z] can be any character from a to z;
let regex = /j[a-z]rv[h-m]z/;

// In [] these brackets this symbol ^ means the character in brackts didn't match with string.cannot be any of a,r,y.
regex = /j[^ary]rviz/;
regex = /j[a-zA-Z]rv[h-m0-9]z/;
// const str = "jArrviz please destroy the ultron.";


//Quantifiers: Quantity of a number.

//  'r' can occurs exactly 2 times.
regex = /jar{2}viz/; 

//  'r' can occurs exactly 0 or 2 times.
regex = /jar{0,2}viz/;

// const str = "jarrviz please destroy the ultron.";    
// const str = "javiz please destroy the ultron.";    

// Grouping we use pranethies for grouping
regex = /(jar){2}/;
const str = "jarjar please"; 

let result = regex.exec(str);
console.log('The result from exec is ',result);

if(regex.test(str)){
    console.log(`The string ${str} match the expression ${regex.source}`);  
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}