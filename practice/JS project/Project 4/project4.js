console.log('This is project 4');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

let validUser = false;
let validEmail = false;
let validPhone = false;

// $('#failure').hide();
// $('#success').hide();

// console.log(name,email,phone);

name.addEventListener('blur', () => {
    console.log("name is blurred");
    //validate name here.
    // '^' means start and '$' means end.
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your name is valid');
        name.classList.remove('is-invalid')
        validUser = true;
    }
    else {
        console.log('Your name is invalid');
        name.classList.add('is-invalid');
        validUser = false;
    }

});
email.addEventListener('blur', () => {
    console.log("email is blurred");
    //validate email here.
    let regex = /^([_\-\.0-9a-zA-z]+)@([_\-\.0-9a-zA-z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your email is valid');
        email.classList.remove('is-invalid')
        validEmail = true;
    }
    else {
        console.log('Your email is invalid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
});
phone.addEventListener('blur', () => {
    console.log("phone is blurred");
    //validate phone here.
    let regex = /^([0-9]){11}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your phone is valid');
        phone.classList.remove('is-invalid')
        validPhone = true;
    }
    else {
        console.log('Your phone is invalid');
        phone.classList.add('is-invalid')
        validPhone = false;
    }
});

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('You clicked on submit');
    console.log(validUser,validEmail,validPhone);
    
    // submit your form here.
    if (validEmail && validUser && validPhone) {
        let failure =document.getElementById('failure');
        console.log('Phone,email and user are valid.Submitting the form');
        let success = document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('show');
        $('#failure').hide();
        $('#success').show();
    }
    else {
        console.log('One of Phone,email or user are invalid.Hence not submitting the form');
        let failure = document.getElementById('failure');
        failure.classList.add('show')
        // success.classList.remove('show');
        $('#success').hide();
        $('#success').show();
    }
})

