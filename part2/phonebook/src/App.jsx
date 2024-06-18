import { useState, useEffect } from 'react'
import Form from "./components/Form.jsx"
import Filter from "./components/Filter.jsx"
import Persons from "./components/Persons.jsx"
import phonebook from './services/phonebook.js'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    phonebook.getPeople().then(allPeople => {
      setPersons(allPeople)
    })
  }, [])

  const handleNameChange = event => setNewName(event.target.value)
  
  const handleNumberChange = event => setNewNumber(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`)
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
      }
      phonebook.addPerson(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
        })
    }
  }

  const handleFilter = (event) => {
    setNewFilter(event.target.value.toLowerCase())
  }

  const handleDelete = (id) => {
    const toDeletePerson = persons.filter(person => person.id == id)
    if (window.confirm(`Confirm delete ${toDeletePerson[0].name}?`)) {
      phonebook.deletePerson(id)
        .then(deletedPerson => {
          setPersons(persons.filter(person => person.id !== deletedPerson.id))
      })
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter handleFilter={handleFilter} />
      <Form handleSubmit={handleSubmit} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      {/* Changed implementation to remove need for filteredPersons array -- Simply filter the persons array within the Numbers props */}
      <Persons persons={
        newFilter ? persons.filter(person => {
          return person.name.toLowerCase().includes(newFilter)
        }) : persons} handleDelete={handleDelete} />
    </div>
  )
}

export default App