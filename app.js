const weather = require('./weather.js')
const logger = require('morgan');
const cordinates = require('./cordinates.js')

const express = require('express');

const app = express();

app.use(logger())

const port = 3001;

app.get('/weather', async (req, res) => {
  const { location } = req.query;

  const { lng, lat } = await cordinates.getCoordinate(location);
  const { data } = await weather.w(lat, lng);

  console.log({ data })

  res.send(data)
})

app.listen(port, () => {
  console.log(`Running on ${port}`);
});
