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


app.get('/', function (req, res) {
  res.send(`<h1>Welcome to Nathans Weather App Backend.</h1>
  <p>It looks like you may be lost, please check your code and ensure you are sending me the proper request.</p>`)
})

app.get('/weather/:location', async function (req, res) {
  let result = await getWeatherData(req.params.location)
  res.send(result)
})

app.listen(port)