// Bring in dependencies
const express = require('express')
const cors = require('cors')
const app = express()
// Bring in Environment Variables
require('dotenv').config()
// Use CORS
app.use(cors())
// Set server PORT
const port = process.env.PORT || 5500
// Import my function that brings in the API data
const getWeatherData = require('./getWeatherData')

app.get('/:location', async function (req, res) {
  let result = await getWeatherData(req.params.location);
  !result ? res.send({
    data: 'No Result'
  }) : res.send(result)
})

app.listen(port)