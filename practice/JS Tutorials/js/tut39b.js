// this is from tut37 and we update aur code in tut39b..js.
// we apply promise on this callback function code:

//Callback means put function into the function: 
// function dosry function ko pkr kar rakhy ga:

// pretend that response is coming from the server
const students = [
    { name: "Junaid", subject: "JavaScript" },
    { name: "Ali", subject: "Machine Learning" }
]

function enrollstudents(student) {
    return new Promise(function (reslove,reject){
        setTimeout(function() {
            students.push(student);
            console.log("Students has been enrolled");
            const error = false;
            if (!error) {
                reslove();
            }
            else {
                reject();
            }
        }, 1000);
    });
}

function getStudents() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (student) {
            str += `<li>${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 5000);
}

let newStudent = { name: "Sunny", subject: "Python" }
enrollstudents(newStudent).then(getStudents).catch(function(){
    console.log("Some error accured");
})
// getstudents();

