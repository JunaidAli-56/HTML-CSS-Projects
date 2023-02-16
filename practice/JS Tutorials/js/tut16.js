console.log("tut 16 js");

//Create ELement:
let element = document.createElement('li');
//create Text Node:
let text = document.createTextNode('I am text node');
element.appendChild(text)

//Add the class name to the li element:
element.className = 'childul';
element.id = 'createdLi';
element.setAttribute('title','mytitle');
//element.innerText = 'Hello World';
//element.innerHTML = '<b>Hello World</b>';
let ul = document.querySelector('ul.this');
//appenedChild means (child ko jor dyna parent mein ) tag:
ul.appendChild(element);
//console.log(ul);
//console.log(element);


//Replacing of Element:
let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode('elem2 created text');
elem2.appendChild(tnode);

element.replaceWith(elem2);

//Child Replacing:
let myul = document.getElementById('myul');

myul.replaceChild(element,(document.getElementById('fui')));
//Removing Element:
myul.removeChild(document.getElementById('lui'));
let pr = elem2.getAttribute('id');
    //pr = elem2.getAttribute('class');
    
    console.log(elem2);
    console.log(pr);

// hasAttribute tag: this will show that given attribute is present in syntax.
    pri = elem2.hasAttribute('id');
    console.log(pri);
    pri = elem2.hasAttribute('dfd');
    console.log(pri);
// remove Attribute tag:it will reomove the attribute from element.
pri = elem2.removeAttribute('id');


//quiz 

let jarviz = document.createElement('a');
jarviz.setAttribute('href','https//:www.codeWithharry.com');
console.log(jarviz);
let Tnodes =  document.createTextNode('This is a code with harry');
jarviz.appendChild(Tnodes);
myul.insertBefore(jarviz,element);