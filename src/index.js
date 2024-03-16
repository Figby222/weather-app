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
const submitBtn = document.querySelector("button");

submitBtn.addEventListener("click", () => {
    console.log(location.value);
    getWeather(location.value)
    .then(function(response) {
        return processData(response)
    }).then(function(response) {
        console.log(response);
    });
    console.log("test");

})