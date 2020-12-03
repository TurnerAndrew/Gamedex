import React, {Component} from 'react'


class Form extends Component {
    constructor(){
        super()
        this.state = {
            game: '',
            oldGame: '',
            newGame: '',
            deleteGame: '',
            service: '',
            deleteService: '',
            editService: '',
            newService: ''
        }
        this.handleGameChange = this.handleGameChange.bind(this)
        this.handleServiceChange = this.handleServiceChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleGameEdit = this.handleGameEdit.bind(this)
        this.handleServiceEdit = this.handleServiceEdit.bind(this)
        this.handleNewGame = this.handleNewGame.bind(this)
        this.handleOldGame = this.handleOldGame.bind(this)
        this.handleDeleteGame = this.handleDeleteGame.bind(this)
        this.handleDeleteService = this.handleDeleteService.bind(this)
        this.handleService = this.handleService.bind(this)
        // this.handleNewService = this.handleNewService.bind(this)
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
    
    // handleNewService(e){
    //     this.setState({newService: e.target.value})
    // }

    handleOldGame(e){
        this.setState({oldGame: e.target.value})
    }

    handleNewGame(e){
        this.setState({newGame: e.target.value})
    }

    handleService(e){
        this.setState({editService: e.target.value})
    }

    handleDeleteService(e){
        this.setState({deleteService: e.target.value})
        e.preventDefault()
    }

    handleDeleteGame(e){
        this.setState({deleteGame: e.target.value})
        e.preventDefault()
    }

    handleDelete(e){
        this.props.deleteGame(this.state.deleteGame, this.state.deleteService)
        e.preventDefault()
    }

    handleGameEdit(e){
        this.props.editGame(this.state.oldGame, this.state.newGame, this.state.editService)
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
                    <input type='text' id='game' placeholder='Enter Game Title' onChange={this.handleDeleteGame}></input>
                    <select id='service' name='service' onChange={this.handleDeleteService}>
                        <option value ='' disabled selected>Select a Service</option>
                        {services}
                    </select>
                    <button onClick= {this.handleDelete}>Remove</button>
                </form>
            </div>

            <h3>Edit Game</h3>
            <div className = 'form'>
                <form className = 'form-each'>
                    <select id='game' 
                            name='game' 
                            onChange={this.handleOldGame}>
                        <option value = '' 
                            disabled 
                            selected>Select a Game to Edit
                        </option>
                        {games}
                    </select>
                    <input type='text' 
                            id='game' 
                            placeholder='Enter New Title' 
                            onChange={this.handleNewGame}>
                    </input>
                    <select id='service' 
                        name='service' 
                        onChange={this.handleService}>
                        <option value = '' 
                            disabled selected>Select a Service
                        </option>
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