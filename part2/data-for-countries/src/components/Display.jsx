import Specific from "./Specific"
import Country from "./Country"

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

export default Display