function getWeather(location) {
    fetch(`https://api.weatherapi.com/v1/current.json?key=786cfcfa7077405f90982207241303&q=${location}`, {mode: "cors"})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        console.log(response);
        console.log(response.current.feelslike_f);
    })
    .catch(function(err) {
        console.error(err);
    })
}


getWeather("park city")
console.log("test");