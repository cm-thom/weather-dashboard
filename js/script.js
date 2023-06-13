const apiKey = '2a70c788252f5dd21f3f2bcf99e3b20b';

const weatherBtnEl = document.getElementById('search-btn');
const searchInputEl = document.getElementById('search-input');

const cityEl = document.getElementById('cityEl');
const tempEl = document.getElementById('tempEl');
const windEl = document.getElementById('windEl');
const humidityEl = document.getElementById('humidityEl');


//give a city name, get coordinates
const getLocation = (city) => {
    return `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
};

//give coordinates, make call to current weather api
const getWeather = (coords) => {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${coords[0]}&lon=${coords[1]}&appid=${apiKey}`  
};

const updateCard = (data) => {
    cityEl.innerHTML = data.name;
    const fTemp = Math.round((data.main.temp - 273.15) * (9/5) + 32)
    tempEl.innerHTML = `Temperature: ${fTemp}`;
    windEl.innerHTML = `Wind Speed: ${data.wind.speed} m/sec`;
    humidityEl.innerHTML = `Humidity: ${data.main.humidity}%`;
};


weatherBtnEl.addEventListener( "click", (e) => {
    e.preventDefault();
     fetch(getLocation(searchInputEl.value))
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        const latitude = data[0].lat;
        const longitude = data[0].lon;
        const coords = [latitude, longitude];
    fetch(getWeather(coords))
        .then((response) => response.json())
        .then((data) => {
            updateCard(data);
        //run the function to update the html content
        })
    })
})
