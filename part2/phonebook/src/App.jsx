import { useState, useEffect } from 'react'
import Form from "./components/Form.jsx"
import Filter from "./components/Filter.jsx"
import Numbers from "./components/Numbers.jsx"
import phonebook from './services/phonebook.js'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    phonebook.getNumbers().then(allNumbers => {
      setPersons(allNumbers)
    })
  }, [])

  const handleNameChange = event => setNewName(event.target.value)
  
  const handleNumberChange = event => setNewNumber(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`)
    } else {
      setPersons(persons.concat({
        name: newName,
        number: newNumber
      }))
    }
  }

  const handleFilter = (event) => {
    setNewFilter(event.target.value.toLowerCase())
  }

  console.log('Testing filter', newFilter ? persons.filter(person => {person.name.toLowerCase().includes(newFilter)}) : persons)
  
  return (
    <div>
      <h1>Phonebook</h1>
      <Filter handleFilter={handleFilter} />
      <Form handleSubmit={handleSubmit} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      {/* Changed implementation to remove need for filteredPersons array -- Simply filter the persons array within the Numbers props */}
      <Numbers persons={
        newFilter ? persons.filter(person => {
          return person.name.toLowerCase().includes(newFilter)
        }) : persons
      } />
    </div>
  )
}

export default App