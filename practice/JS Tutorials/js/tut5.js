// Type conversion.
console.log('this is tut 5 ');
//Integer
let myVar;
myVar = 34;
console.log(myVar, (typeof myVar));

// convert 'int' to string.
myVar = String(34);
console.log(myVar, (typeof myVar));

//Boolean 
booleanVar = true;
console.log(booleanVar, (typeof booleanVar));

// convert 'boolean' to string.
booleanVar = String(true);
console.log(booleanVar, (typeof booleanVar));
// Date is a object.
let date = new Date();
console.log(date,(typeof date));

// convert 'object' into string.
date = String(new Date());
console.log(date,(typeof date));
//Array
let array = [1,2,3,4];
console.log(array, (typeof array));
//Array to string.
    array = String([1,2,3,4]);
    console.log(array, (typeof array));

let arr =[1,2,3,4];
console.log(arr.length, (typeof arr));

    arr = String([1,2,3,4]);
    console.log(arr.length, (typeof arr));

//String Function.
let i = 75;
console.log(i.toString());

let newdate = new Date();
console.log(newdate.toString());

//Number Function.
 let stri = "3434";
 console.log(stri, (typeof stri));

 let str = Number(3434);
     console.log(str, (typeof str));
     str = Number("343d4");
     console.log(str, (typeof str));
     str = Number(true);
     console.log(str, (typeof str));
     str = Number(false);
     console.log(str, (typeof str));
     str = Number([1,2,3,4,5,6,7]);
     console.log(str, (typeof str));


     //parseInt 
     let number = "34";
     console.log(number , (typeof number));

     let num = parseInt(34);
     console.log(num , (typeof num));

         num = parseFloat(340.38);
         console.log(num , (typeof num));

         num = parseFloat(340.38);
         console.log(num.toFixed(2) , (typeof num));

         num = parseFloat(340.38);
         console.log(num.toFixed(10), (typeof num));

     // Type coercion.
     let mystr = "698";
     let mynum = 34;
         console.log(mystr + mynum);
         
         mystr = Number("698");
         mynum = 34;
         console.log(mystr + mynum);

         // this is  called corecion in which u convert integer to string or string to integer