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

app.get('/info', (request, response) => {
    const date = new Date()

    response.send(`<p>Phonebook has info for ${phonebook.length} people</p> <p>${date}</p>`)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = phonebook.find(person => person.id === id)

    if (!person) {
        return response.status(400).end('Bad request: ID requested is not in phonebook')
    }

    response.json(person)
})

const PORT = 3001
app.listen(PORT)
console.log('Server running on port', PORT)