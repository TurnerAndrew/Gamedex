import React from 'react'

const Library = (props) => {
    const games = props.library.map((element) => {
            return element.games.map((element) => {
            return <p>{element}</p>
            })
        })
    
    return <div className='library'>
            <div>
                <h2>Library</h2>
            </div>
            {games.sort()}
            </div>
    
}

export default Library
    









