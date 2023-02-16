console.log("this is tut 27.Js");

//Object literals for creating objects....
let car = {
    name :"Audi S8",
    topSpeed: 900,
    run:function() {
        console.log("car is running");
        
    }
}

//We ahve already seen constructors like these:
// new Date();

//Constructors is a template (with help of constructor we create objects): 
// creating constructors for car:

function GeneralCar(givenName,givenSpeed){
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function(){
        console.log(`${this.name}is running`);
    }
    this.analyze = function(){
        console.log(`this car is slower by ${ 2000 - this.topSpeed} Km/H than Porsche`);
    }
}
car1 = new GeneralCar('Nissan',900);  
car2 = new GeneralCar('Ferrari',1900);
car3 = new GeneralCar('Porsche',2000);

console.log(car1,car2,car3);

console.log(car);