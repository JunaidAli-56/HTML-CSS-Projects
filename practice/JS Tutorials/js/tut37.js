console.log("this is tut 37 Js (callback function in js)");

//Callback means put function into the function: 
// function dosry function ko pkr kar rakhy ga:


// pretend that response is coming from the server
const  students =[
    {name:"Junaid", subject:"JavaScript"},
    {name:"Ali", subject:"Machine Learning"}
]

function enrollstudents(student , callback){
    setTimeout(function() {
        students.push(student);
        console.log("Students has been enrolled");
        callback();
    }, 5000);
}

function getStudents(){
    setTimeout(function() {
        let str = "";
        students.forEach(function(student){
            str += `<li>${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 1000);
}

let newStudent = {name:"Sunny" , subject:"Python"}
enrollstudents(newStudent, getstudents );
// getstudents();

