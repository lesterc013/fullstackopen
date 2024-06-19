import { useState, useEffect } from "react"
import axios from 'axios'

const Search = ({handleChange}) => {
  return (
    <input onChange={handleChange} />
  )
}

const App = () => {
  // const [searchValue, setSearchValue] = useState(null)
  // Testing
  const [searchValue, setSearchValue] = useState('')
  const [countriesNames, setCountriesNames] = useState(null)

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

  // Testing search functionality
  if (countriesNames) {
    console.log(countriesNames[0])
  }

  const allURL = 'https://studies.cs.helsinki.fi/restcountries/api/all'
  const specificURL = 'https://studies.cs.helsinki.fi/restcountries/api/name/'

  const handleSearch = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <>
      <Search handleChange={handleSearch} />
    </>
  )
}

export default App
