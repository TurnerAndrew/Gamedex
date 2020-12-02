import React, {Component} from 'react'

class Form extends Component {
    constructor(){
        super()
        this.state = {
            game: '',
            service: ''
        }
        this.handleGameChange = this.handleGameChange.bind(this)
        this.handleServiceChange = this.handleServiceChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleGameChange(e) {
        this.setState({game: e.target.value})
    }

    handleServiceChange(e){
        this.setState({service: e.target.value})
    }

    handleAdd(e){
        this.props.addGame(this.state.game, this.state.service)
        e.preventDefault()
    }

    handleDelete(e){
        this.props.deleteGame(this.state.game, this.state.service)
        e.preventDefault()
    }
    
    render(){
    return (
        <div className = 'form-container'>
           <span className = 'form'>
                <form className = 'form-each'>
                    <input type='text' id='game' placeholder='Enter Game Title' onChange={this.handleGameChange}></input>
                    <select id='service' name='service' onChange={this.handleServiceChange}>
                        <option value ='' disabled selected>Select a Service</option>
                        <option>Steam</option>
                        <option>Epic Games</option>
                        <option>GOG</option>
                        <option>Uplay</option>
                        <option>Origin</option>
                        <option>Twitch</option>
                        <option>XBox Games Pass</option>
                        <option>GMG</option>
                        <option>itch.io</option>
                    </select>
                    <button onClick= {this.handleAdd}>Add</button>
                </form>
            </span>
            
            <span className = 'form'>
                <form className = 'form-each'>
                    <input type='text' id='game' placeholder='Enter Game Title' onChange={this.handleGameChange}></input>
                    <select id='service' name='service' onChange={this.handleServiceChange}>
                        <option value ='' disabled selected>Select a Service</option>
                        <option>Steam</option>
                        <option>Epic Games</option>
                        <option>GOG</option>
                        <option>Uplay</option>
                        <option>Origin</option>
                        <option>Twitch</option>
                        <option>XBox Games Pass</option>
                        <option>GMG</option>
                        <option>itch.io</option>
                    </select>
                    <button onClick= {this.handleDelete}>Remove</button>
                </form>
            </span>
        
        </div>
        )
    }   
}

export default Form