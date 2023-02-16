console.log("this is tut 28.JS");

// Object Prototype: 
// if u wanna edit the prototype of object don't do that firstly create a constructor and then edit  a prototype of object (its example start from 16 line. make a constructor and edit prototype (line 19)).....
// Object Literal
 let obj = {
    name: "Jarviz",
    channel: "codeWithJarviz",
    adress:  "Mars"

}
console.log(obj);


//this a constructor function:
function obj1(givenName){
    this.name = givenName;
}
obj1.prototype.getName = function(){
    return this.name;
}
obj1.prototype.setName = function(newName){
    this.name = newName;
}
let obj2 = new obj1("Henry");
console.log(obj2);
console.log(obj2.toString());