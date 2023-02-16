speak = () => {
    let txt = document.querySelector("#input").value;
    let speach = new SpeechSynthesisUtterance();
    speach.lang = 'urd';
    speach.text = txt;
    speach.rate = 1;
    speach.volume = 100;
    speach.pitch = 1;
    speechSynthesis.speak(speach);
}