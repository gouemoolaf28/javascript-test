const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=d187586b75a32cac0242d05d9c71f1ee&query=37.8267,-122.4233&units=f';

// request({ url: url, json: true }, (error, response) => {

//     if (error) {
//       console.log(`Unable to connect to weather service ${error}`)
//     }
//     else if (response.body.error) {
//       console.log('Unable to find location')
//     }
//     else {
//       const data = response.body.current
//       console.log(`${data.weather_descriptions[0]} It is currently ${data.temperature} degres out. It feels like ${data.feelslike} degres out.`);
//     }
//   })

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZ291ZW1vb2xhZjI4IiwiYSI6ImNrYmRoenR1azA3MHYydWxjdWM3dXAwd2UifQ.SFM1_umU-ne9tshExHDSWQ&limit=1';

request({ url: geocodeURL, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect the geolocation service');
  }
  else if (response.body.features.length === 0) {
    console.log('Unable to find location. Try again with different search terms!')
  }
  else {
    const data = response.body.features[0].center
    console.log(`Longitude ${data[0]} and latitude ${data[1]}`);
  }

});