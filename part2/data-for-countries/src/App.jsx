import { useState, useEffect } from "react"
import axios from 'axios'

const Search = ({handleChange}) => {
  return (
    <input onChange={handleChange} />
  )
}

const Display = ({ countriesNames, searchValue }) => {
  const filteredCountries = countriesNames.filter(countryName => countryName.toLowerCase().includes(searchValue))

  if (searchValue === '') {
    return null
  }
  else if (filteredCountries.length > 10) {
    return <div>Too many matches, specify another filer</div>
  }
  else if (filteredCountries.length == 1) {
    // Call GET on the specific URL
    // Could probably do this as a specific component since this is gettingg large
    return <Specific specificCountryName={filteredCountries} />
  }
  else {
    return (
        filteredCountries.map(countryName => <Country key={countryName} countryName={countryName} />
      )
    )
  }
}

const Specific = ({specificCountryName}) => {
  const [specificCountry, setSpecificCountry] = useState(null)
  const specificURL = 'https://studies.cs.helsinki.fi/restcountries/api/name/'
  // Without useEffect, we will keep re-rendering the programme. This is because of setSpecificCountry below where everytime a state is set, it causes a re-render
  // useEffect should only run if there is a change to specificCountryName
  useEffect(() => {
    axios
      .get(`${specificURL}${specificCountryName}`)
      .then(response => response.data)
      .then(country => setSpecificCountry(country))
    }, [specificCountryName])

    if (!specificCountry) {
      return null
    } 

    const languages = []
    for (const [v] of Object.entries(specificCountry.languages)) {
      languages.push(v)      
    }
    console.log(languages)
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
    </>
  )
}

const Country = ({countryName}) => {
  return <div>{countryName}</div>
}

const App = () => {
  // const [searchValue, setSearchValue] = useState(null)
  // Testing
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
      <Display countriesNames={countriesNames} searchValue={searchValue} />
    </>
  )
}

export default App
