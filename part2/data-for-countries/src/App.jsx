import { useState, useEffect } from "react"
import axios from 'axios'

const Search = ({handleChange}) => {
  return (
    <input onChange={handleChange} />
  )
}

const Display = ({ countriesNames, searchValue, handleShow }) => {
  
  if (searchValue === '' || searchValue === null) {
    return null
  }

  const filteredCountries = countriesNames.filter(countryName => countryName.toLowerCase().includes(searchValue.toLowerCase()))

  if (filteredCountries.length > 10) {
    return <div>Too many matches, specify another filer</div>
  }
  else if (filteredCountries.length == 1) {
    return <Specific specificCountryName={filteredCountries} />
  }
  else {
    return (
        filteredCountries.map(countryName => <Country key={countryName} countryName={countryName} handleShow={handleShow} />
      )
    )
  }
}

const Specific = ({specificCountryName}) => {
  console.log("Rendering...")
  const [specificCountry, setSpecificCountry] = useState(null)
  const specificURL = 'https://studies.cs.helsinki.fi/restcountries/api/name/'
  
  // Without useEffect, we will keep re-rendering the programme. This is because of setSpecificCountry below where everytime a state is set, it causes a re-render
  // useEffect should only run if there is a change to specificCountryName
  useEffect(() => {
    console.log("useEffect to set specific country")
    axios
    .get(`${specificURL}${specificCountryName}`)
    .then(response => response.data)
    .then(country => setSpecificCountry(country))
  }, [specificCountryName])

    if (!specificCountry) {
      return null
    } 

    const languages = []
    for (const [k, v] of Object.entries(specificCountry.languages)) {
      languages.push(v)      
    }

    return (
    <>
      <h1>{specificCountry.name.common}</h1>
      <p>Capital: {specificCountry.capital}</p>
      <p>Area: {specificCountry.area}</p>
      <h2>Languages</h2>
      <ul>
        {languages.map(language => <li key={language}>{language}</li>)}
      </ul>
      <img src={specificCountry.flags.png} alt={`${specificCountry.name.common} flag`} />
      <Weather lat={specificCountry.capitalInfo.latlng[0]} lon={specificCountry.capitalInfo.latlng[1]} capital={specificCountry.capital} />
    </>
  )
}

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

const Country = ({ countryName, handleShow }) => {
  return (
    <div>
      {countryName} <button onClick={() => handleShow(countryName)} >show</button>
    </div>
  ) 
}

const App = () => {
  const [searchValue, setSearchValue] = useState(null)
  const [countriesNames, setCountriesNames] = useState(null)
  
  const allURL = 'https://studies.cs.helsinki.fi/restcountries/api/all'

  // setCountries initial state with the names of all countries in the 'all' endpoint
  useEffect(() => {
    console.log('useEffect initiated after initial render')
    axios
      .get(allURL)
      .then(response => response.data)
      .then(allCountries => {
        setCountriesNames(allCountries.map(countries => countries.name.common))
      })
  }, [])

  const handleSearch = (event) => {
    setSearchValue(event.target.value)
  }

  const handleShow = (countryName) => {
    // I have the countryName
    // If i setShow, then I can pass it to Display component
    // To then filter the countriesNames entire list
    // Which will cause length to be 1 and hence call Specific
    setSearchValue(countryName)
  }

  // If countriesNames null
  if (!countriesNames) {
    return (
      <>
        find countries <Search handleChange={handleSearch} />
      </>
    )
  }

  return (
    <>
      find countries <Search handleChange={handleSearch} />
      <Display countriesNames={countriesNames} searchValue={searchValue} handleShow={handleShow} />
    </>
  )
}

export default App
