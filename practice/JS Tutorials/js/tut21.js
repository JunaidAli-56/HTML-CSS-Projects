console.log('Tutorial 21 exercise 2 JavaScript');
/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

*/

let div = document.createElement("h1");
div.className = "divClass";
div.id = "divId";
div.setAttribute("contentEditable", "true");
div.innerHTML = "Jarviz";
let body = document.querySelector("body");
body.appendChild(div);

document.getElementById("divId")
    .addEventListener("blur", function (e) {
        localStorage.setItem("divId",
            document.getElementById("divId").innerText);
    });