console.log("this is tut 20 JS");

// Local Session Storage:
//Local storage always remain if browser close and reopne.
let impArray = ['adark','pyaz','bindhi'];
//setItem function:Add a key-Value pair in local Storage.
localStorage.setItem("Name","Jarviz");
localStorage.setItem("Name2","Junixd");
localStorage.setItem("Sabzi",JSON.stringify(impArray));

//This function clears the entire local storage:
//localStorage.clear();

//Clear a particular key-value pair.
localStorage.removeItem('Name');

//getItem function:Retrieve the item from Local Storage.
let name = localStorage.getItem("Name");
    console.log(name);
    
 let  name2 = JSON.parse(localStorage.getItem("Sabzi"));
 console.log(name2)

 //Session Stoage:
//session storage delete if browser close.
sessionStorage.setItem("sessionName","sJarviz");
sessionStorage.setItem("sessionName2","sJunixd");
sessionStorage.setItem("sessionSabzi",JSON.stringify(impArray));

// localStorage.clear();
// sessionStorage.clear();