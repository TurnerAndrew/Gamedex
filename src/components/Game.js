import React from 'react'
import { editGame } from '../../server/controllers/libraryController'

const Game = (props) {
    const gameMap = props.library[index].games.map((element) => {
        return <p onClick={props.editGame}>{element}</p>
    })

}