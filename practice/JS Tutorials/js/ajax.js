console.log("Ajax tutorial in one video");


let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
    console.log('You have clicked the fetchBtn');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    // in xhr object first argument is http request ('GET') and second where the data comes from ('jarviz.txt')and third is blocking or unblocking request(asynchronous{unblocking request'true'})..

    //xhr.open('GET', 'jarviz.txt', true);
    //xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    //USE THIS FOR POST REQUEST:
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);

    // What to do on progress (optional)
    xhr.onprogress = function () {
        console.log('On progress');
    }

    // this is old function:
    // xhr.onreadystatechange  = function(){
    //     console.log('ready state is', xhr.readyState);
    // }


    // What to do when response is ready
    xhr.onload = function(){
        if(this.status === 200){
        console.log(this.responseText)
        }
        else{
            console.log("some error occured")
        }
    }
    
    // send the request
    xhr.send();
    console.log("We are Done!")
}

//32:12