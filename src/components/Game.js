import React from 'react'

const Game = (props) => {
    const gamesMapped = props.games.map((element, index) => {
        props.games.sort()
        return <p key={index}>{element}</p>
    })

    

    return <div className = 'game-container'>{gamesMapped}</div>

}

export default Game