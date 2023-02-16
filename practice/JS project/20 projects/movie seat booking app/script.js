const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row.seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();
// '+' it will convert a string to number and parseInt is anpther method.for converting string into number
let ticketPrice = +movieSelect.value;
// console.log(typeof ticketPrice);


// Save  selected moive and Price
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}


// Update all count and total
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
    console.log(seatsIndex);
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));


    const selectedSeatsCount = selectedSeats.length;
    // console.log(selectedSeatsCount);
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}
//get data from localStorage and populate UI
function populateUI(){
    const selectedSeats =JSON.parse(localStorage.getItem('selectedSeats'));
    if(selectedSeats !== null && selectedSeats.length>0){
        seats.forEach((seat,index)=>{
            if(selectedSeats.indexOf(index)>-1){
                seat.classList.add('selected');
            }
        })
    }
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if(selectedMovieIndex !== null){
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}

// Movie Select event
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex ,e.target.value);
    updateSelectedCount();
})
// Seat select event
container.addEventListener('click', (e) => {
    // console.log(e.target); 
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
})

//Initial count and total set

updateSelectedCount();