const weather = require('./weather.js')
const cordinates = require('./cordinates.js')

const location = process.argv[2]

cordinates.c(location, (result) => {
  weather.w(result.lat, result.lng)
})
