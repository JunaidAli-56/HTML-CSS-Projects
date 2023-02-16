console.log("Welcome to tutorial 14 js");

// element selectors
// 1. single element selector.

let element = document.getElementById('myfirst');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color = 'red';
element.innerText = 'Jarviz is a Ai.';
element.innerHTML = '<b>Jarviz is a Ai.</b>';

console.log(element);
//console.log(element.innerText);
//console.log(element.innerHTML);

element = document.getElementsByClassName('red');
// console.log(element);

//Query Selectors: selector sirf first element ko hi show karvaye ga.(jaysa ky pehla div)
let sel = document.querySelector('#myfirst'); //with ID.
// sel = document.querySelector('.child');  // with class.
// sel = document.querySelector('h1');  // with tag.
sel = document.querySelector('div');  // with tag.
sel.style.color = 'green';
// console.log(sel);

// 2. muliple element selector.

let elems = document.getElementsByClassName('child');
// console.log(elems[0]);
// console.log(elems[1]);

elems = document.getElementsByClassName('container');
//console.log(elems[0].getElementsByClassName('child'));

// ec tag sy sary ky sary div milein gy.
elems = document.getElementsByTagName('div');
//console.log(elems);

//iteration in multiple elements selectors:
Array.from(elems).forEach(element => {
    //console.log(element);
    //element.style.color = "red";
});