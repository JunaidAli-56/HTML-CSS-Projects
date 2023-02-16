const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the DOm
function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

    //API link
    fetch(`https://v6.exchangerate-api.com/v6/d12e4b0ff0fa38397020c660/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            const rate = data.conversion_rates // conversion_rates are the rates of countries
            [currency_two];
            // console.log(rate)

            rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

            // toFixed() converts a number to a string, rounded to a specified number of decimals
            amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
        })
}

//Event Listenrs 
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

swap.addEventListener('click',()=>{
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
})

calculate();



// Just fetch API Example with items-json
// function calculate() {
//     fetch('items.json')
//         .then(res => res.json())
//         .then(data =>(document.body.innerHTML=data[1].text));
// }
// calculate();