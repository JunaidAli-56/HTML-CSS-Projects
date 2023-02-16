console.log('this tut 54 js');

const alramSubmit = document.getElementById('alaramSubmit');
// add a 'addEventListener' on set alaram button
alramSubmit.addEventListener('click', setAlaram);

var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');

// Function to play the alaram ring tone:
function ringBell() {
    audio.play();
}
// This function will run whenever alaram is set from UI.
function setAlaram(e) {
    e.preventDefault();
    // console.log("Setting Alaram...");
    const alaram = document.getElementById('alaram');
    // console.log(`Setting Alaram for ${alram.value}...`);

    alaramDate = new Date(alaram.value);
    console.log(`Setting Alaram for ${alaramDate}...`);

    now = new Date();
    let timeToAlaram = alaramDate - now;
    console.log(timeToAlaram);

    if (timeToAlaram >= 0) {
        setTimeout(() => {
            console.log('ringing now');
            
            ringBell();
        }, timeToAlaram);
    }
}
