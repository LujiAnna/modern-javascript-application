import {date} from './date.js';

export let greeting = () => {
  let greet ='';
  date.getHours() < 12 ? greet = 'Good morning': 
  date.getHours() < 18 ? greet = 'Good afternoon': greet = 'Good evening';     
  return greet;
}