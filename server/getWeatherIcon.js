// axios for http requesting
const axios = require('axios');

module.exports = async function getWeatherData({
  imgID
}) {
  try {
    const response = await axios.get(`http://openweathermap.org/img/wn/${imgID}@2x.png`);
    return response.data
  } catch (error) {
    return error.data
  }
}