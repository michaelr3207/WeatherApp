

class UIDisplay {

    constructor(name) {
        this.currentSubject = 'belfast';
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

}

export {UIDisplay};