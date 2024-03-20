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


    getTemperature() {
        return this.temperature;
    }

    getDescription() {
        return this.description;
    }

    getHumidity() {
        return this.humidity;
    }


    getIcon() {
        return this.icon;
    }

}

export {WeatherLocation};