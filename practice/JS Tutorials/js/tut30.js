console.log("this is tut 30 Js");

const proto = {
    slogan:function(){
       return `this is the best company`;
    },

    changeName:function(newName){
        this.name = newName;
    }
}

//This create jarviz object:
const jarviz = Object.create(proto);
jarviz.name = "Jarviz"
jarviz.role = "Programmer"
jarviz.changeName = "Junxid"

console.log(jarviz);

//Empolyee constructor:

function Empolyee(Name , Salary , Experience){
    this.name = Name;
    this.salary = Salary;
    this.experience = Experience;
}

//Slogan
Empolyee.prototype.slogan = function(){
    return `this is the best company Regards, ${this.name}`;
 }

 // create an object from this constructor now:

 let jarvizObj = new Empolyee("Jarviz",350000,12);
 console.log(jarvizObj);

 console.log(jarvizObj.slogan());

// Programmer

function Programmer(name,salary,experience,language){
    Empolyee.call(this,name,salary,experience);
    this.language = language;
    
}

//Inherit the prototype
Programmer.prototype = Object.create(Empolyee.prototype);

//Manually set the constructor:
Programmer.prototype.constructor = Programmer;

let ali = new Programmer("Ali",200000,3,"JavaScript");
console.log(ali);