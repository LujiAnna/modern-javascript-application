import {date} from './date.js'

export let day = (index) => {

let day = date.getUTCDay();
// console.log(getDay); //0 for Sunday, 1 for Monday, 2 for Tuesday, and so on.

 switch(day) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;  
  case 6:
    day = 'Saturday';
      break; 
  default:
    day = 'Coffee Time';
}
// console.log(day);
// must `return` day
return day;
}
