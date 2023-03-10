const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show input error message  
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
// show success outline
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
//check the email is valid 
 function isValidEmail(email){
         const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         return re.test(String(email).toLowerCase());x
      
 }
//Event Listener
form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(username.value);

    if(username.value === ''){
        showError(username, 'Username is Required');
    }
    else{
        showSuccess(username);
    }
    if(email.value === ''){
        showError(email, 'Email is Required');
    }
    else if(!isValidEmail(email.value)){
        showError(email, 'Email is not valid');
    }
    else{
        showSuccess(email);
    }
    if(password.value === ''){
        showError(password, 'Password is Required');
    }
    else{
        showSuccess(password);
    }
    if(password2.value === ''){
        showError(password2, 'Password is Required');
    }
    else{
        showSuccess(password2);
    }
});