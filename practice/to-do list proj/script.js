function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

// main-page js


// let addButton = document.getElementById('btn');
// addButton.addEventListener('click',(e)=>{
//     e.preventDefault();
//      //console.log('Button have been clicked');
//     const title = document.getElementById('title');
//     const location = document.getElementById('location');
//     const description = document.getElementById('description');
//     const list = document.getElementById('list');
//     const li = document.createElement('li');
//     li.className='li';
//     li.textContent = `${title.value}  ${location.value}  ${description.value}`;

//     list.appendChild(li);

// })

function addRecord() {
    const title = document.getElementById('title');
    const location = document.getElementById('location');
    const description = document.getElementById('description');

    const {task} = { "title": title.value, "location": location.value, "desc": description.value };
    localStorage.setItem("tasks", {...task});



}
function showRecord() {
    const list = document.getElementById("list");
    const li = document.createElement("li");
    li.classList.add("li");
    let result = JSON.parse(localStorage.getItem("tasks"));
    li.textContent = "Title: " + result.title + " " + "Location: " + result.location + " " + "Desc: " + result.desc;
    list.appendChild(li)
    console.log(li);
}
