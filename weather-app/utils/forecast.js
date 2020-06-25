const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=d187586b75a32cac0242d05d9c71f1ee&query=' + latitude + ',' + longitude + '&units=f';//m

  request({ /*url: url*/ url, json: true }, (error, /*response*/ { body }) => {
    if (error) {
      callback('Unable to connect to weather services', undefined)
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degres out. It feels like ${body.current.feelslike} degres out`)
    }
  })
}



module.exports = forecast;