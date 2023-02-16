console.log("This is tut8.js.");

let age = 19;
if(age==19){
    console.log('Age is 19');
}
else{
    console.log('Age is not 19');
}


age = 65;
if(age==19){
    console.log('Age is 19');
}
else if(age==65){
    console.log('Age is 65');
}
else{
    console.log('Age is not 19');
}

// with '!'not method
if(age!=19){
    console.log('Age is not 19');
}
else if(age==65){
    console.log('Age is 65');
}
else{
    console.log('Age is 19');
}

//This Function shows that variable is defined or not.
let vari = '34';
if(typeof vari !== 'undefined'){
    console.log('Vari is Defined');
}
else{
    console.log('Vari is not Defined');
}

//Boolean

let doesDrive = true;
// let doesDrive = false;
if(doesDrive){
    console.log('You can drive');
}
else{
    console.log('You cannot drive');
}

let uage= 5;
// let udrive = true;
let udrive = false;
if(udrive && age>18){
    console.log('You can Drive');
}
else{
    console.log('You cannot Drive');

}

uage= 5;
udrive = true;
// udrive = false;
if(udrive || age>18){
    console.log('You can Drive');
}
else{
    console.log('You cannot Drive');

}

//ternary operator.
 let urAge = 34;
 console.log(urAge==45? 'Age is 45':'Age is not 45');

 //second way
     urAge = 45;
 console.log(urAge==45? 'Age is 45':'Age is not 45');

 //switch

 let age1 = 28;
//  let age1 = 45;

 switch(age1){
     case 18:
         console.log('Age is 18');
         break;
     case 28:
         console.log('Age is 28');
         break;
     case 38:
         console.log('Age is 38');
         break;

     default:
         console.log('Age is Unknown');
          break;
 }