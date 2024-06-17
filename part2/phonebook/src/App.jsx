import { useState } from 'react'

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
    }
  }

  const handleFilter = (event) => {
    const filter = event.target.value.toLowerCase()
    setFilteredPersons(persons.filter(person => person.name.toLowerCase().includes(filter)))
  }
  
  return (
    <div>
      <h1>Phonebook</h1>
      <div>filter shown with a <input onChange={handleFilter} /></div>
      <form onSubmit={handleSubmit} >
        <h2>add a new</h2>
        <div>
          name: <input onChange={handleNameChange} />
        </div>
        <div>number: <input onChange={handleNumberChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map(person => <div key={person.name}>{person.name} {person.number}</div>)}
    </div>
  )
}

export default App