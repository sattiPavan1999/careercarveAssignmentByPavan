import './index.css'
import { Component } from 'react'

class Student extends Component{
    state = {
        option: 'ravi',
        name: '',
        submitStatus: false
    }

    clickOption = event => {
        this.setState({
            option: event.target.value
        })
    }

    clickForm = event => {
        event.preventDefault()
        this.setState({
            submitStatus: true
        })
    }

    getInput = event => {
        this.setState({
            name: event.target.value
        })
    }

    renderContent = () => {
        const {option, name, submitStatus} = this.state
        return(
            <form onSubmit={this.clickForm}>
                <div className="nameDiv">
                    <label>Name</label>
                    <input type="text" 
                           placeholder='Enter Name'
                           onChange={this.getInput}/>
                </div>
                <div className="nameDiv">
                    <label>Select Mentor</label>
                    <select onChange={this.clickOption} value={option}>
                        <option value="ravi" id="ravi">Ravi</option>
                        <option value="teja" id="teja">Teja</option>
                        <option value="ram" id="ram">Ram</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Pay</button>
                </div>
            </form>
        )   
    }

    renderSuccess = () => {
        const {option, name, submitStatus} = this.state
        return(
            <div className='payment'>
                <h1>Dear {name}, Your meeting is sheduled with mentor {option}</h1>
                <button>Make Payment</button>
            </div>
        )
    }

    render(){
        const {option, name, submitStatus} = this.state
        return(
            submitStatus ? this.renderSuccess() : this.renderContent()
        )
        

    }
}

export default Student