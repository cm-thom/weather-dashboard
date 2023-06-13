const apiKey = '2a70c788252f5dd21f3f2bcf99e3b20b';


//give a city name, get coordinates
const getLocation = (city) => {
    return `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
};



//takes the content of search box, runs getLocation to get coords, then runs getWeather with coords to return forecast
const getLocWeather = () => {};


const weatherBtnEl = document.getElementById('search-btn');
const searchInputEl = document.getElementById('search-input');

weatherBtnEl.addEventListener( "click", (e) => {
    e.preventDefault();
    fetch(getLocation(searchInputEl.value))
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        const latitude = data[0].lat;
        const longitude = data[0].lon;
        return [latitude, longitude];
    })
})

//give coordinates, make call to current weather api, get info, update content of html card
// const getWeather = ([latitude, longitude]) => {
//     fetch(api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key})
    
// }




//set the content of the divs by targeting by id then assign content with innerHtml or whatever the right one is