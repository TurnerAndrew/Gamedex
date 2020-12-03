import React from 'react'

const Library = (props) => {
    const gamesArray = props.library.map((element) => {
        return element.games
            })

        const games = gamesArray.flat(9)

        const gamesSorted = games.map((element) => {
            games.sort()
            return <p>{element}</p>
        })       
    
    return <div className='library'>
                <h2>Library</h2>
                {gamesSorted}
            </div>
}

export default Library
    









