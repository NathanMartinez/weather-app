const getWeatherData = async (location, setData) => {
  try {
    await fetch(`http://localhost:5000/weather/${location}`)
      .then(res => res.json())
      .then(json => setData(json))
  } catch (error) {
    console.error(error)
  }
}

export default getWeatherData