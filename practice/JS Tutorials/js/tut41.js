console.log("this is tut 41 Js");

// ARROW FUNCTION

//Creating a regular function:
// const jarviz = function(){
//     console.log('It is best Ai ever');
// }
// jarviz();

//converting into arrow function:
// const jarviz = ()=>{
//     console.log('It is best Ai ever');
// }
// jarviz();

// function returning something
//  const groot = function(){
//     return "I am Groot";
//  }
//  console.log(groot());

// One liners do not reqiure braces and return.
// One liner automatically return.
// const groot2 = () => "I am Groot";
// console.log(groot2());

// with Object
// const groot3 = () => ({name:"Jarviz"}) ;
// console.log(groot3());

//another variant. with string
//no need of ()  in this line.
const groot4 = name => "Good Morning " + name ;
console.log(groot4('Jarviz'));

//single parameter do not need parenthesis but
// You will have to put parenthesis if there are multiple parameters.
const groot5 = (name,ending) => "Good Morning " + name + ending;
console.log(groot5('Jarviz ','bye'));