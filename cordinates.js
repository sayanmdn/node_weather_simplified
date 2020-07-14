const request = require('request')

cor = (location, callback) => {

  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + location + '.json?access_token=pk.eyJ1Ijoic2F5YW5tZG4iLCJhIjoiY2tja2NuMHd3MHg3czJzbzJxZG8xc2hlZCJ9.wDyzXtxpLDN-wFwqmSr0ag'

  request({ url: url, json: true }, (error, res) => {
    if (error) return console.log(error)
    console.log(JSON.stringify(res.body.features[0].place_name))
    const data = {
      lat: res.body.features[0].center[1],
      lng: res.body.features[0].center[0]
    }
    callback(data);

  })

}
module.exports.c = cor

