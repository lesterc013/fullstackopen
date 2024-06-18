import axios from "axios"

/**
 * getNumbers
 * create
 * 
 */

const baseUrl = 'http://localhost:3001/persons'

const getNumbers = () => {
  // Get the request --> Will get a response as the Promise value consisting of things like the request url, the methods but most importantly, the data
  const request = axios.get(baseUrl)
  return request.then(response => response.data) // Note that no curly braces because we want to RETURN the value of response.data to this Promise, that will be then returned in App.jsx to be used further
}

export default { getNumbers }