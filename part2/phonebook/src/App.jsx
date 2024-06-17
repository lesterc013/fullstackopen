import { useState } from 'react'
import Form from "./components/Form.jsx"
import Filter from "./components/Filter.jsx"
import Numbers from "./components/Numbers.jsx"

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: "040-1234567"
    },
    { 
      name: 'Lester Chan',
      number: "93219818"
    },
    { 
      name: 'Tom Cat',
      number: "098765432"
    },
    { 
      name: 'Jerry Lee Kwok Song Bo',
      number: "00999999000"
    },
    { 
      name: 'Big Ray Wong',
      number: "092092309"
    },
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  // const [newFilter, setNewFilter] = useState('') Don't need this because like one of the past examples, the newFilter is always "one step behind" hence can't use this to filter -- or rather no point since we won't need to access it again
  const [filteredPersons, setFilteredPersons] = useState(persons)

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
      setFilteredPersons(filteredPersons.concat({
        name: newName,
        number: newNumber
      }))
    }
  }

  const handleFilter = (event) => {
    const filter = event.target.value.toLowerCase()
    setFilteredPersons(persons.filter(person => person.name.toLowerCase().includes(filter)))
  }
  
  return (
    <div>
      <h1>Phonebook</h1>
      <Filter handleFilter={handleFilter} />
      <Form handleSubmit={handleSubmit} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Numbers persons={filteredPersons} />
    </div>
  )
}

export default App