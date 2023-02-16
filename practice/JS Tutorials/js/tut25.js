console.log("this is tut 25 JS");
/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

*/
//Create a new element:
let divElem = document.createElement('div');

//Add text to that created element:
let val =localStorage.getItem('text');
let text;
if(val==null){
     text = document.createTextNode('this is editable div');
}
else{
    text = document.createTextNode(val);
}
divElem.appendChild(text);

//Give element id ,style ,class:
divElem.setAttribute('id','elem');
divElem.setAttribute('class','elem');
divElem.setAttribute('style','border:2px solid black; width:154px;margin=:14px;padding:20px; height:40px;');

//Grab the main container:
let container = document.querySelector('.container');
let first = document.getElementById('myfirst');

//insert the element before the element with id  first:
container.insertBefore(divElem,first)
divElem.appendChild(text);
console.log(divElem, container, first);

// add a evenet listner:
divElem.addEventListener('click',function () {
    let noTextAreas = document.getElementsByClassName("textarea").length;
    if(noTextAreas ==0 ){
    let html = elem.innerHTML
    divElem.innerHTML =`<textarea class="textarea form-control" id="textarea" row="3">${html}</textarea>`;
    }

    //listen for the blur event on textarea:
    let textarea =document.getElementById('textarea');
    textarea.addEventListener('blur', function() {
        elem.innerHTML = textarea.value;
        localStorage.setItem('text',elem.innerHTML);
    })

});