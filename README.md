# The Weather Application - WIP

## Objective

Consolidate your knowledge on:

- A typical AJAX flow: send asynchronous requests to a remote server and process the results
- DOM manipulation: changing the DOM based on the results of the AJAX requests
- Learn to aggregate and parse data fetched from an api

## Specifications

### Must-have features

- [x] In the home page the user can enter the city of his/her choice (think of the right HTML elements here)
- [x] On clicking the SUBMIT button or pressing ENTER the application will display the weather for the next 5 days - BUG! 5 Day weather forecast has 8 intervals daily, which are removed if interval is passed. from 00midnight next day's forecast starts. Take care of this!
- [x] The application must be responsive and mobile friendly - update
      💡

### Nice-to-have features (in no specific order)

- Display a line graph of temperature over time using a library such as Chart.js
- Remember the user choice on subsequent visits
- Allow the user to compare the weather in two cities
- Use the API of https://unsplash.com/ to show a photo of the city they entered in the form.
- [ ] Icon: if it is being looked at in the morning, show a sunrise graphic; show stars and a moon if it is night.

### Instructions

- [x] Create an account on OpenWeather, and generate a key
- [x] Get the weather data using the native JS fetch() method (if you like, you can also check out axios)

### Refactoring ES6

- Use functions (pref. arrow functions) which should do one task only
- Modules

### Bundling JS
