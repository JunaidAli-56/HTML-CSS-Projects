console.log('We are in tut7.js. ');
// Array 

const marks = [89,35,55,75];
console.log(marks);

const fruits= ['orange', 'apple', 'pineapple'];
console.log(fruits);
console.log(fruits[1]);

const mixed = ['str' ,89,[0,3]];
console.log(mixed);

const arr = new Array(12,25,34,"orange");
console.log(arr);

arr[0] = 'Jarviz';
console.log(arr);
console.log(arr.length);

let arrelement = arr[0];
console.log('element:',arrelement);

console.log(Array.isArray(arr));
console.log(Array.isArray('sdufyf'));

let  mark = [89,34,44,78,99,55,75];
console.log(mark);

//yeh batye ga ky ky value kon sy index py hai.
let value = mark.indexOf(75);
console.log(value);

//Mutating or Modifying
//Push means put the given value at the end of array.
mark.push(981);
console.log(mark);

//unshift put value at the start.
mark.unshift(12);
console.log(mark);

//pop  remove the last value in an array.
mark.pop()
console.log(mark);

//shift remove the first value in an array.
mark.shift()
console.log(mark);

//splice function mein array mein sy 1 sy 3 tak integers delete ho jayein gy splice function 1 sy start kary ga aur 3 tak ky integers ko delete kary ga.
mark.splice(1,3)
console.log(mark);

//it will reverse the array.
mark.reverse()
console.log(mark);

let mark2 = [1,2,3,4,5];
mark = mark.concat(mark2)
console.log(mark);

//Objects.
let myObj = {
    name:     'Jarviz',
    channel:  'codeWithJarviz',
    isActive: true,
    mark3:    [1,2,3,4]
}
console.log(myObj);
console.log(myObj.mark3);
console.log(myObj.isActive);
//second method 
console.log(myObj['isActive']);