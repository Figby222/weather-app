function getWeather(location) {
    fetch(`https://api.weatherapi.com/v1/current.json?key=786cfcfa7077405f90982207241303&q=${location}`, {mode: "cors"})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        processData(response).then(result => console.log(result));
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

getWeather("park city")
console.log("test");