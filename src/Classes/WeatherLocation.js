

class WeatherLocation {

    constructor(name, temperature, description, weatherDetail) {
        this._name = name;
        this._temperature = temperature;
        this._description = description;
        this._weatherDetail = weatherDetail;
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