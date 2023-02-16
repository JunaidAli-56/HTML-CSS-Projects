console.log("this is tut 42.Js");
//promises is use in this tut:

// button with id myBtn.
let myBtn = document.getElementById('myBtn');
//div with id content.
let content = document.getElementById('content');

//In simple way as an example:
//getmyData function start.
// in response.text: it shows the response in the  form of plane text.

function getmyData() {
    console.log("Started Data");
    url = "jarviz.txt";
    // In this line of code "=>" arrow function is used.
    fetch(url).then((response) => {
        console.log("Inside the first then");
        return response.text();
    }).then((data) => {
        console.log("Inside the second then");
        console.log(data);
    });
}
console.log("Before running getmyData");
getmyData();
console.log("After running getmyData");

//getData with JSon:
//In Json: it shows the response in the object form(means:it shows parse Data).
//This function is according to "GET" request method:

// function getData() {
//     url = "jarviz.txt";
//     fetch(url).then((response) => {
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//     });
// }
// getData();

//This function is according to "POST" request method:
//In POST method API use "URL" and "Parameters".
//We use "stringify" if data is not string otherwise if data is string we don't use "stringify" in body.

// function postData() {
//     url = "https://dummy.restapiexample.com/api/v1/create";
//     data = '{"name":"jarviz123","salary":"123","age":"23"}'
//     params = {
//         method:'post',
//         headers:{
//             'Content-Type':'appliction/json',
//         },
//         // body: JSON.stringify(data)
//         body:data
//     }
//     //with arrow function no brackets use and return if response is one. 
//     fetch(url,params).then(response => response.json())
//     .then(data => console.log(data))
// }
// postData();