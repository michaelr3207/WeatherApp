import  './style.css';

const API_KEY = '9118f127dc5a4c16b72193619241003';
const API_URL = 'https://api.weatherapi.com/v1/current.json?key=9118f127dc5a4c16b72193619241003&q=';
let currentSubject = 'london';

// console.log(https://api.weatherapi.com/v1/current.json?key=9118f127dc5a4c16b72193619241003&q=london
// )

async function generateWeatherData() {
    try {
        const img = document.querySelector('img');
        const response = await fetch(API_URL + currentSubject, {mode: 'cors'});
        const fetchedData = await response.json();
        console.log(fetchedData);
        // alert(fetchedData.location.country);

        //he
    }
    catch (error) {
        alert('ERROR!');
        console.log(error.toString());
    }
}

generateWeatherData();