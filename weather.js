const axios = require('axios');
function weather(lat, lng) {

  const url = 'https://api.darksky.net/forecast/2164b054baafd4500a0dbe1a44b40004/' + lat + ',' + lng + '?units=si&exclude=minutely,hourly,daily,alerts,flags'
  return axios(url).catch(error => {
    console.log(error);
    throw error;
  });
}

module.exports.w = weather;
