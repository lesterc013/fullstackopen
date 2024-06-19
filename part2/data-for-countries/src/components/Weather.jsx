import { useEffect, useState } from "react"
import axios from "axios"

const Weather = ({ lat, lon, capital }) => {
  const [weatherDetails, setWeatherDetails] = useState(null)
  const apiKey = import.meta.env.VITE_KEY
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`

  useEffect(() => {
    axios
      .get(weatherURL)
      .then(response => response.data)
      .then(weather => setWeatherDetails(weather))
  }, [lat, lon, weatherURL])

  if (!weatherDetails) {
    return null
  }

  return (
    <>
      <h2>{`Weather in ${capital}`}</h2>
      <div>Temperature: {weatherDetails.main.temp} C</div>
      <img src={`https://openweathermap.org/img/wn/${weatherDetails.weather[0].icon}@2x.png`} alt='weather icon' />
      <div>Wind: {weatherDetails.wind.speed} m/s</div>
    </>
  )
}

export default Weather