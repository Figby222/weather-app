function getWeather(location) {
        return fetch(`https://api.weatherapi.com/v1/current.json?key=786cfcfa7077405f90982207241303&q=${location}`, {mode: "cors"})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            return response;
        })
        .catch(function(err) {
            console.error(err);
        })
}

function processData(json) {
    return new Promise(function(resolve, reject) {
        resolve({
            city: json.location.name,
            conditionText: json.current.condition.text,
            conditionIcon: json.current.condition.icon,
            tempC: json.current.temp_c,
            tempF: json.current.temp_f,
            windKph: json.current.wind_kph,
            windMph: json.current.wind_mph
        })
    })
}

const location = document.querySelector("#location");
const weatherForm = document.querySelector("form");

const weatherInfo = document.querySelector("weather-info");
const weatherLocation = document.querySelector("weather-location");
const weatherImage = document.querySelector("weather-image");
const weatherTemperature = document.querySelector("weather-temperature");
const weatherWindSpeed = document.querySelector("weather-wind-speed");

weatherForm.addEventListener("submit", () => {
    console.log(location.value);
    getWeather(location.value)
    .then(function(response) {
        return processData(response)
    }).then(function(response) {
        weatherLocation.textContent = response.city;
    });
    console.log("test");

})