import React from 'react'

const Library = (props) => {
    const games = props.library.map((element) => {
            return element.games.map((element) => {
            return <p>{element}</p>
            })
        })
    
    return <div className='library'>
                <h2>Library</h2>
                <div>
                </div>
                {games.sort()}
                <div>
            
                </div>
            </div>
    
}

export default Library
    









