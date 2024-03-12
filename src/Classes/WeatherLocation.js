import {value} from "lodash/seq";


class WeatherLocation {


    constructor(name, temperature, description, humidity, imageSrc) {
        this.name = name;
        this.temperature = temperature;
        this.description = description;
        this.humidity = humidity;
        this.icon = new Image();
        this.icon.src = imageSrc;
    }

    getName() {
        return this.name;
    }

    setMame(value) {
        this.name = value;
    }

    getTemperature() {
        return this.temperature;
    }

    setTemperature(value) {
        this.temperature = value;
    }

    getDescription() {
        return this.description;
    }

    setDescription(value) {
        this.description = value;
    }

    getWeatherDetail() {
        return this.weatherDetail;
    }

    setWeatherDetail(value) {
        this.weatherDetail = value;
    }

    getHumidity() {
        return this.humidity;
    }

    setHumidity(value) {
        this.humidity = value;
    }

    getIcon() {
        return this.icon;
    }

    setIcon(value) {
        this.icon = value;
    }

}

export {WeatherLocation};