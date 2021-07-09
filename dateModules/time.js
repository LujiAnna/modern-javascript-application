import {date} from './date.js'
export let time = () => {
  let hours = date.getHours();
  let minutes = date.getMinutes();

  hours < 10 ? hours = '0' + hours: hours;
  minutes < 10 ? minutes = '0' + minutes : minutes;

  return { 
    hours: hours,
    minutes: minutes 
  };
}