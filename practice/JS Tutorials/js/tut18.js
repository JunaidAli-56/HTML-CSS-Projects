 console.log("This is tut 18 js");

// // More Events in JavaScript.
//  // click event:
let btn = document.getElementById('btn');
btn.addEventListener('click',func1);
btn.addEventListener('dblclick',func2);
//btn.addEventListener('mousedown',func3);

function func1(e){
    console.log("Thanks",e);
    e.preventDefault();  // yeh function apko default value sy bypass karvata hai.
}

// //Double CLick event:
function func2(e){
    console.log("Thanks its a double click",e);
    e.preventDefault();
}

// // Mouse Down Event :
// // function func3(e){
// //     console.log("Thanks its a mouse down",e);
// //     e.preventDefault();  
// // }


// document.querySelector('.no').addEventListener
// ('mouseenter', function(){

//     console .log("You Enter");
// })

// document.querySelector('.no').addEventListener
// ('mouseleave', function(){

//     console .log("You Enter not");
// })

document.querySelector('.container').addEventListener
('mousemove', function(e){
    console.log(e.offsetX ,e.offsetY);
    // ec syntax sy bg color change hota hai X aur Y pr.
    document.body.style.backgroundColor = `rgb(${e.offsetX}, 
        ${e.offsetY}, 154)`;

    console .log("Mosue moving");
})