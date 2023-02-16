console.log("This is tut 23 JS");

//Math object in JS:

let x = 5;
let y = 6;
let z;
z = x+y;
z = x-y;
z = x*y;
z = x/y;
//Exploring the math objects:
z = Math;
z = Math.PI;
z = Math.E;
z = Math.round(5.4);//round 5.4 ko 5 kary ga .
z = Math.ceil(5.4);//ceil5.4 ko 6 kary ga .
z = Math.floor(5.3);
/*
3
2.4 --- floor .4  ko delete kar ky 2 kary ga:
2
1
0
-1
-2
-2.4  ---floor .4 ko delete kar ky -3 kary ga:  
-3  
*/
z = Math.floor(-5.3);
//abs mean absolute :means if value is -ve so convert into +ve: or print value as it is:
z = Math.abs(5.3);
z = Math.abs(-5);
z = Math.sqrt(49);//square root.
z = Math.pow(2,3);//Power: (2,3)means 2^3
z = Math.min(2,33,345,54,5);
z = Math.max(2,33,345,54,5);

//Random tag mein yeh koi bhi random number ly ley ga 0 or 1 ky beech mein.
z = Math.random();

/*lekin agr 0  to 100 ky beech lyna ho:
 a  = (0,1);
 a100 = a*100 = (0,100);*/
z = 100*Math.random()
/*lekin agr 10 to 100 ky beech lyna ho:
 a10_100 = 10+a*(100-10)*/

// 50 to 100 
 z = 50 + (100-50)*Math.random()
 //it gives only integer:
 z = Math.ceil(50 + (100-50)*Math.random())
console.log(z);