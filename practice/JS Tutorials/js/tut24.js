console.log("this is tut 24 JS");

//Date and Time in JS:
let today = new Date();
console.log(today);
console.log(typeof today);

let otherDate = new Date('May 30 1999 08:25:13');
    otherDate = new Date('09/18/2004 08:25:13');
console.log(otherDate);

let a;
a = otherDate.getDay(); // '6' represent the saturday;
a = otherDate.getDate();
a = otherDate.getMinutes();
a = otherDate.getHours();
a = otherDate.getSeconds();
a = otherDate.getTime();
a = otherDate.getMilliseconds();
a = otherDate.getMonth(); // Jan represent '0' and sep represent'8'
console.log(a);

let b;
otherDate.setDate(29);
otherDate.setMonth(11); //'11' represent December:
otherDate.setFullYear(1986);
otherDate.setHours(10);
otherDate.setMinutes(55);
otherDate.setSeconds(05);

console.log(otherDate);