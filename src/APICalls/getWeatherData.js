const getWeatherData = async (location, setData) => {
  try {
    await fetch(`http://10.0.0.32:5000/${location}`)
      .then(res => res.json())
      .then(json => setData(json))
  } catch (error) {
    console.error(error)
  }
}

export default getWeatherData