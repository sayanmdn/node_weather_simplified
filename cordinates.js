const axios = require('axios')

getCoordinate = (location) => {

  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + location + '.json?access_token=pk.eyJ1Ijoic2F5YW5tZG4iLCJhIjoiY2tja2NuMHd3MHg3czJzbzJxZG8xc2hlZCJ9.wDyzXtxpLDN-wFwqmSr0ag'

  return axios(url).then(({ data }) => {
    console.log(JSON.stringify(data.features[0].place_name))
    const coordinates = {
      lat: data.features[0].center[1],
      lng: data.features[0].center[0]
    }
    return coordinates;
  })

}
module.exports.getCoordinate = getCoordinate

