import React, {Component} from 'react'


class Form extends Component {
    constructor(){
        super()
        this.state = {
            game: '',
            newGame: '',
            service: '',
            newService: ''
        }
        this.handleGameChange = this.handleGameChange.bind(this)
        this.handleServiceChange = this.handleServiceChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleGameEdit = this.handleGameEdit.bind(this)
        this.handleServiceEdit = this.handleServiceEdit.bind(this)
        this.handleNewGame = this.handleNewGame.bind(this)
        // this.handleNewService = this.handleNewService.bind(this)
    }

    handleGameChange(e) {
        this.setState({game: e.target.value})
    }

    handleServiceChange(e){
        this.setState({service: e.target.value})
    }

    // handleNewService(e){
    //     this.setState({newService: e.target.value})
    // }

    handleNewGame(e){
        this.setState({newGame: e.target.value})
    }

    handleAdd(e){
        this.props.addGame(this.state.game, this.state.service)
        e.preventDefault()
    }

    handleDelete(e){
        this.props.deleteGame(this.state.game, this.state.service)
        e.preventDefault()
    }

    handleGameEdit(e){
        this.props.editGame(this.state.game, this.state.newGame, this.state.service)
        e.preventDefault()
    }

    handleServiceEdit(e){
        this.props.editService(this.state.service, this.state.newService)
        e.preventDefault()
    }


    
    render(){
        const games = this.props.library.map((element) => {
            return element.games.map((element, index) => {
            return <option key={index}>{element}</option>
            })
        })

        const services = this.props.library.map((element) => {
            return <option key={element.id}>{element.service}</option>
        })

    return (
        <div className = 'form-container'>
            <h3>Add Game</h3>
           <div className = 'form'>
                <form className = 'form-each'>
                    <input type='text' id='game' placeholder='Enter Game Title' onChange={this.handleGameChange}></input>
                    <select id='service' name='service' onChange={this.handleServiceChange}>
                        <option value ='' disabled selected>Select a Service</option>
                        {services}
                    </select>
                    <button onClick= {this.handleAdd}>Add</button>
                </form>
            </div>
            
            <h3>Remove Game</h3>
            <div className = 'form'>
                <form className = 'form-each'>
                    <input type='text' id='game' placeholder='Enter Game Title' onChange={this.handleGameChange}></input>
                    <select id='service' name='service' onChange={this.handleServiceChange}>
                        <option value ='' disabled selected>Select a Service</option>
                        {services}
                    </select>
                    <button onClick= {this.handleDelete}>Remove</button>
                </form>
            </div>

            <h3>Edit Game</h3>
            <div className = 'form'>
                <form className = 'form-each'>
                    <select id='game' name='game' onChange={this.handleGameChange}>
                        <option value ='' disabled selected>Select a Game to Edit</option>
                        {games}
                    </select>
                    <input type='text' id='game' placeholder='Enter New Title' onChange={this.handleNewGame}></input>
                    <select id='service' name='service' onChange={this.handleServiceChange}>
                        <option value ='' disabled selected>Select a Service</option>
                        {services}
                    </select>
                    <button onClick= {this.handleGameEdit}>Edit Title</button>
                </form>
            </div>
        
        </div>
        )
    }   
}

export default Form