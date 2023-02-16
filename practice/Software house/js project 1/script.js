console.log("multiple div");


// for (x = 0; x < 100; x++) {
//     let multi = document.createElement('div');
//     multi.className = "multi-div";
//     document.getElementById('jarviz').appendChild(multi);
//     multi.style.background = genColor();
//     multi.innerHTML = genColor();
//     console.log("on for point")

    
    
// }
// function genColor() {
//     let letters = "0123456789ABCDEE";
//     let color = '#'
//     for (i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return(color);
    
// }

for(x=0; x<100; x++){
    let multi = document.createElement('div');
    multi.className="multi-div";
    document.getElementById('div-id').appendChild(multi);
    multi.style.background = genColor();
    multi.innerHTML= genColor();
}
function genColor(){
    let letters = "0123456789ABCDEF";
    let color = "#";
    for(i=0; i<6; i++){
    color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}