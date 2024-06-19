import { useEffect } from "react"

const Search = ({handleChange}) => {
  return (
    <input onChange={handleChange} />
  )
}

const App = () => {

  const handleChange = (event) => {
    console.log(event.target.value)
  }

  return (
    <>
      <Search handleChange={handleChange} />
    </>
  )
}

export default App
