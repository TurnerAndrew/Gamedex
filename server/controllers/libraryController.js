const library = [
    {
        id : 1,
        service : 'Steam',
        games : [],
        logo: "https://cdn.worldvectorlogo.com/logos/steam.svg"
    },
    {
        id : 2,
        service : 'Epic Games',
        games : [],
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/Epic_Games_logo.svg"
    },
    {
        id : 3,
        service : 'GOG',
        games : [],
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/GOG.com_logo.svg"
    },
    {
        id : 4,
        service: 'Uplay',
        games: [],
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/78/Ubisoft_logo.svg"

    },
    {
        id: 5,
        service: 'Origin',
        games: [],
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Origin.svg"
    },
    {
        id: 6,
        service: 'Twitch',
        games: [],
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Twitch_logo_2019.svg"
    },
    {
        id: 7,
        service: 'XBox Games Pass',
        games: [],
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/Xbox_Game_Pass_new_logo_-_colored_version.svg"
    },
    {
        id: 8,
        service: 'Green Man Gaming',
        games: [],
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Green_Man_Gaming_logo.svg"
    },
    {
        id: 9,
        service: 'itch.io',
        games: [],
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/79/Itch.io_logo.svg"

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
        const {oldGame, newGame, service} = req.query
        const index = library.findIndex((element) => element.service === service)
        
        if(index === -1){
            return res.status(404).send(`${oldGame} not found.`)
        }

        const gameIndex = library[index].games.findIndex((element) => element === oldGame)

        // const gamesMapped = library[index].games.map((element) => element === oldGame ? element = newGame : element = oldGame )

        library[index].games[gameIndex] = newGame
        
        return res.status(200).send(library)
    },

    editService: (req, res) => {
        const {game, oldService, newService} = req.params
        const serviceIndex = library.findIndex((element) => element.service === oldService)
        //find index of the oldService
        const gameIndex = library[serviceIndex].games.findIndex((element) => element.games === (game))
        //find index of the game in the service
        library[serviceIndex].games.splice(gameIndex, 1)
        //splice the game from oldService
        const newIndex = library.findIndex((element) => element.service === newService)
        //find index of newService
        library[newIndex].games.push(game)
        //push the game to newService 
        

        if (serviceIndex === -1){
            return res.status(404).send(`${oldService} not found.`)
        }

        if(gameIndex === -1){
            return res.status(404).send(`${game} not found in ${oldService}`)
        }

        if(newIndex === -1){
            return res.status(404).send(`${newService} not found.`)
        }

    },
    
    deleteGame: (req, res) => {
        const {game, service} = req.query
        const index = library.findIndex((element) => element.service === service)
        
        if(index === -1){
            return res.status(404).send(`${game} not found in ${service}`)
        }
        
        const gameIndex = library[index].games.findIndex((element) => element === game)

        if (gameIndex === -1){
            return res.status(404).send(`${game} not found.`)
        } 

        library[index].games.splice(gameIndex, 1)
        
        return res.status(200).send(library)
    }
}