

class UIDisplay {

    constructor(name) {
        this.name = name;
        this._allWeatherImages = [];
        this.currentDisplayedWeatherImage = '';
    }

    getAllWeatherImages() {
        return this.allWeatherImages;
    }

    setAllWeatherImages(value) {
        this.allWeatherImages = value;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setCurrentImage(image) {
        this.currentDisplayedWeatherImage = image;
    }

    getCurrentImage() {
        return this.currentDisplayedWeatherImage;
    }

}