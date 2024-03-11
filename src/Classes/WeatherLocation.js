

class WeatherLocation {

    constructor(name, temperature, description) {
        this.name = name;
        this.temperature = temperature;
        this.description = description;
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
}

export {WeatherLocation};