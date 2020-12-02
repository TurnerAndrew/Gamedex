import React from 'react'
import Game from './Game'

const Service = (props) => {
    const gamesMapped = props.service.map((element) => {
        return (
            <div>
                <Game key={element.id} games={element.games}/>
            </div>
        )
    })

    return <div>{gamesMapped}</div>

}

export default Service