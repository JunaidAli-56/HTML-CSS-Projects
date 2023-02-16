console.log("this is project 6");

// Hide parameterbox initially
let parameterbox = document.getElementById('parameterBox');
parameterbox.style.display = 'none';

//If user click on param box, hide the json box
let paramsRadio = document.getElementById('paramsRadio');
paramsRadio.addEventListener('click',()=>{
    document.getElementById('requestJsonBox').style.display = 'none';
    document.getElementById('parameterBox').style.display = 'block';
})
//If user click on json box, hide the params box
let jsonRadio = document.getElementById('jsonRadio');
jsonRadio.addEventListener('click',()=>{
    document.getElementById('requestJsonBox').style.display = 'block';
    document.getElementById('parameterBox').style.display = 'none';
})

// if user click on '+' button add more parameters
let addParam = document.getElementById('addParam');
addParam.addEventListener('click',()=>{

})

// 40:50