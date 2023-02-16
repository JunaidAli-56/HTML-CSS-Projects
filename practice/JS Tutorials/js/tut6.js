console.log('we are at tut6');
const name = 'Jarviz';
const greeting = 'Good Morning';
console.log(greeting + ' ' + name);  // ' ' symbol show the space.

let html;
html = "<h1> This is Heading </h1>" +
       "<p>this is Para</p>";
html = html.concat('this' + ' ' + 'str');
console.log(html);
console.log(html.length);
console.log(html.toUpperCase());
console.log(html.toLowerCase());

console.log(html[0]);
console.log(html[2]);
console.log(html[8]);       
console.log(html.indexOf('is'));
console.log(html.lastIndexOf('is'));

//boolean
console.log(html.endsWith('str'));
console.log(html.endsWith('this'));

console.log(html.includes('this'));
console.log(html.substring(0,3));

console.log(html.slice(0,4));
console.log(html.slice(-4));

console.log(html.split(' '));
console.log(html.split('>'));

console.log(html.replace('This', 'it'));

let fruit1 = 'orange';
let fruit2 = 'apple';
let myHtml = `Hello ${name}
              <h1>This is heading</h1>   
              <p>You like ${fruit1} and ${fruit2}</p>
              `;

document.body.innerHTML = myHtml;              