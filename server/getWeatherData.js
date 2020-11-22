// axios for http requesting
const axios = require('axios');
// Environment Variables
require('dotenv').config()
// API ID
const API_ID = process.env.API_ID

module.exports = async function getWeatherData(location) {
  try {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${API_ID}`);
    return response.data
  } catch (error) {
    return error.data
  }
}