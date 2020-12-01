const library = [
    {
        id : 1,
        service : 'Steam',
        games : [],
    },
    {
        id : 2,
        service : 'Epic Games',
        games : [],
    },
    {
        id : 3,
        service : 'GOG',
        games : [],
    },
    {
        id : 4,
        service: 'Uplay',
        games: [],
    },
    {
        id: 5,
        service: 'Origin',
        games: [],
    },
    {
        id: 6,
        service: 'Twitch',
        games: [],
    },
    {
        id: 7,
        service: 'XBox Games Pass',
        games: [],
    },
    {
        id: 8,
        service: 'Green Man Gaming',
        games: [],
    },
    {
        id: 9,
        service: 'itch.io',
        games: [],
    }
]

module.exports = {
    
    getAllGames: (req, res) => {
        if(req.query.service){
            const filteredGames = library.filter((element) => element.service === req.query.service)
            return res.status(200).send(filteredGames)
        }
        res.status(200).send(library)
    },

    addGame: (req, res) => {
        const {game, service} = req.body
        const index = library.findIndex((element) => element.service === service)
        
        if(index === -1){
            return res.status(404).send('Choose a valid service.')
            } 
        
        library[index].games.push(game)
        
        return res.status(200).send(library)
        },

    editGame: (req, res) => {
        const oldGame = req.params.game
        const {newGame} = req.body
        const index = library.findIndex((element) => element.games.includes(oldGame))
        
        if(index === -1){
            return res.status(404).send(`${oldGame} not found.`)
        }

        const gamesMapped = library[index].games.map((element) => element === oldGame ? element = newGame : element)

        console.log(gamesMapped)

        library[index].games = gamesMapped
        
        return res.status(200).send(library)
    },
    
    deleteGame: (req, res) => {
        const game = req.params.game
        const index = library.findIndex((element) => element.games.includes(game))
        
        if(index === -1){
            return res.status(404).send(`${game} not found.`)
        }
        
        const gameIndex = library[index].games.findIndex((element) => element.games === game)

        library[index].games.splice(gameIndex, 1)
        
        return res.status(200).send(library)
    }
}