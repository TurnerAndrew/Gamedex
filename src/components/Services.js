import React from 'react'
import Game from './Game'


const Services = (props) => {
    const servicesMapped = props.library.map((element) => {
        return (
        <div className = 'service'>
            <div className = 'service-name'>
                <h3>{element.service}</h3>
                <div className = 'logo-container'>
                    <img src = {element.logo} alt='service-logo'/>
                </div>
            </div>
            <Game key={element.id} games={element.games} editGame={props.editGame}/>
        </div>
        )
    })
        
        
    return (<div className = 'service-container'>{servicesMapped}</div>)
}

export default Services