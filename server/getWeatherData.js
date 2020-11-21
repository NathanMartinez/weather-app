const axios = require('axios');

require('dotenv').config()

const API_ID = process.env.API_ID

module.exports = async function getWeatherData(location) {
  try {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${API_ID}`);
    return response.data
  } catch (error) {
    console.error(error);
  }
}