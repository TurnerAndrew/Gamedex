const express = require('express') //require express
const libCtrl = require('./controllers/libraryController.js') //shorthand for libraryController

const app = express() 
const SERVER_PORT = 5517

app.use(express.json())

app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} has ears on.`))//activates SERVER_PORT and displays a confirmation message

//Endpoints
app.get('/api/games', libCtrl.getAllGames)
app.post('/api/games', libCtrl.addGame)
// app.put('api/games/:id', libCtrl.editGame)
// app.delete('/api/games/:id', libCtrl.deleteGame)
