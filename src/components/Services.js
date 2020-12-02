import React from 'react'
import Service from './Service'
import Game from './Game'
import Library from './Library'

const Services = (props) => {
    const servicesMapped = props.library.map((element) => {
        return (
        <div className = 'service'>
            <span className = 'service-name'>
                {/* <h3>{element.service}</h3> */}
                <div className = 'logo-container'>
                    <img src = {element.logo} alt='service-logo'/>
                </div>
            </span>
            <Game key={element.id} games={element.games} editGame={props.editGame}/>
        </div>
        )
    })
        
        
    return (<div className = 'service-container'>{servicesMapped}</div>)
}

export default Services