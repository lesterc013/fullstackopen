import { useEffect, useState } from "react"
import axios from "axios"
import Weather from "./Weather"

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

export default Specific