import './style.css';
import {UIDisplay} from "./Classes/UIDisplay";
import {WeatherLocation} from "./Classes/WeatherLocation";

const API_URL = 'https://api.weatherapi.com/v1/current.json?key=9118f127dc5a4c16b72193619241003&q=';

function main() {
    const uIDisplay = new UIDisplay('Weather App');
    addEventListenerToButton(uIDisplay);
    generateWeatherData(uIDisplay).then(r => console.log(`Fetching Data`));
}

async function generateWeatherData(uiDisplay) {
    try {
        const response = await fetch(API_URL + uiDisplay.currentSubject, {mode: 'cors'});
        const fetchedData = await response.json();
        console.log(fetchedData);
        const weatherLocation = new WeatherLocation(`${fetchedData.location.region}, ${fetchedData.location.country}`, fetchedData.current.temp_c + '°C', fetchedData.current.condition.text, fetchedData.current.humidity, fetchedData.current.condition.icon);
        addWeatherDataToUi(weatherLocation, uiDisplay);
    }
    catch (error) {
        alert('ERROR!');
        console.log(error.toString());
    }
}

function addEventListenerToButton(uIDisplay) {
    const searchButton = document.getElementById('searchButton');
    const submitButton = document.getElementById('submitBtn');
    searchButton.addEventListener("click", () => {
        uIDisplay.displayFormAndHideApp();
    });
    submitButton.addEventListener("click", () => {
        uIDisplay.currentSubject = gatherFormData();
        uIDisplay.displayAppAndHideForm();
        generateWeatherData(uIDisplay).then(r => console.log('Fetching data') );
    });
}

function addWeatherDataToUi(weatherLocation, uIDisplay) {
    uIDisplay.setUIDetails(weatherLocation.getDescription());
    uIDisplay.setUITLocation(weatherLocation.getName());
    uIDisplay.setUITemperature(weatherLocation.getTemperature());
    uIDisplay.setUITempAndHumidityInThirdRow(weatherLocation.getTemperature(), weatherLocation.getHumidity());
    uIDisplay.setWeatherImage(weatherLocation.getIcon());
}

function gatherFormData() {
    const formLocationBox = document.getElementById('locationBox');
    return formLocationBox.value;
}

main();