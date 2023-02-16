console.log('This is tut9.js ');

//General Loops: For, While and Do-While.
let a = 34;
a +=1;
a++;
console.log(a);

// For Loop
for(let i=0; i<5; i++){
    console.log(i);
}

//While
let j =0;
while(j<5){
    console.log(j+1);
    j++;
}

//do-while loop
let k = 0;
do{
    console.log(k);
    k++;
}while(k<5);

//do-while pehly execute hoga baad mein condition dekhy ga. 
let l = 110;
do{
    console.log(l+1);
    l++;
}while(l<5);

//break in loop.
let x = 0;
do{
    console.log(x);
    if(x===5){
        break;
    }
    x++;
}while(x<10);

console.log('break on 5 is done');

//continue in loop.
//in continue when 5 is come it will skipped and the loop again start.
let y = 0;
do{
    if(y===5){
        y+=1;
        continue;
    }
    console.log(y);
    y+=1;
}while(y<10);

console.log('continue is done');

//loops for the iteration of objects and arrays:

//This is the modern method for the iteration of  Array:
 let arr = [2,3,4,5,2,5];
 arr.forEach(function(element){
     console.log(element);
 });
 
//  arguments in forEach loop(i can use any argument in this loop):
 let arr1 = [1,2,3,45];
 arr1.forEach(function(element,index,array){
     console.log(element,index,array);
 })
//This is the old method for the iteration of  Array but i choose modern method: 
 let array = [2,3,4,5,2,5];
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);   
}

//Iteration in  objects with help of 'in for loop':
let obj = {
    name:"ali",
    age :22,
    type:"dangerous Programmer",
    os  :"Ubuntu"
}
for(let key in obj){
    console.log(`The ${key} for object is ${obj[key]}`);
}