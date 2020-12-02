const library = [
    {
        id : 1,
        service : 'Steam',
        games : [],
        logo: "https://1000logos.net/wp-content/uploads/2020/08/Steam-Logo.png"
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
        logo: "https://en.wikipedia.org/wiki/Origin_Energy#/media/File:Origin_Energy_logo.svg"
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
        const oldGame = req.params.game
        const {newGame} = req.body
        const index = library.findIndex((element) => element.games.includes(oldGame))
        
        if(index === -1){
            return res.status(404).send(`${oldGame} not found.`)
        }

        const gamesMapped = library[index].games.map((element) => element === oldGame ? element = newGame : element)

        library[index].games = gamesMapped
        
        return res.status(200).send(library)
    },
    
    deleteGame: (req, res) => {
        const {game, service} = req.query
        const index = library.findIndex((element) => element.service === service)
        
        if(index === -1){
            return res.status(404).send(`${game} not found.`)
        }
        
        const gameIndex = library[index].games.findIndex((element) => element.games === game)

        library[index].games.splice(gameIndex, 1)
        
        return res.status(200).send(library)
    }
}