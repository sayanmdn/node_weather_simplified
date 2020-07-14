const request = require('request');
function weather(lat, lng) {

  const url = 'https://api.darksky.net/forecast/2164b054baafd4500a0dbe1a44b40004/' + lat + ',' + lng + '?units=si&exclude=minutely,hourly,daily,alerts,flags'
  console.log(lat, lng)
  request({ url: url, json: true }, (error, res) => {
    if (error) return console.log(error);
    console.log('Now temperature is ' + res.body.currently.temperature + lng)
  })
}

module.exports.w = weather;
