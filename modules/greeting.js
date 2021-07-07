export let greeting = () => {

  getHourz < 10 ? getHourz = '0' + getHourz: getHourz;
  getMinutez < 10 ? getMinutez = '0' + getMinutez : getMinutez;
  getHourz < 12 ? greet = 'Good morning': 
  getHourz < 18 ? greet = 'Good afternoon': greet = 'Good evening';     
  
  return greet;
  };