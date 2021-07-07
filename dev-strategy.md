# Project Set Up

## UI

- Design choice: minimal
- CSS Framework: [MaterializeCSS](https://materializecss.com/getting-started.html)
- Font: [Google Font Raleway](https://fonts.google.com/specimen/Raleway?query=ralewa)
- Icons: [Material Design Icons](https://materializecss.com/icons.html)
- CSS Library: [Normalize css](https://necolas.github.io/normalize.css/)
- Color: Font - Primary white. Baby Powder FDFFFC
- Color: Space - Primary White. Ivory FCFDF1
- Color: Font - Secondary Emereld 38947F
- Image - Places

## UX

- Pain-points: unreliability/errors/inconsistency } Accuracy solution
  - How accurate is [OpenWeatherMap]()?
    The figure shows that MAE is about 0.5 degrees, RMSE is less than 2 degrees, reliability is between 90% and 100%, and inaccuracy is about 1% (less is better). It is clear that the OpenWeather NWP model provides the most accurate result.
- Easy and fun to use for all ages (young and old)
  - [Minimal, Graphical and a hint of fun](https://www.figma.com/file/zjnYkm552go4QnFTLSAbS8/Weather-App?node-id=0%3A1)
- User would like to open and immediately see the weather today
  - OR First: Ask for user location in a pop up box: yes/no
  - OR see map, in which would ask if possible to wanna share location
    -> Yes should zoom to his/her current location and then display weather - If declines please enter city/zip
- Display name of city and temperature, rain, wind, humidity, etc
- Second: Keep this data so won't have to be entered again in a displayed city image and temp, with option to enter another location or extract location from phone

### MIA

- Enter location/city -> weather page : done
- Enter city -> + Add city (option to enter another city)
- City name > (Dropdown to choose another city in same country)
- City name suggestions from the drop box when typing

### Tech Stack

Javascript

### Extra features

Language choice, Share, Tweet, Chrome, browser, saver, app, android, ios
