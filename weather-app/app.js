const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast')

//  console.log(process.argv[2]);
const address = process.argv[2]

if (!address) {
  console.log('Please provide an address');
} else {
  geocode(address, (error, { longitude, latitude, location }) => {
    // const { longitude, latitude, location } = data
    if (error) {
      return console.log(error)
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error)
      }

      console.log(location)
      console.log(forecastData)
    })
  });
}



