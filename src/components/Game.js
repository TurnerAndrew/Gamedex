import React from 'react'

const Game = (props) => {
    const gamesMapped = props.games.map((element) => {
        return <p>{element}</p>
    })

    return <div className = 'game-container'>{gamesMapped}</div>


}

export default Game