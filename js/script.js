const apiKey = "4f3c7240a8f0d8d3b933b7148a846627";

//give a city name, get coordinates
const getLocation = (city) => {
    `fetch(api.openweathermap.org/geo/1.0/direct?q={city}&limit=1&appid={apiKey})`
}

//give coordinates, get 5 day forecast
// const getWeather = ([latitude, longitude]) => {
//     fetch(api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key})
    
// }

//takes the content of search box, runs getLocation to get coords, then runs getWeather with coords to return forecast
const getLocWeather = () => {};



const weatherBtnEl = document.getElementById('search-btn');

weatherBtnEl.addEventListener( "click", (e) => {
    e.preventDefault();
    console.log('button works')
})



//set the content of the divs by targeting by id then assign content with innerHtml or whatever the right one is