// trigger drop down
$(".dropdown-trigger").dropdown();

// WEATHER
const btn = document.querySelector('button');
const placeCity = document.querySelector('.helper-text');
const temp = document.querySelector('h4');
const highLow = document.querySelector('.high-low');
const low = document.querySelector('.low');
const description = document.querySelector('.description');
const rain = document.querySelector('.rain');

const cityElement = document.querySelector('#city');
const time = document.querySelector('.time');
const timeWeather = document.querySelector('.time-weather');
const greetings = document.querySelector('#greetings');

// TIME
let timeObject = new Date();
let getHourz = timeObject.getHours();
let getMinutez = timeObject.getMinutes();
let getDay = timeObject.getUTCDay();
// console.log(getDay); //0 for Sunday, 1 for Monday, 2 for Tuesday, and so on.

// Determine days
switch(getDay) {
  case 0:
    getDay = 'Sunday';
    break;
  case 1:
    getDay = 'Monday';
    break;
  case 2:
    getDay = 'Tuesday';
    break;
  case 3:
    getDay = 'Wednesday';
    break;
  case 4:
    getDay = 'Thursday';
    break;
  case 5:
    getDay = 'Friday';
    break;  
  case 5:
    getDay = 'Saturday';
      break; 
  default:
    getDay = 'Coffee Time';
}

let greeting = () => {

getHourz < 10 ? getHourz = '0' + getHourz: getHourz;
getMinutez < 10 ? getMinutez = '0' + getMinutez : getMinutez;
getHourz < 12 ? greet = 'Good morning': 
getHourz < 18 ? greet = 'Good afternoon': greet = 'Good evening';     

return greet;
};

// console.log(getMinutez);
// console.log(typeof(getMinutez));
greetings.innerHTML = greeting();
console.log(greeting());

time.innerHTML = `<span class='show-day'>${getDay}</span> ${getHourz}:${getMinutez}`;

// LOCATION
// var options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0
// };

// function getPosition(pos) {
//   let crd = pos.coords;

//   let lat = crd.latitude;
//   let lon = crd.longitude;

//   console.log('Your current position is:');
//   console.log(`Latitude : ${lat}`);
//   console.log(`Longitude: ${lon}`);
//   console.log(`More or less ${crd.accuracy} meters.`);
// }
// getPosition();

// function error(err) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
// }

// error shows. it needs to be from https , so use localhost server
// navigator.geolocation.getCurrentPosition(getPosition, error, options);

// FORECAST 
const days = document.querySelectorAll('.day');

// API
const api = 'https://api.openweathermap.org/data/2.5';
let units = 'units=metric';
const apiKey = 'b95e3e61a17d2eadd3e525d8145db6e5';

var city = '';

var getCity = () => {
  return city=cityElement.value;
  //  or dont use `return` but also remove `{}`
  // read more: https://stackoverflow.com/questions/45754957/why-doesnt-my-arrow-function-return-a-value
}

let callApi  = () => {
  // grab user input
  // let city = cityElement.value;
  //  city = cityElement.value;

  city = getCity();
  // const fetchResponsePromise = fetch(resource [, init])
  let url_weather =`${api}/weather?q=${city}&${units}&appid=${apiKey}`
  let url_forecast = `${api}/forecast?q=${city}&${units}&appid=${apiKey}`

  // fetch temperature from url
  fetch(url_weather)
  .then(function response(response){
  // console.log('hey');
  // console.log(response);
    return response.json(); 
  })
.then(function(myJson) {
  console.log(myJson);

placeCity.innerHTML = `${myJson.name}, ${myJson.sys.country}`;

// icon: https://openweathermap.org/weather-conditions
// icon: http://openweathermap.org/img/wn/10d@2x.png style the icon
let icon = myJson.weather[0].icon;
// console.log(myJson.list[0].main.temp);
temp.innerHTML = `${Math.round(myJson.main.temp)}&deg;`;
// temp.innerHTML = `${myJson.main.temp} &#8451;`;
highLow.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="icon" id='icon'> <span class="helper-text  grey-text lighten-5"> High: ${Math.round(myJson.main.temp_max)}&deg; | Low: ${Math.round(myJson.main.temp_min)}&deg;</span>`;
description.innerHTML = `with ${myJson.weather[0].description}`;

// remove typed city from input
  cityElement.value = '';

  //5 Days Weather Forecast
 // use: api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}

// Fetch another API
return fetch(url_forecast);

  }).then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(response);
    }
  }).then(function (data) {
    console.log(data);
    // console.log(data.list);
  // TODO: First, get local current date object, and then the following 5 dates from the date dt_txt
    // use lat/lon or timezone
    // console.log(data.list[0].dt_txt.slice(-8, -3));
    // let timeLocation = new Date(data.list[0].dt) ;
    // console.log(timeLocation);
    // timeWeather.innerHTML = `Time in ${data.city.name} is ${data.list[0].dt_txt.slice(-8, -3)}`;
    // Loop through array of objects for 5 days- index 0 to 4
let weatherForecast = [];
    for (let i = 0; i < 5; i++) {
      // Access data object
  // TODO: FIX BUG!!! Each day, forecast is done in 3h interval from midnight00 to 9p2100  (8times)
  // TODO: Iterate depending on time of day AND iterate to get correct day (use filter!)
  // TODO: First iterate through DATE AND TIME, to get correct temperature
  // TODO: Automatically update the weather after 3 or less hours
  // TODO: display day using getDay with first 3 letters eg Mon for monday and so on

  weatherForecast.push(data.list[i].main.temp);
  // console.log(weatherForecast);
}

// console.log(weatherForecast);

days.forEach(function(singleDay,i) {
  // console.log(i);
  // console.log(singleDay);
// console.log(forecast)
 // grab indexwise from data.list[i].main.temp
 // day.innerHTML = `${forecast}&deg;`;
  singleDay.innerHTML = `${Math.round(weatherForecast[i])}&deg;`;

});
  }).catch(function (error) {
    console.warn(error);
  })
}; // close addEventListener

// Keyboard INTERACTION
let x = document.addEventListener('keyup', (event) => {
  const keyName = event.key;
  // console.log(event);
  // console.log(event.key);
  // key - 'Enter', code - 'Enter', keyCode - 13
  if (keyName === 'Enter') {
    // Access input value 
    city = getCity();
    // console.log(city);
    callApi();
  }
}, false);

// City Button INTERACTION
btn.addEventListener('click', callApi);

// TODO: Hourly button interaction 

// ACCORDION
const mainElements = document.querySelectorAll('.main');
const contentElements = document.querySelectorAll('.content');
// test in console to get 2 objects, can make use of it mainElements, contentElements

// Interaction
for(let i = 0; i < mainElements.length; i++) {
  mainElements[i].addEventListener('click', function(){
    // console.log(mainElements[i].nextElementSibling);
    // console.log(mainElements[i].nextElementSibling.classList.toggle('active'));
    mainElements[i].nextElementSibling.classList.toggle('active')
  })
}