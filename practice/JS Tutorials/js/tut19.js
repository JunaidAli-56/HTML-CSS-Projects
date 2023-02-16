console.log("this is tut 19 js ");

let str='phython';
let links = document.links;
console.log(links);
let href;

Array.from(links).forEach(function(element){
    href=element.href;
  
    console.log(href); 
    console.log("length" , links.length)

});

