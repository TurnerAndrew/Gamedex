import React, {Component} from 'react'
import axios from 'axios'
import Form from './Form'
import Services from './Services']
import Library from '/Library'


class Display extends Component {
    constructor(){
        super()
        this.state = {
            library: [],
            service: '',
            game: '',
        }
        this.addGame = this.addGame.bind(this)
        this.deleteGame = this.deleteGame.bind(this)
        }

    componentDidMount(){
        axios
        .get('/api/games')
        .then((res) => this.setState({library: res.data}))
    }

    addGame(game, service) {
        const body = {game, service}

        axios.post('/api/games/', body).then(res => {
            this.setState({library: res.data})
        })
    }

    deleteGame(game, service) {
        axios.delete(`/api/games?game=${game}&service=${service}`)
        .then((res) => {this.setState({library: res.data})
    })
}

    render(){
        return (
            <div className = 'main'>
                <Form addGame={this.addGame} deleteGame={this.deleteGame}/>
                {/* <div> */}
                    <Services library={this.state.library}/>
                    {/* <Library /> */}
                {/* </div> */}
            </div>
        )
    }

}

export default Display