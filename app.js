import {date} from './dateModules/date.js';
import {day} from './dateModules/day.js';
import {greeting} from './dateModules/greeting.js';
import {time} from './dateModules/time.js';

import {city} from './userModules/city.js'

'use strict';

// trigger drop down
$(".dropdown-trigger").dropdown();

// WEATHER
const btn = document.querySelector('button');
const placeCity = document.querySelector('.helper-text');
const temp = document.querySelector('h4');
const highLow = document.querySelector('.high-low');
const description = document.querySelector('.description');
// const rain = document.querySelector('.rain');

// FORECAST 
const days = document.querySelectorAll('.day');
const daysName = document.querySelectorAll('.name-day');


// API
const api = 'https://api.openweathermap.org/data/2.5';
let units = 'units=metric';
const apiKey = 'b95e3e61a17d2eadd3e525d8145db6e5';
let part = 'minutely,alerts';
// included: current, hourly, daily

const cityElement = document.querySelector('#city');
const showTime = document.querySelector('.time-show');
// const timeWeather = document.querySelector('.time-weather');
const greetings = document.querySelector('#greetings');

greetings.innerHTML = greeting();
showTime.innerHTML = `<span class='show-day'>${day()}</span> ${time().hours}:${time().minutes}`;

let callApi  = () => {
  // grab user input
  // console.log(city(cityElement));
  // TODO: Grab lat and lon from city name? or do double api call
  // const fetchResponsePromise = fetch(resource [, init])
  let urlCurrentWeather =`${api}/weather?q=${city(cityElement)}&${units}&appid=${apiKey}`
  // let url_forecast = `${api}/forecast?q=${city(cityElement)}&${units}&appid=${apiKey}`

  // fetch temperature from url
  fetch(urlCurrentWeather)
  // fetch(urlDailyWeather)
  .then(function response(response){
  // console.log(response);
    return response.json(); 
  })
  .then(function(myJson) {
  console.log(myJson);

  placeCity.innerHTML = `${myJson.name}, ${myJson.sys.country}`;

// icon: https://openweathermap.org/weather-conditions
let icon = myJson.weather[0].icon;
// console.log(myJson.list[0].main.temp);
temp.innerHTML = `${Math.round(myJson.main.temp)}&deg;`;
// temp.innerHTML = `${myJson.main.temp} &#8451;`;
highLow.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="icon" id='icon'> <span class="helper-text  grey-text lighten-5"> Hi: ${Math.round(myJson.main.temp_max)}&deg; | Lo: ${Math.round(myJson.main.temp_min)}&deg;</span>`;
description.innerHTML = `with ${myJson.weather[0].description}`;

// remove typed city from input
  cityElement.value = '';

let lat, lon;
lat = myJson.coord.lat;
lon = myJson.coord.lon;
console.log('lon: ', lon, 'lat: ', lat);

// Fetch another API
let urlDailyWeather =`${api}/onecall?lat=${lat}&lon=${lon}&exclude=${part}&${units}&appid=${apiKey}`

// return fetch(url_forecast);
return fetch(urlDailyWeather)
  }).then(function (response) {
    if (response.ok) {
      // console.log(response.json())
      return response.json();
    } else {
      return Promise.reject(response);
    }
  }).then(function (data) {
    console.log(data);

  let newDiv = [];
  let dateObj = [];

days.forEach((singleDay, index) => {
  singleDay.innerHTML = `${Math.round(data.daily[index].temp.max)}&deg; <span class="helper-text  grey-text lighten-5">${Math.round(data.daily[index].temp.min)}&deg;</span>`;

  // TODO: display day using getDay with first 3 letters eg Mon for monday and so on
  // current.dt Current time, Unix, UTC
  // daily.dt Time of the forecasted data, Unix, UTC
  // current first: dt: 1625832901
  // current second: dt: 1625833077,
  // daily index 0: dt: 1625828400
  // let current_1 = new Date(1625832901);
  // let current_2 = new Date(1625833077);
  // let daily_0 = new Date(1625828400);
  // console.log(current_1, current_2, daily_0);

  // TODO: Ask about this. seems to be about 3.5 hours behind(-), or half hour ahead(+)
  // Date - Full
  // console.log(new Date(data.daily[index].dt*1000 - (data.timezone_offset*1000))); // minus OR plus
  // Day - Numerical
  // console.log(new Date(data.daily[index].dt*1000 - (data.timezone_offset*1000)).getDay()); // minus OR plus
  // Day - Words - Cant work as its parsing today's date only

  // TODO: grab the first part with day's name. By first stringify the object 
  // console.log(new Date(data.daily[index].dt*1000 - (data.timezone_offset*1000)).toDateString()); // minus OR plus

  dateObj.push(new Date(data.daily[index].dt*1000 - (data.timezone_offset*1000)).toDateString());
  console.log((dateObj[index]).split(' ')[0]);
  // const event = new Date(1993, 6, 28, 14, 39, 7);
  // event.toDateString().toString().split(' ')
  // (4) ['Wed', 'Jul', '28', '1993']
  // event.toDateString().toString().split(' ')[0]  // 'Wed'

  daysName[index].innerHTML = `${(dateObj[index]).split(' ')[0]}`;
  
});

// let addContent = () => {

// }
  // document.body.onload = addElement;

  // function addElement () {
  //   // create a new div element
    //  newDiv[index] = document.createElement("div");
    //  console.log(newDiv[index]);
  
  //   // and give it some content
  //   const newContent = document.createTextNode("Hi there and greetings!");
  
  //   // add the text node to the newly created div
    // newDiv.appendChild(newContent);
  
  //   // add the newly created element and its content into the DOM
  //   const currentDiv = document.getElementById("div1");
  //   document.body.insertBefore(newDiv, currentDiv);
  // }

  // and give it some content
  // let newContent = document.createTextNode(`${Math.round(weatherForecast[index])}&deg;`);
  // console.log('new content: ', newContent);

  // add the text node to the newly created div (already created)
  // newDiv[index].appendChild(newContent);

  // add the newly created element and its content into the DOM
  // const currentDiv = document.getElementById("daily-forecast");
  // document.body.insertBefore(newDiv[index], singleDay);

  // function addTextNode(text) {
    // var newtext = document.createTextNode(text),
        // p1 = document.getElementById("p1");
    // p1.appendChild(newtext);
  // }
// }

// });
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