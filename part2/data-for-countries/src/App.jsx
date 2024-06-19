import { useState, useEffect } from "react"
import axios from 'axios'
import Search from "./components/Search"
import Display from "./components/Display"

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
    setSearchValue(countryName)
  }

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
