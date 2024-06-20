const express = require('express')
const app = express()

const phonebook = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/', (request, response) => {
    response.send('<h1>Phonebook Exercise</h1>')
})

app.get('/api/persons', (request, response) => {
    // response.send(phonebookData) -- nothing wrong with this if data passed in is json - except .json converts non-json to json so that would help filter another layer
    response.json(phonebook)
})

// Phonebook has info for 2 people
// Date
/**
 * phonebookData.length
 * Date object
 */

app.get('/info', (request, response) => {
    const date = new Date()

    response.send(`<p>Phonebook has info for ${phonebook.length} people</p> <p>${date}</p>`)
})

const PORT = 3001
app.listen(PORT)
console.log('Server running on port', PORT)