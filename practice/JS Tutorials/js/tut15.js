console.log("This is tut 15 (Traversing the DOM)");

let cont = document.querySelector('.no');
cont = document.querySelector('.container');
// console.log(cont.childNodes);
//children mein vo text ,comnt ,doc type jasi elements ko show nhi karvaye.
//Mostly children use in js
// console.log(cont.children);

let nodeName = cont.childNodes[0].nodeName;
nodeName = cont.childNodes[1].nodeName;
// console.log(nodeName);

//Node type :
//  1:Element.
//  2:Attribute.
//  3:Text Nodes.   
//  8:comment.
//  9:document.
//  10:docType.

nodeType = cont.childNodes[1].nodeType;
nodeType = cont.childNodes[0].nodeType;
// '3' value ka matlab yah text nodes hai
// console.log(nodeType);

// traversing:(kisi bhi element ky andr ky element ko access karna)
let conatiner = document.querySelector('div.container');
console.log(conatiner.children[1].children[0].children);

// console.log(conatiner.firstChild);
// console.log(conatiner.firstElementChild);

// console.log(conatiner.lastChild);
// console.log(conatiner.lastElementChild);

//count of child elements tag:
// console.log(conatiner.childElementCount);

// console.log(conatiner.firstElementChild.parentNode);

// console.log(conatiner.firstElementChild.nextSibling);
// console.log(conatiner.firstElementChild.nextElementSibling);
// console.log(conatiner.firstElementChild.nextElementSibling.nextElementSibling);

