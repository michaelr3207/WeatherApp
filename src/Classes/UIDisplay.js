import Thermometer from '../Images/thermometer-high.png'
import Droplet from '../Images/water.png'

class UIDisplay {

    constructor(name) {
        this.currentSubject = 'belfast';
        this.name = name;
        this.currentDisplayedWeatherImage = '';
        this.setThirdRowImages();
    }

    getName() {
        return this.name;
    }

    setUITemperature(temperature){
        const uITemp = document.getElementById('temperature');
        uITemp.innerHTML = temperature;
    }

    setUITLocation(location){
        const uILocation = document.getElementById('location');
        uILocation.innerHTML = location;
    }

    setUIDetails(details){
        const uIDetails = document.getElementById('detail');
        uIDetails.innerHTML = details;
    }

    setUITempAndHumidityInThirdRow(temperature, humidity) {
        const tempValue = document.getElementById('temperatureValue');
        const humidityValue = document.getElementById('humidityValue');
        tempValue.innerHTML = temperature;
        humidityValue.innerHTML = humidity;
    }

    displayFormAndHideApp() {
        const app = document.getElementById('app');
        const form = document.getElementById('form');
        app.className = 'hide';
        form.className = 'mainBody';
    }

    displayAppAndHideForm() {
        const app = document.getElementById('app');
        const form = document.getElementById('form');
        app.className = 'appContainer';
        form.className = 'hide';
    }

    setThirdRowImages() {
        const dropletImage = new Image();
        const thermometerImage = new Image();
        const dropletImageDiv = document.getElementById('humidityImage');
        const thermometerImageDiv = document.getElementById('thermometerImage');
        dropletImage.src = Droplet;
        thermometerImage.src = Thermometer;
        dropletImageDiv.appendChild(dropletImage);
        thermometerImageDiv.appendChild(thermometerImage);
    }

    setWeatherImage(image) {
        const weatherOutputImage = document.getElementById('weatherImage');
        weatherOutputImage.innerHTML = '';
        weatherOutputImage.appendChild(image);
    }

}

export {UIDisplay};