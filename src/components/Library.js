import React from 'react'

const Library = (props) => {

    // const gamesArray = props.library.reduce((acc, element) => {
    //     const titles = element.games.map((title) => {
    //         return <div><p>{title} - {element.service}</p></div>
    //         })
    //         return [titles, acc]
    // }, []) 

    const gamesArray = props.library.map((element) => {
        return element.games.map((game) => {
            return <p>{game} - {element.service}</p>
                    
        })
    })

    const gamesSorted = gamesArray.sort()

    return <div className='library'>
                <h2>Library</h2>
                {gamesSorted}
            </div>
}

export default Library
    









